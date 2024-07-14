import state from './stateAplication.js';
import * as elements from './elements.js';
import { reset } from './actions.js';
import { kitchenTimer } from './sounds.js';
import stateAplication from './stateAplication.js';

export function countdown(){

    clearTimeout(stateAplication.countdownId)


    if(!state.isRunning){
        
        return;
    }

    let minutes = Number(elements.minutes.textContent);
    let seconds = Number(elements.seconds.textContent);

    seconds--;

    if(seconds < 0)
    {
        seconds = 59;
        minutes --;
    }
    if(minutes < 0)
    {
        reset();
        kitchenTimer.play()
        return;
    }

    updateDisplay(minutes,seconds)

    stateAplication.countdownId =  setTimeout(()=> countdown(), 1000)
  
}

export function updateDisplay(minutes, seconds){

    // Duas interrogações (??) são o operador "coalesce", funciona da mesma forma que no mysql.

    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    elements.minutes.textContent =String(minutes).padStart(2,"0");
    elements.seconds.textContent =String(seconds).padStart(2,"0");
}

