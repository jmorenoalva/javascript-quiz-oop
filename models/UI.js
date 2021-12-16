
export class UI{

  constructor(){}

  /**
   *
   * @param {string} text Pregunta a renderizar
   */
  showQuestion(text){
    const questionTitle=document.getElementById('question');
    questionTitle.innerText=text;
  }


  /**
   *
   * @param {string[]} choices Opciones
   */
  showChoices(choices,callback){
    const choicesContainer=document.getElementById('choices')
    choicesContainer.innerHTML=''
      for(let i=0; i<choices.length; i++){
        const button=document.createElement('button');
        button.innerText=choices[i];
        button.className='button';
        button.addEventListener('click',()=>callback(choices[i]));

        choicesContainer.append(button)
      }
  }

  /**
   *
   * @param {number} score Puntaje total
   */
  showScores(score){
    const quizEndHtml=`
      <h1>Resultado</h1>
      <h2>Tu Puntaje es: ${score}</h2>
    `
    const element=document.getElementById('quiz')
    element.innerHTML=quizEndHtml;
  }

  /**
   *
   * @param {number} currentIndex Index
   * @param {number} total Total de preguntas
   */
  showProgress(currentIndex,total){
    const element=document.getElementById('progress')
    element.innerHTML=`Pregunta ${currentIndex} de ${total}`;
  }

}