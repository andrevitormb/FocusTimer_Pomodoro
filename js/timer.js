import {sounds} from "./sounds.js"


export default function Timer({
    // Injeçao de dependencias
    secondsDisplay,
    minutesDisplay,
    resetControls,
}){
    let minutes = Number(minutesDisplay.textContent)
    let timerTimeOut

    function updateDisplay(newMinutes , seconds) {
      //ternario
      newMinutes = newMinutes === undefined ? minutes : newMinutes
      seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2,'0')
    secondsDisplay.textContent = String(seconds).padStart(2,"0")
    

    }
    function reset(){
        updateDisplay(minutes,0)
        clearTimeout(timerTimeOut)
    }

    function countdown(){
        timerTimeOut = setTimeout(function() {
          let seconds =  Number(secondsDisplay.textContent)
          let minutes = Number(minutesDisplay.textContent)
      
          updateDisplay(minutes, 0)
      
          if (minutes <= 0 && seconds <= 0) {
            sounds().kitchenTimer.play()
            updateDisplay()       
            resetControls()

            return
          }
      
          if( seconds <= 0 ) {
            seconds = 60
            --minutes
          }
      
          updateDisplay(minutes, String(seconds - 1))
      
          countdown()
        }, 1000)
    }

    function updateTimer(newMinutes){
      minutes = newMinutes
    }

    function hold(){
      clearTimeout(timerTimeOut)
    }
    
    return{
        countdown,
        reset,
        updateDisplay,
        updateTimer,
        hold
        
    }
}