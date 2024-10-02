from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Add a path for the home page
    path('upload/', views.upload_handwriting, name='upload_handwriting'),
    path('upload/success/', views.upload_success, name='upload_success'),
]
