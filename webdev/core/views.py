from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated 
from . import serializers
from .models import Event
from django.http import Http404
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer
from django.http import JsonResponse






class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)


class Welcome(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        content = {"message": "Welcome to the BookStore!"}
        return JsonResponse(content)
            
         
@api_view(['POST'])
#@permission_classes((permissions.AllowAny,))

def createUser(request):
    data = request.data.dict()
    print(data)
    try: 
        user = User.objects.create_user(data['username'] ,data['email'] , data['password'] )
        user.first_name = data['first_name'] 
        user.last_name = data['last_name'] 
        user.save()
        return Response(status=201)
    except:
        #traceback.print_exc()
        return Response(status=400)






class Events(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        events = Event.objects.filter(tokenu = token)
        serializer = serializers.EventSerializer(events, many=True)
        return Response(serializer.data)

    def post(self, request):
        print(request.data)
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        dic = request.data.copy()
        dic.appendlist('tokenu', token)
        print(dic)
        serializer = serializers.EventSerializer(data=dic)
        #token = request.headers["Authorization"]
        
        #token = token[5:46]
        
        #user_id = Token.objects.get(key=token)
    
        #user = Token.objects.get(key= request.META["HTTP_AUTHORIZATION"]).user
        #print(token.user_id)

        print(token)
        #data = {'token': token}
        #valid_data = VerifyJSONWebTokenSerializer().validate(data)
        #user = valid_data['user']
        #print(valid_data)
        #request.user = user
        #print(user)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EventDetail(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, event_id):
        try:
            event = Event.objects.get(pk=event_id)
        except Event.DoesNotExist:
            raise Http404
        serializer = serializers.EventSerializer(event)
        return Response(serializer.data)

    def put(self, request, event_id):
        try:
            event = Event.objects.get(pk=event_id)
        except Event.DoesNotExist: 
            return Response({'message': 'The Event does not exist'}, status=status.HTTP_404_NOT_FOUND) 
        data = request.data
        serializer = serializers.EventSerializer(event, data=data) 
        if serializer.is_valid(): 
            serializer.save() 
            return Response(serializer.data) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 

    def delete(self, request, event_id):
        try:
            event = Event.objects.get(pk=event_id)
        except Event.DoesNotExist:
            raise Http404
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


