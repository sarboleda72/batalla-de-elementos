/**
 * Clase Config - Configuración centralizada del juego
 * Contiene todas las constantes y configuraciones del juego
 */
class Config {
  constructor() {
    this.ATTACK_DELAY = 900;
    this.DEFENSE_DELAY = 3000;
    this.DEATH_ANIMATION_DELAY = 2000;
    this.FIRE_ANIMATION_DELAY = 1000;
    this.MIN_HEALTH = 0;
    this.MAX_HEALTH = 200;
    
    this.ATTACK_TYPES = {
      WATER: 0,
      FIRE: 1,
      THUNDER: 2
    };
    
    this.DAMAGE = {
      CRITICAL: 80,
      NORMAL: 40,
      MISS: 0
    };
  }

  getAttackDelay() {
    return this.ATTACK_DELAY;
  }

  getDefenseDelay() {
    return this.DEFENSE_DELAY;
  }

  getMaxHealth() {
    return this.MAX_HEALTH;
  }

  getDamage(type) {
    return this.DAMAGE[type];
  }
}

export default Config;
