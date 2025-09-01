from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.conf import settings
from .models import Project
from .form import ProjectForm
from .signals import instancia_global
from minio import Minio
# Create your views here.
def prober(request):
    client = Minio(
            "localhost:9000",
            access_key="david",
            secret_key="lachupagratis",
            secure=False  # porque es HTTP, no HTTPS
        )
    files = []
    for obj in client.list_objects("projects"):
        files.append({
            "name": obj.object_name,
            "url": client.presigned_get_object("projects", obj.object_name),
            "size": obj.size,
            "type": "application/octet-stream"  # opcional, puedes deducir por extensión
        })
    return JsonResponse(files, safe=False)


def home(request):
    projects = Project.objects.all()
    return render(request, 'home.html', {'projects': projects})

def create_project(request):
    if request.method == 'POST':
        form = ProjectForm(request.POST)
        if form.is_valid():
            project = form.save()
    
            settings.WARMOG_INSTANCE.createProject(project.id_formateado)
            return redirect('home')
    else:
        form = ProjectForm()    
    return render(request, 'create.html', {'form': form})

def project_detail(request, project_id = -1, carpeta = None):
    if carpeta:
        if settings.WARMOG_INSTANCE:
            settings.WARMOG_INSTANCE.entrar(carpeta)
            objects = settings.WARMOG_INSTANCE.listar_archivos()
            project = Project.objects.get(id=project_id)
            current = settings.WARMOG_INSTANCE.current
            return render(request, 'project_detail.html', {'project': project, 'carpetas': objects[0], 'archivos': objects[1], 'project_id': project.id,'current': current})
        else:
            return redirect('home')
    
    
    if project_id == -1:
        return redirect('home')
    if settings.WARMOG_INSTANCE:
        project = Project.objects.get(id=project_id)
        settings.WARMOG_INSTANCE.defProject(project.id_formateado)
        objects = settings.WARMOG_INSTANCE.listar_archivos()
        current = settings.WARMOG_INSTANCE.current
        return render(request, 'project_detail.html', {'project': project, 'carpetas': objects[0], 'archivos': objects[1], 'project_id': project.id,'current': current})
    else:
        return redirect('home')

def back(request):
    if settings.WARMOG_INSTANCE:
        settings.WARMOG_INSTANCE.salir()
        return redirect('project_detail', project_id=settings.WARMOG_INSTANCE.projectId)
    return redirect('project_detail', project_id=settings.WARMOG_INSTANCE.projectId)