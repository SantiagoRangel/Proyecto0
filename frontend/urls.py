from django.urls import path
from . import views

urlpatterns = [
  path('', views.index),
  path('Register', views.index),
  path('Login', views.index)
]