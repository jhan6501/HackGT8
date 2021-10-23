from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/', views.api_call, name='api'),
    path('bruh/', views.penis, name = 'penis')
]