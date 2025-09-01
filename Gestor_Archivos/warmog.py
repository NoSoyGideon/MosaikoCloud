from minio import Minio
import io

class Warmog:
    def __init__(self):
        self.client = Minio(
            "localhost:9000",
            access_key="david",
            secret_key="lachupagratis",
            secure=False  # porque es HTTP, no HTTPS
        )
        self.bucket_name = "projects"
        self.id = "gideon"
        self.current = ""
        self.projectId = "000002"

    def defUser(self,id):
        self.id = id
    def defProject(self,projectId):
        self.projectId = projectId
        self.current = ""

    def createProject(self,id_proyecto):
        folder_name = f"{self.id}/{id_proyecto}/"
        self.client.put_object(self.bucket_name,folder_name,io.BytesIO(b""), 0)
        print(f"Carpeta '{folder_name}' creada en el bucket '{self.bucket_name}'")

    def deleteProject(self, carpeta):
        prefix = f"{self.id}/{carpeta.strip('/')}/"

        # Listar todos los objetos dentro de la carpeta
        objects = self.client.list_objects(self.bucket_name, prefix=prefix, recursive=True)

        # Borrarlos uno por uno
        for obj in objects:
            self.client.remove_object(self.bucket_name, obj.object_name)
            print(f"Eliminado: {obj.object_name}")

        # Borrar el marcador de carpeta si existe
        try:
            self.client.remove_object(self.bucket_name, prefix)
            print(f"Carpeta {prefix} eliminada")
        except:
            pass



    def getMetadatas(self, objects):
        for obj in objects:
            print("Nombre:", obj.object_name)
            print("Tamaño:", obj.size, "bytes")
            print("Última modificación:", obj.last_modified)
            print("ETag:", obj.etag)  # hash del objeto
            print("Tipo de almacenamiento:", obj.storage_class)
            print("-" * 40)

    def listar_archivos(self):
        folder_name = f"{self.id}/{self.projectId}/{self.current}"
        if self.projectId == "":
            folder_name =f"{self.id}/"
  
        # Normaliza el prefijo
        prefix = folder_name.strip("/")
        if prefix:
            prefix += "/"

        objetos = self.client.list_objects(
            self.bucket_name,
            prefix=prefix,
            recursive=False  # solo hijos directos
        )

        carpetas, archivos = [], []
        for obj in objetos:
            nombre_rel = obj.object_name[len(prefix):]
            if not nombre_rel:            # ignora el propio marcador de carpeta
                continue
            if obj.object_name.endswith("/"):
                carpetas.append(nombre_rel.rstrip("/"))
            else:
                archivos.append(nombre_rel)

        # Si quieres carpetas primero y luego archivos:
        return [carpetas , archivos]
    




    def entrar(self, prefix: str):
        self.current = f"{self.current}/{prefix}/".replace("//", "/")
        self.current = self.current.strip("/")

    def salir(self):

        # Elimina posibles "/" extra al final
        self.current = self.current.rstrip("/")
        # Divide en segmentos
        partes = self.current.split("/")
        # Quita el último
        if len(partes) > 1:
            self.current = "/".join(partes[:-1])
        else:
            self.current = ""
