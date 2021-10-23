from django.urls import path

from . import views

urlpatterns = [
    path('home/', views.home, name='Home'),
    path('About/', views.about, name='About'),
    path('Market/', views.market, name = 'Market')
    path('Login/', views.login, name = 'Login')
    path('Contact/', views.contact, name = 'Contact')
    path('Register/',views.register, name = 'Register')
]