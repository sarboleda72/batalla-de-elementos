/**
 * Clase TimeHelper - Utilidades para manejo de tiempo y delays
 */
class TimeHelper {
  static delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static setTimeout(callback, ms) {
    return setTimeout(callback, ms);
  }

  static clearTimeout(timeoutId) {
    clearTimeout(timeoutId);
  }
}

export default TimeHelper;
