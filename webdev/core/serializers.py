
from rest_framework import serializers
from . import models
import base64
from django.conf import settings
import os


class EventSerializer(serializers.ModelSerializer):
    # Serializer for the Restaurant model, in fields we specify the model attributes we want to
    # deserialize and serialize
    class Meta:
        model = models.Event
        fields = ['id', 'event_name', 'event_category', 'event_place', 'event_address', 'event_initial_date' , 'event_final_date','event_type', 'thumbnail' ,'tokenu']
    #def create(self, validated_data):
    #data = validated_data.copy()
    #data['user'] = self.context['request'].user

    #return super(JournalSerializer, self).create(data)


