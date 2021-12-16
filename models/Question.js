export class Question {

/**
 *
 * @param {string} text Este es el texto de la pregunta
 * @param {string[]} choices Estas son las opciones de la pregunta
 * @param {string} answer La respuesta de la pregunta
 */

  constructor(text, choices, answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;
  }

  /**
   *
   * @param {string} choice Son texto para adivinar
   * @returns {boolean} retorna si la respuesta es correcta
   */
  correctAnswer(choice){
    return choice=== this.answer
  }
}
