/**
 * Clase Character - Representa un personaje del juego
 * Base para jugador y enemigo
 */
class Character {
  constructor(name, selector, sprites) {
    this.name = name;
    this.selector = selector;
    this.sprites = sprites;
    this.currentSprite = sprites.idle;
  }

  getElement() {
    return document.querySelector(this.selector);
  }

  setSprite(spriteName) {
    const sprite = this.sprites[spriteName];
    if (sprite) {
      const element = this.getElement();
      if (element) {
        element.src = sprite;
        this.currentSprite = sprite;
      }
    }
  }

  idle() {
    this.setSprite('idle');
  }

  attack() {
    this.setSprite('attack');
  }

  hit() {
    this.setSprite('hit');
  }

  die() {
    this.setSprite('die');
  }
}

export default Character;
