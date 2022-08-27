

import Timer from "./timer.js"
import Controls from "./controls.js"
import {elements} from "./elements.js"
import {sounds} from "./sounds.js"

// desestrurando Objetos
const {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
} = elements

//dependencias
const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff
})

const timer = Timer({
  secondsDisplay,
  minutesDisplay,
  resetControls:controls.reset,
})

const Sounds = sounds()


buttonPlay.addEventListener('click', function() {

  controls.play()
  timer.countdown()
  Sounds.buttonPressAudio.play()
  
})

buttonPause.addEventListener('click', function() {
  
  Sounds.buttonPressAudio.play()
  controls.pause()
  timer.hold()
  
})

buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    Sounds.buttonPressAudio.play()
})

buttonSoundOff.addEventListener('click', function() {
  controls.soundOff()
  Sounds.buttonPressAudio.play()
  Sounds.bgAudio.pause()
})

buttonSoundOn.addEventListener('click', function() {
  controls.soundOn()
  Sounds.bgAudio.play()
  Sounds.buttonPressAudio.play()
})

buttonSet.addEventListener('click', function() {
  let newMinutes = controls.getMinutes()
  Sounds.buttonPressAudio.play()
  if(!newMinutes){
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes , 0)
  timer.updateTimer(newMinutes)
  
})