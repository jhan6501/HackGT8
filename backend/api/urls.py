from django.urls import path

from . import views

urlpatterns = [
    path('home/', views.home, name='Home'),
    path('about/', views.about, name='About'),
    path('get-all-listings/', views.get_all_listings, name = 'Market'),
    path('login/', views.login, name = 'Login'),
    path('contact/', views.contact, name = 'Contact'),
    path('register/',views.register, name = 'Register'),
    path('get-listing-by-id/', views.get_listing_by_id, name = 'Search'),
    path('post-listing/', views.post_listing, name = 'Post'),
    path('delete-listing/', views.delete_listing, name = 'Delete')
]