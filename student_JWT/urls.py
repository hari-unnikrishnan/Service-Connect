from django.urls import path
from . import views

urlpatterns = [
    path('students/', views.view_students),
    path('students/add/', views.add_student),
    path('students/<int:pk>/', views.view_student),
    path('students/update/<int:pk>/', views.update_student),
    path('students/delete/<int:pk>/', views.delete_student),
]
