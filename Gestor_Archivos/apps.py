from django.apps import AppConfig


class Gestor_ArchivosConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'Gestor_Archivos'
    def ready(self):
            # Esto se ejecuta **al arrancar el servidor**
        from .warmog import Warmog
        from django.conf import settings

        if not hasattr(settings, 'WARMOG_INSTANCE'):
            settings.WARMOG_INSTANCE = Warmog()
            print("Instancia de Warmog creada al iniciar Django")

