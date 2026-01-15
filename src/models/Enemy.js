/**
 * Clase Enemy - Representa al enemigo
 * Extiende de Character
 */
import Character from './Character.js';

class Enemy extends Character {
  constructor() {
    const sprites = {
      idle: 'src/assets/sprites/Enemigo/espera.gif',
      attack: 'src/assets/sprites/Enemigo/ataca.gif',
      hit: 'src/assets/sprites/Enemigo/golpeado.gif',
      die: 'src/assets/sprites/Enemigo/muere.gif'
    };
    
    super('Enemigo', '#estDef', sprites);
    this.healthBarSelector = '.vidEne';
  }

  getHealthBar() {
    return document.querySelector(this.healthBarSelector);
  }

  updateHealthBar(width) {
    const healthBar = this.getHealthBar();
    if (healthBar) {
      healthBar.style.width = `${width}px`;
    }
  }

  selectRandomAttack() {
    return Math.floor(Math.random() * 3);
  }

  selectRandomDefense() {
    return Math.floor(Math.random() * 3);
  }
}

export default Enemy;
