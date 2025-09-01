from django.urls import path
from . import views

urlpatterns =[path('home/', views.home, name='home'),
              path('create/', views.create_project, name='create_project'),
              path('project/<int:project_id>/', views.project_detail, name='project_detail'),
              path('project/<int:project_id>/<str:carpeta>/', views.project_detail, name='project_detail'),
              path('project/back/', views.back, name='back'),
                path('prober/', views.prober, name='prober')

]
