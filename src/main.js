/**
 * main.js - Punto de entrada de la aplicación
 * Inicializa el controlador del juego y expone funciones globales
 */
import GameController from './controllers/GameController.js';

// Instancia global del controlador
let gameController;

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  console.log('🎮 Batalla de Elementos - Iniciando...');
  gameController = new GameController();
  console.log('✅ Juego inicializado correctamente');
});

// Funciones globales para compatibilidad con eventos inline en HTML
window.inicio = function() {
  if (gameController) {
    gameController.start();
  }
};

window.ataAgu = function() {
  if (gameController) {
    gameController.handlePlayerAttack(gameController.config.ATTACK_TYPES.WATER);
  }
};

window.ataFue = function() {
  if (gameController) {
    gameController.handlePlayerAttack(gameController.config.ATTACK_TYPES.FIRE);
  }
};

window.ataTru = function() {
  if (gameController) {
    gameController.handlePlayerAttack(gameController.config.ATTACK_TYPES.THUNDER);
  }
};

window.btnAguAba = function(elemento) {
  if (gameController) {
    gameController.buttonController.setButtonState(elemento, 'abajo');
  }
};

window.btnAguArr = function(elemento) {
  if (gameController) {
    gameController.buttonController.setButtonState(elemento, 'arriba');
  }
};

window.btnFueAba = function(elemento) {
  if (gameController) {
    gameController.buttonController.setButtonState(elemento, 'abajo');
  }
};

window.btnFueArr = function(elemento) {
  if (gameController) {
    gameController.buttonController.setButtonState(elemento, 'arriba');
  }
};

window.btnTruAba = function(elemento) {
  if (gameController) {
    gameController.buttonController.setButtonState(elemento, 'abajo');
  }
};

window.btnTruArr = function(elemento) {
  if (gameController) {
    gameController.buttonController.setButtonState(elemento, 'arriba');
  }
};

export default gameController;
