/**
 * Clase RandomHelper - Utilidades para generación de números aleatorios
 */
class RandomHelper {
  static random(max) {
    return Math.floor(Math.random() * max);
  }

  static randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static randomChoice(array) {
    return array[RandomHelper.random(array.length)];
  }
}

export default RandomHelper;
