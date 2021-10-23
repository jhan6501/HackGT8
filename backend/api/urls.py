from django.urls import path

from . import views

urlpatterns = [
    path('home/', views.home, name='Home'),
    path('about/', views.about, name='About'),
    path('get-all-listings/', views.get_all_listings, name = 'Market'),
    path('login/', views.login, name = 'Login'),
    path('contact/', views.contact, name = 'Contact'),
    path('register/',views.register, name = 'Register'),
]