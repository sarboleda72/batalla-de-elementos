from collections import namedtuple

# Crear una clase "aprendiz" con un campo "documento"
objApr = namedtuple('Aprendiz', 'nombre documento')

# Crear una instancia de la clase "aprendiz"
aprendiz= objApr(nombre='Santiago', documento='123')

# Acceder al campo "documento"
print(f'El nombre de el aprendiz es {aprendiz.nombre} y su documento es {aprendiz.documento}') 
