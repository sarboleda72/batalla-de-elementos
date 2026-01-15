/**
 * Clase ButtonController - Controla los botones del juego
 */
import DOMHelper from '../utils/DOMHelper.js';

class ButtonController {
  constructor() {
    this.buttons = {
      water: DOMHelper.getElement('.btnAgu'),
      fire: DOMHelper.getElement('.btnFue'),
      thunder: DOMHelper.getElement('.btnTru')
    };
  }

  setButtonState(button, state) {
    const buttonType = this.getButtonType(button);
    if (!buttonType) return;

    const imagePath = `src/assets/sprites/interfaz/botones/${buttonType}/${state}.png`;
    DOMHelper.setSource(button, imagePath);
  }

  getButtonType(button) {
    if (!button || !button.className) return null;
    
    if (button.className.includes('btnAgu')) return 'agua';
    if (button.className.includes('btnFue')) return 'fuego';
    if (button.className.includes('btnTru')) return 'trueno';
    
    return null;
  }

  blockButtons() {
    Object.values(this.buttons).forEach(btn => {
      if (btn) {
        btn.onclick = null;
        DOMHelper.setStyle(btn, 'pointerEvents', 'none');
        DOMHelper.setStyle(btn, 'opacity', '0.5');
      }
    });
  }

  unblockButtons() {
    Object.values(this.buttons).forEach(btn => {
      if (btn) {
        DOMHelper.setStyle(btn, 'pointerEvents', 'auto');
        DOMHelper.setStyle(btn, 'opacity', '1');
      }
    });
  }

  assignAttackHandlers(attackCallback) {
    const handlers = {
      water: () => attackCallback(0),
      fire: () => attackCallback(1),
      thunder: () => attackCallback(2)
    };

    Object.entries(this.buttons).forEach(([type, btn]) => {
      if (btn) {
        btn.onclick = handlers[type];
      }
    });
    
    this.unblockButtons();
  }

  assignDefenseHandlers(defenseCallback) {
    const handlers = {
      water: () => defenseCallback(0),
      fire: () => defenseCallback(1),
      thunder: () => defenseCallback(2)
    };

    Object.entries(this.buttons).forEach(([type, btn]) => {
      if (btn) {
        btn.onclick = handlers[type];
      }
    });
    
    this.unblockButtons();
  }
}

export default ButtonController;
