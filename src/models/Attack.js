/**
 * Clase Attack - Representa un ataque en el juego
 * Contiene la configuración de cada tipo de ataque
 */
class Attack {
  constructor(type, name, effectSprite, effectSelector) {
    this.type = type;
    this.name = name;
    this.effectSprite = effectSprite;
    this.effectSelector = effectSelector;
  }

  getEffectElement() {
    return document.querySelector(this.effectSelector) || 
           document.getElementById(this.effectSelector.replace('.', '').replace('#', ''));
  }

  showEffect() {
    const element = this.getEffectElement();
    if (element) {
      element.src = this.effectSprite;
    }
  }

  hideEffect() {
    const element = this.getEffectElement();
    if (element) {
      element.src = '';
    }
  }
}

export default Attack;
