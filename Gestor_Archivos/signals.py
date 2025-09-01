# mi_app/signals.py

from django.db.models.signals import post_migrate
from django.dispatch import receiver
from .warmog import Warmog
from django.conf import settings


# Variable global para guardar la instancia
instancia_global = None

@receiver(post_migrate)
def inicializar_mi_clase(sender, **kwargs):
    global instancia_global
    if instancia_global is None:
        instancia_global = Warmog()
        print("Instancia de Warmog creada y almacenada.")