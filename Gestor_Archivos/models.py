from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.name
    @property
    def id_formateado(self):
        # Formatea el id con 6 dígitos, rellenando con ceros a la izquierda
        return f"{self.id:06d}"