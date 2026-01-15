/**
 * Clase SoundManager - Gestión de audio del juego
 */
class SoundManager {
  constructor() {
    this.audioElement = document.querySelector('.sonido');
    this.enabled = true;
  }

  play(soundPath) {
    if (!this.enabled || !this.audioElement) return;
    
    this.audioElement.src = soundPath;
    this.audioElement.play().catch(err => {
      console.log('Error reproduciendo sonido:', err);
    });
  }

  stop() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
    }
  }

  setEnabled(enabled) {
    this.enabled = enabled;
  }

  isEnabled() {
    return this.enabled;
  }
}

export default SoundManager;
