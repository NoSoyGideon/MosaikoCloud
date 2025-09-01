from warmog import Warmog

user = "david"
id = 1234

warmog = Warmog()

warmog.entrar("arros")
warmog.entrar("arros")

archivos = warmog.listar_archivos()

for archivo in archivos:
    print(archivo)

print(warmog.current)


