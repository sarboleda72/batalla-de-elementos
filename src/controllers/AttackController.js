/**
 * Clase AttackController - Controla el sistema de ataques del juego
 */
import TimeHelper from '../utils/TimeHelper.js';
import Attack from '../models/Attack.js';
import DOMHelper from '../utils/DOMHelper.js';

class AttackController {
  constructor(config, gameState, player, enemy, animationController, messageController, damageCalculator, soundManager) {
    this.config = config;
    this.gameState = gameState;
    this.player = player;
    this.enemy = enemy;
    this.animationController = animationController;
    this.messageController = messageController;
    this.damageCalculator = damageCalculator;
    this.soundManager = soundManager;
    
    this.playerAttacks = this.initializePlayerAttacks();
    this.enemyAttacks = this.initializeEnemyAttacks();
  }

  initializePlayerAttacks() {
    return {
      [this.config.ATTACK_TYPES.WATER]: new Attack(
        this.config.ATTACK_TYPES.WATER,
        'Agua',
        'src/assets/sprites/ataque/agua.gif',
        '#efeAguAta'
      ),
      [this.config.ATTACK_TYPES.FIRE]: new Attack(
        this.config.ATTACK_TYPES.FIRE,
        'Fuego',
        'src/assets/sprites/ataque/fuego-derecha.gif',
        '#efeFueAta'
      ),
      [this.config.ATTACK_TYPES.THUNDER]: new Attack(
        this.config.ATTACK_TYPES.THUNDER,
        'Trueno',
        'src/assets/sprites/ataque/trueno.gif',
        '#efeTruAta'
      )
    };
  }

  initializeEnemyAttacks() {
    return {
      [this.config.ATTACK_TYPES.WATER]: new Attack(
        this.config.ATTACK_TYPES.WATER,
        'Agua',
        'src/assets/sprites/ataque/agua2.gif',
        '.aguEne'
      ),
      [this.config.ATTACK_TYPES.FIRE]: new Attack(
        this.config.ATTACK_TYPES.FIRE,
        'Fuego',
        'src/assets/sprites/ataque/fuego2.gif',
        '.fueEne'
      ),
      [this.config.ATTACK_TYPES.THUNDER]: new Attack(
        this.config.ATTACK_TYPES.THUNDER,
        'Trueno',
        'src/assets/sprites/ataque/trueno2.gif',
        '.truEne'
      )
    };
  }

  async executePlayerAttack(attackType, enemyDefense) {
    const attack = this.playerAttacks[attackType];
    const damage = this.damageCalculator.calculate(attackType, enemyDefense);
    
    if (attackType === this.config.ATTACK_TYPES.FIRE) {
      return await this.executeFireAttack(attack, damage);
    } else {
      return await this.executeNormalAttack(attack, damage, true);
    }
  }

  async executeNormalAttack(attack, damage, isPlayer = true) {
    const attacker = isPlayer ? this.player : this.enemy;
    const defender = isPlayer ? this.enemy : this.player;
    
    await this.animationController.playAttackAnimation(attacker, defender, attack);
    
    const damageType = this.damageCalculator.getDamageType(damage);
    this.messageController.showDamageMessage(damageType, this.soundManager);
    
    this.applyDamage(defender, damage);
    
    await TimeHelper.delay(this.config.DEFENSE_DELAY);
    
    attack.hideEffect();
    defender.idle();
    
    return damage;
  }

  async executeFireAttack(attack, damage) {
    this.player.attack();
    const effectElement = attack.getEffectElement();
    DOMHelper.setSource(effectElement, attack.effectSprite);
    
    const styleSheet = await this.animationController.playFireAnimation(effectElement);
    
    DOMHelper.setSource(effectElement, '');
    this.player.idle();
    this.enemy.hit();
    
    const damageType = this.damageCalculator.getDamageType(damage);
    this.messageController.showDamageMessage(damageType, this.soundManager);
    
    this.applyDamage(this.enemy, damage);
    
    await TimeHelper.delay(this.config.DEATH_ANIMATION_DELAY);
    
    this.enemy.idle();
    this.animationController.resetFireAnimation(effectElement, styleSheet);
    
    return damage;
  }

  async executeEnemyAttack(attackType, playerDefense) {
    const attack = this.enemyAttacks[attackType];
    const damage = this.damageCalculator.calculate(attackType, playerDefense);
    
    return await this.executeNormalAttack(attack, damage, false);
  }

  applyDamage(target, damage) {
    const healthBar = target.getHealthBar();
    if (!healthBar) return;
    
    const currentWidth = healthBar.offsetWidth;
    const newWidth = Math.max(this.config.MIN_HEALTH, currentWidth - damage);
    
    target.updateHealthBar(newWidth);
    
    // Actualizar estado del juego
    if (target === this.enemy) {
      this.gameState.setEnemyHealth(newWidth);
      this.gameState.addScore(damage);
      
      if (damage === this.config.DAMAGE.CRITICAL) {
        this.gameState.incrementCombo();
      } else {
        this.gameState.resetCombo();
      }
    } else {
      this.gameState.setPlayerHealth(newWidth);
      this.gameState.resetCombo();
    }
  }
}

export default AttackController;
