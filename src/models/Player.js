/**
 * Clase Player - Representa al jugador
 * Extiende de Character
 */
import Character from './Character.js';

class Player extends Character {
  constructor() {
    const sprites = {
      idle: 'src/assets/sprites/Atacante/espera.gif',
      attack: 'src/assets/sprites/Atacante/ataca.gif',
      hit: 'src/assets/sprites/Atacante/golpeado.gif',
      die: 'src/assets/sprites/Atacante/muere.gif'
    };
    
    super('Jugador', '#estAta', sprites);
    this.healthBarSelector = '.vidAta';
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
}

export default Player;
