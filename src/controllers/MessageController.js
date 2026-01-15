/**
 * Clase MessageController - Controla los mensajes visuales del juego
 */
import DOMHelper from '../utils/DOMHelper.js';

class MessageController {
  constructor() {
    this.messageElement = DOMHelper.getElement('.mensaje');
    this.messages = {
      critical: 'src/assets/sprites/interfaz/mensaje/golpecritico.gif',
      hit: 'src/assets/sprites/interfaz/mensaje/golpeacertado.gif',
      miss: 'src/assets/sprites/interfaz/mensaje/fallocritico.gif',
      attack: 'src/assets/sprites/interfaz/mensaje/ataca.gif',
      defend: 'src/assets/sprites/interfaz/mensaje/defiendete.gif'
    };
  }

  show(messageType) {
    if (this.messages[messageType] && this.messageElement) {
      DOMHelper.setSource(this.messageElement, this.messages[messageType]);
    }
  }

  hide() {
    if (this.messageElement) {
      DOMHelper.setSource(this.messageElement, '');
    }
  }

  showDamageMessage(damageType, soundManager) {
    switch(damageType) {
      case 'critical':
        this.show('critical');
        if (soundManager) {
          soundManager.play('src/assets/sonidos/critical.mp3');
        }
        break;
      case 'normal':
        this.show('hit');
        break;
      case 'miss':
        this.show('miss');
        break;
    }
  }
}

export default MessageController;
