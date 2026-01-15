/**
 * Clase GameState - Estado del juego
 * Mantiene toda la información del estado actual de la partida
 */
class GameState {
  constructor(config) {
    this.config = config;
    this.playerHealth = config.MAX_HEALTH;
    this.enemyHealth = config.MAX_HEALTH;
    this.isGameOver = false;
    this.currentTurn = 'player';
    this.score = 0;
    this.combo = 0;
    this.soundEnabled = true;
    this.turnCount = 0;
    this.bestCombo = 0;
    this.playerMoveHistory = [];
  }

  // Métodos de salud
  setPlayerHealth(health) {
    this.playerHealth = Math.max(this.config.MIN_HEALTH, health);
  }

  setEnemyHealth(health) {
    this.enemyHealth = Math.max(this.config.MIN_HEALTH, health);
  }

  getPlayerHealth() {
    return this.playerHealth;
  }

  getEnemyHealth() {
    return this.enemyHealth;
  }

  // Métodos de puntuación
  addScore(points) {
    this.score += points;
  }

  incrementCombo() {
    this.combo++;
    if (this.combo > this.bestCombo) {
      this.bestCombo = this.combo;
    }
  }

  resetCombo() {
    this.combo = 0;
  }

  // Métodos de turno
  incrementTurn() {
    this.turnCount++;
  }

  switchTurn() {
    this.currentTurn = this.currentTurn === 'player' ? 'enemy' : 'player';
  }

  // Métodos de juego
  setGameOver(value) {
    this.isGameOver = value;
  }

  isPlayerTurn() {
    return this.currentTurn === 'player';
  }

  // Historial de movimientos
  addPlayerMove(moveType) {
    this.playerMoveHistory.push(moveType);
    if (this.playerMoveHistory.length > 10) {
      this.playerMoveHistory.shift();
    }
  }

  // Reset
  reset() {
    this.playerHealth = this.config.MAX_HEALTH;
    this.enemyHealth = this.config.MAX_HEALTH;
    this.isGameOver = false;
    this.currentTurn = 'player';
    this.score = 0;
    this.combo = 0;
    this.turnCount = 0;
    this.playerMoveHistory = [];
  }
}

export default GameState;
