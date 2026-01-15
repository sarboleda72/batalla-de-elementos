/**
 * Clase AnimationController - Controla todas las animaciones del juego
 */
import TimeHelper from '../utils/TimeHelper.js';
import DOMHelper from '../utils/DOMHelper.js';

class AnimationController {
  constructor(config) {
    this.config = config;
  }

  async playAttackAnimation(attacker, defender, attack) {
    // Animar atacante
    attacker.attack();
    attack.showEffect();
    
    await TimeHelper.delay(this.config.ATTACK_DELAY);
    
    // Volver a idle
    attacker.idle();
    
    // Animar defensor golpeado
    defender.hit();
    
    return { attacker, defender, attack };
  }

  async playFireAnimation(effectElement) {
    DOMHelper.setStyle(effectElement, 'position', 'absolute');
    DOMHelper.setStyle(effectElement, 'top', '53.5%');
    DOMHelper.setStyle(effectElement, 'left', '50%');
    DOMHelper.setStyle(effectElement, 'animation', 'aparecer-desplazar 1s linear forwards');
    DOMHelper.setStyle(effectElement, 'opacity', '0');

    const keyframes = `
      @keyframes aparecer-desplazar {
        0% {
          opacity: 1;
          left: 17%;
        }
        100% {
          opacity: 1;
          left: 70%;
        }
      }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = keyframes;
    document.head.appendChild(styleSheet);
    
    await TimeHelper.delay(this.config.FIRE_ANIMATION_DELAY);
    
    return styleSheet;
  }

  resetFireAnimation(element, styleSheet) {
    DOMHelper.setStyle(element, 'position', '');
    DOMHelper.setStyle(element, 'top', '');
    DOMHelper.setStyle(element, 'left', '');
    DOMHelper.setStyle(element, 'animation', '');
    DOMHelper.setStyle(element, 'opacity', '');
    
    if (styleSheet && styleSheet.parentNode) {
      styleSheet.parentNode.removeChild(styleSheet);
    }
  }

  playDeathAnimation(character) {
    character.die();
  }
}

export default AnimationController;
