/**
 * Clase GameController - Controlador principal del juego
 * Coordina todos los demás controladores y el flujo del juego
 */
import Config from '../models/Config.js';
import GameState from '../models/GameState.js';
import Player from '../models/Player.js';
import Enemy from '../models/Enemy.js';
import DOMHelper from '../utils/DOMHelper.js';
import TimeHelper from '../utils/TimeHelper.js';
import RandomHelper from '../utils/RandomHelper.js';
import SoundManager from '../utils/SoundManager.js';
import DamageCalculator from '../utils/DamageCalculator.js';
import ButtonController from './ButtonController.js';
import MessageController from './MessageController.js';
import AnimationController from './AnimationController.js';
import AttackController from './AttackController.js';

class GameController {
  constructor() {
    // Inicializar modelos
    this.config = new Config();
    this.gameState = new GameState(this.config);
    this.player = new Player();
    this.enemy = new Enemy();
    
    // Inicializar utilidades
    this.soundManager = new SoundManager();
    this.damageCalculator = new DamageCalculator(this.config);
    
    // Inicializar controladores
    this.buttonController = new ButtonController();
    this.messageController = new MessageController();
    this.animationController = new AnimationController(this.config);
    this.attackController = new AttackController(
      this.config,
      this.gameState,
      this.player,
      this.enemy,
      this.animationController,
      this.messageController,
      this.damageCalculator,
      this.soundManager
    );
    
    this.initializeKeyboardControls();
  }

  initializeKeyboardControls() {
    document.addEventListener('keydown', (e) => {
      if (this.gameState.isGameOver) return;
      
      const keyMap = {
        '1': () => this.handlePlayerAttack(this.config.ATTACK_TYPES.WATER),
        '2': () => this.handlePlayerAttack(this.config.ATTACK_TYPES.FIRE),
        '3': () => this.handlePlayerAttack(this.config.ATTACK_TYPES.THUNDER)
      };
      
      if (keyMap[e.key] && this.gameState.isPlayerTurn()) {
        keyMap[e.key]();
      }
    });
  }

  async handlePlayerAttack(attackType) {
    if (this.gameState.isGameOver) return;
    
    this.buttonController.blockButtons();
    this.gameState.addPlayerMove(attackType);
    
    const enemyDefense = this.enemy.selectRandomDefense();
    await this.attackController.executePlayerAttack(attackType, enemyDefense);
    
    this.gameState.incrementTurn();
    
    if (this.checkGameOver()) return;
    
    this.messageController.show('defend');
    this.buttonController.assignDefenseHandlers((defense) => this.handleEnemyAttack(defense));
  }

  async handleEnemyAttack(playerDefense) {
    if (this.gameState.isGameOver) return;
    
    this.buttonController.blockButtons();
    
    const enemyAttackType = this.enemy.selectRandomAttack();
    await this.attackController.executeEnemyAttack(enemyAttackType, playerDefense);
    
    if (this.checkGameOver()) return;
    
    this.messageController.show('attack');
    this.buttonController.assignAttackHandlers((attack) => this.handlePlayerAttack(attack));
  }

  checkGameOver() {
    if (this.gameState.getPlayerHealth() <= this.config.MIN_HEALTH) {
      this.endGame(false);
      return true;
    }
    
    if (this.gameState.getEnemyHealth() <= this.config.MIN_HEALTH) {
      this.endGame(true);
      return true;
    }
    
    return false;
  }

  endGame(playerWon) {
    this.gameState.setGameOver(true);
    this.buttonController.blockButtons();
    
    this.animationController.playDeathAnimation(playerWon ? this.enemy : this.player);
    
    const soundPath = playerWon ? 
      'src/assets/sonidos/ganador.mp3' : 
      'src/assets/sonidos/muerte.mp3';
    this.soundManager.play(soundPath);
    
    TimeHelper.setTimeout(() => this.showRestartScreen(playerWon), 2000);
  }

  showRestartScreen(playerWon) {
    const menuContainer = DOMHelper.getElement('.menPri');
    const restartBtn = DOMHelper.getElement('.btnIni');
    
    if (menuContainer && restartBtn) {
      DOMHelper.setStyle(menuContainer, 'display', 'block');
      DOMHelper.setStyle(restartBtn, 'width', '50px');
      DOMHelper.setStyle(restartBtn, 'left', '45%');
      DOMHelper.setStyle(restartBtn, 'visibility', 'visible');
      DOMHelper.setSource(restartBtn, 'src/assets/sprites/interfaz/menu/recarga.gif');
      DOMHelper.setAttribute(restartBtn, 'onmousedown', '');
      DOMHelper.setAttribute(restartBtn, 'onmouseup', 'location.reload()');
      
      this.showGameResult(playerWon);
    }
  }

  showGameResult(playerWon) {
    const resultElement = document.createElement('div');
    resultElement.className = 'game-result';
    resultElement.innerHTML = `
      <h2>${playerWon ? '¡VICTORIA!' : 'DERROTA'}</h2>
      <p>Puntuación: ${this.gameState.score}</p>
      <p>Combo máximo: ${this.gameState.bestCombo}</p>
    `;
    
    const container = DOMHelper.getElement('.container');
    if (container) {
      container.appendChild(resultElement);
    }
  }

  start() {
    const menuImage = DOMHelper.getElement('.menuPri');
    const message = DOMHelper.getElement('.mensaje');
    const credits = DOMHelper.getElement('.creado');
    const startBtn = DOMHelper.getElement('.btnIni');
    const menuContainer = DOMHelper.getElement('.menPri');
    
    if (menuContainer) DOMHelper.setStyle(menuContainer, 'display', 'none');
    if (menuImage) DOMHelper.setStyle(menuImage, 'visibility', 'hidden');
    if (credits) DOMHelper.setStyle(credits, 'visibility', 'hidden');
    if (startBtn) DOMHelper.setStyle(startBtn, 'visibility', 'hidden');
    
    this.messageController.show('attack');
    this.soundManager.play('src/assets/sonidos/ambientacion.mp3');
    
    this.buttonController.assignAttackHandlers((attack) => this.handlePlayerAttack(attack));
    
    this.gameState.reset();
  }
}

export default GameController;
