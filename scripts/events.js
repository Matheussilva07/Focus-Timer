import { controls } from "./elements.js";
import * as actions from './actions.js';
import * as elements from './elements.js';
import stateAplication from "./stateAplication.js";
import { updateDisplay } from "./timer.js";

export function registerControls(){
  
    controls.addEventListener('click', (event)=>{
       const action = event.target.dataset.action;

       if(typeof actions[action] != "function"){
        return;
       }
       else{
        actions[action]()
       }
       
    })

}

export function setMinutes(){
    elements.minutes.addEventListener('focus', () => {
        elements.minutes.textContent = ""
    })

//Esta linha de código ' /\d/.test(event.key) ' define que os minutos não possam receber caracteres, apenas número e é chamada de expressão regular

 elements.minutes.onkeypress = (event) => /\d/.test(event.key)

 elements.minutes.addEventListener('blur', (event) =>{

    let time = event.currentTarget.textContent;
    time = time > 60 ? 60 : time;

    stateAplication.minutes = time;
    stateAplication.seconds = 0;

    updateDisplay()

    elements.minutes.removeAttribute('contenteditable', true)
} )
}