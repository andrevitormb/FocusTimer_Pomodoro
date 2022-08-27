export default function Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff
}){

    function reset() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonSet.classList.remove('hide')
        buttonStop.classList.add('hide')
    }

    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    }

    function pause() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function soundOn(){
        buttonSoundOn.classList.add('hide')
        buttonSoundOff.classList.remove('hide')
    }

    function soundOff(){
        buttonSoundOn.classList.remove('hide')
        buttonSoundOff.classList.add('hide')
    }

    function getMinutes() {
        let newMinutes = prompt('Quantos minutos?')
        
        if(!newMinutes) {
            return false
        }
        return newMinutes
    }

    return {
        reset,
        play,
        pause,
        getMinutes,
        soundOn,
        soundOff
    }
}