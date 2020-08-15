from django.urls import path
from . import views

urlpatterns = [
    path('api/events/', views.Events.as_view()),
    path('api/events/<str:event_id>/', views.EventDetail.as_view()),
    
]