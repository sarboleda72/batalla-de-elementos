# 🎮 Batalla de Elementos

Un juego de batalla tipo Pokémon con mecánica piedra-papel-tijera usando tres elementos: Agua 💧, Fuego 🔥 y Trueno ⚡.

Desarrollado con **Programación Orientada a Objetos (POO)** y arquitectura modular tipo Java.

## 📋 Descripción

Batalla de Elementos es un juego web interactivo donde el jugador se enfrenta a un oponente controlado por IA en combates por turnos. Cada jugador tiene tres tipos de ataques elementales, y el objetivo es reducir la vida del oponente a cero antes de ser derrotado.

## 🎯 Características

- ✨ **Arquitectura POO** con separación clara de responsabilidades
- 🏗️ **Estructura modular** tipo Java (Models, Controllers, Utils)
- 🎨 **Animaciones suaves** y efectos visuales mejorados
- 🎵 **Efectos de sonido** y música ambiental
- 📊 **Sistema de puntuación** y combos
- 🎮 **Controles por teclado** (teclas 1, 2, 3) y mouse
- 📱 **Diseño responsive** adaptable a diferentes tamaños de pantalla
- ♿ **Accesibilidad mejorada** con etiquetas ARIA

## 🎲 Mecánica de Juego

### Sistema de Ventajas

| Ataque | Fuerte contra | Débil contra | Neutral |
|--------|---------------|--------------|---------|
| 💧 Agua | 🔥 Fuego | ⚡ Trueno | 💧 Agua |
| 🔥 Fuego | ⚡ Trueno | 💧 Agua | 🔥 Fuego |
| ⚡ Trueno | 💧 Agua | 🔥 Fuego | ⚡ Trueno |

### Daño

- **Golpe Crítico** (Ventaja): 80 puntos de daño
- **Golpe Normal** (Neutral): 40 puntos de daño  
- **Fallo Crítico** (Desventaja): 0 puntos de daño

## 🎮 Controles

### Mouse
- Click en los botones de elementos para atacar/defender

### Teclado
- **Tecla 1**: Ataque de Agua 💧
- **Tecla 2**: Ataque de Fuego 🔥
- **Tecla 3**: Ataque de Trueno ⚡

## 🚀 Instalación y Uso

1. Clona el repositorio:
```bash
git clone https://github.com/tuusuario/batalla-de-elementos.git
```

2. Inicia un servidor local (requerido para ES6 modules):
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (usando npx)
npx serve

# Con PHP
php -S localhost:8000
```

3. Abre en tu navegador: `http://localhost:8000`

4. ¡Presiona el botón "Start" y comienza a jugar!

## 📁 Estructura del Proyecto (POO)

```
batalla-de-elementos/
├── index.html              # Archivo HTML principal
├── css/
│   └── styles.css          # Estilos y animaciones
├── src/
│   ├── main.js             # Punto de entrada
│   ├── models/             # 📦 Modelos de datos
│   │   ├── Config.js       # Configuración del juego
│   │   ├── GameState.js    # Estado del juego
│   │   ├── Character.js    # Clase base de personaje
│   │   ├── Player.js       # Modelo del jugador
│   │   ├── Enemy.js        # Modelo del enemigo
│   │   └── Attack.js       # Modelo de ataque
│   ├── controllers/        # 🎮 Controladores
│   │   ├── GameController.js      # Controlador principal
│   │   ├── AttackController.js    # Control de ataques
│   │   ├── ButtonController.js    # Control de botones
│   │   ├── MessageController.js   # Control de mensajes
│   │   └── AnimationController.js # Control de animaciones
│   ├── utils/              # 🔧 Utilidades
│   │   ├── DOMHelper.js           # Ayudas para DOM
│   │   ├── TimeHelper.js          # Ayudas de tiempo
│   │   ├── RandomHelper.js        # Números aleatorios
│   │   ├── SoundManager.js        # Gestión de sonido
│   │   └── DamageCalculator.js    # Cálculo de daño
│   └── assets/             # 🎨 Recursos
│       ├── sprites/        # Imágenes y sprites
│       └── sonidos/        # Efectos de sonido
└── README.md               # Este archivo
```

## 🏛️ Arquitectura POO

### Modelos (Models)
- **Config**: Configuración centralizada del juego
- **GameState**: Mantiene el estado actual de la partida
- **Character**: Clase base abstracta para personajes
- **Player**: Hereda de Character, representa al jugador
- **Enemy**: Hereda de Character, representa al enemigo
- **Attack**: Representa un ataque con sus efectos visuales

### Controladores (Controllers)
- **GameController**: Coordina todo el flujo del juego y otros controladores
- **AttackController**: Maneja la lógica de ataques y daño
- **ButtonController**: Gestiona los botones de interfaz
- **MessageController**: Controla los mensajes visuales
- **AnimationController**: Maneja todas las animaciones

### Utilidades (Utils)
- **DOMHelper**: Funciones helper para manipulación del DOM
- **TimeHelper**: Delays, setTimeout y control de tiempo
- **RandomHelper**: Generación de números aleatorios
- **SoundManager**: Gestión centralizada de audio
- **DamageCalculator**: Cálculo de daño según matriz de ventajas

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesibilidad
- **CSS3**: Animaciones, efectos visuales y diseño responsive
- **JavaScript ES6+**: Clases, modules, async/await, herencia
- **POO**: Programación Orientada a Objetos
- **Web Audio API**: Gestión de sonidos

## 🎨 Principios de Diseño Aplicados

- **Single Responsibility**: Cada clase tiene una única responsabilidad
- **Encapsulación**: Datos y métodos agrupados lógicamente
- **Herencia**: Player y Enemy heredan de Character
- **Modularidad**: Un archivo por clase, imports/exports
- **Separación de Concerns**: Models, Controllers, Utils
- **DRY (Don't Repeat Yourself)**: Código reutilizable

## 📝 Cómo Extender el Juego

### Agregar un Nuevo Elemento

1. Actualiza `Config.js`:
```javascript
this.ATTACK_TYPES = {
  WATER: 0,
  FIRE: 1,
  THUNDER: 2,
  EARTH: 3  // Nuevo elemento
};
```

2. Actualiza `DamageCalculator.js` con las nuevas combinaciones

3. Agrega sprites en `src/assets/sprites/`

4. Actualiza `AttackController.js` para manejar el nuevo ataque

### Agregar un Nuevo Personaje

1. Crea una nueva clase que extienda `Character`:
```javascript
import Character from './Character.js';

class Boss extends Character {
  constructor() {
    const sprites = { /* tus sprites */ };
    super('Boss', '#boss', sprites);
  }
}
```

2. Úsala en `GameController.js`

## 🐛 Solución de Problemas

### El juego no carga
- ✅ Usa un servidor local (no file://) por restricciones de CORS
- ✅ Verifica que tu navegador soporte ES6 modules
- ✅ Abre la consola del navegador (F12) para ver errores

### Errores de imports
- ✅ Asegúrate de que todas las rutas incluyan la extensión `.js`
- ✅ Verifica que la estructura de carpetas sea correcta
- ✅ Usa rutas relativas correctamente

### Las imágenes no aparecen
- ✅ Verifica que `src/assets/sprites/` y `src/assets/sonidos/` existan
- ✅ Asegúrate de que las rutas comiencen con `src/assets/`

## 🎓 Conceptos de POO Implementados

1. **Clases y Objetos**: Cada entidad del juego es una clase
2. **Herencia**: Player y Enemy heredan de Character
3. **Encapsulación**: Propiedades privadas y métodos públicos
4. **Polimorfismo**: Métodos que se comportan diferente según el objeto
5. **Composición**: GameController compone otros controladores
6. **Abstracción**: Character es una clase base abstracta

## 👨‍💻 Autor

**Santiago Arboleda Agudelo**

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

## 🎮 ¡Diviértete jugando!

Si te gusta el proyecto, no olvides darle una ⭐ en GitHub.
