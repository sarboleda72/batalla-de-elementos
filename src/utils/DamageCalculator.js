/**
 * Clase DamageCalculator - Calcula el daño según tipo de ataque y defensa
 */
class DamageCalculator {
  constructor(config) {
    this.config = config;
    this.damageMatrix = {
      '0-0': config.DAMAGE.NORMAL,    // agua vs agua
      '0-1': config.DAMAGE.CRITICAL,  // agua vs fuego (ventaja)
      '0-2': config.DAMAGE.MISS,      // agua vs trueno (desventaja)
      '1-0': config.DAMAGE.MISS,      // fuego vs agua (desventaja)
      '1-1': config.DAMAGE.NORMAL,    // fuego vs fuego
      '1-2': config.DAMAGE.CRITICAL,  // fuego vs trueno (ventaja)
      '2-0': config.DAMAGE.CRITICAL,  // trueno vs agua (ventaja)
      '2-1': config.DAMAGE.MISS,      // trueno vs fuego (desventaja)
      '2-2': config.DAMAGE.NORMAL     // trueno vs trueno
    };
  }

  calculate(attackType, defenseType) {
    const key = `${attackType}-${defenseType}`;
    return this.damageMatrix[key] || this.config.DAMAGE.MISS;
  }

  getDamageType(damage) {
    if (damage === this.config.DAMAGE.CRITICAL) return 'critical';
    if (damage === this.config.DAMAGE.NORMAL) return 'normal';
    return 'miss';
  }
}

export default DamageCalculator;
