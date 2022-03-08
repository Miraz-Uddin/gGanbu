// IIFE
(() => {

    const startBtn = document.querySelector('#start');
    const stopBtn = document.querySelector('#stop');
    const resetBtn = document.querySelector('#reset');
    let hoursDisplay = document.querySelector('#hours');
    let minsDisplay = document.querySelector('#mins');
    let secondsDisplay = document.querySelector('#seconds');
    let hours =0;
    let mins =0;
    let seconds =0;
    
    startBtn.addEventListener('click',e=>{
        e.preventDefault();
        startTimer();
    });

    stopBtn.addEventListener('click',e=>{
        e.preventDefault();
        clearTimeout(timex);
    });

    resetBtn.addEventListener('click',e=>{
        e.preventDefault();
        hours =0;
        mins =0;
        seconds =0;
        hoursDisplay.textContent='00';
        secondsDisplay.textContent='00';
        minsDisplay.textContent='00';
        clearTimeout(timex);
    });

    function startTimer(){
        timex = setTimeout(function(){
            seconds++;
            if(seconds >59){
                seconds=0;
                mins++;
                if(mins>59) {
                    mins=0;hours++;
                    if(hours <10) {
                        hoursDisplay.textContent='0'+hours;
                    } else 
                    hoursDisplay.textContent=hours;
                }          
                if(mins<10){                     
                    minsDisplay.textContent='0'+mins
                }       
                else minsDisplay.textContent=mins;
            }    
            if(seconds <10) {
                secondsDisplay.textContent='0'+seconds;
            } else {
                secondsDisplay.textContent=seconds;
            }
            startTimer();
        },1000);
    }
    

})();