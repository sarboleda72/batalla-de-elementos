/**
 * Clase DOMHelper - Utilidades para manipulación del DOM
 */
class DOMHelper {
  static getElement(selector) {
    return document.querySelector(selector);
  }

  static getElementById(id) {
    return document.getElementById(id);
  }

  static setSource(element, src) {
    if (element) {
      element.src = src;
    }
  }

  static addClass(element, className) {
    if (element) {
      element.classList.add(className);
    }
  }

  static removeClass(element, className) {
    if (element) {
      element.classList.remove(className);
    }
  }

  static setStyle(element, property, value) {
    if (element) {
      element.style[property] = value;
    }
  }

  static setAttribute(element, attribute, value) {
    if (element) {
      element.setAttribute(attribute, value);
    }
  }
}

export default DOMHelper;
