// IIFE
(() => {

    /**
     * Timer Functionality
     */
    const startBtn = document.querySelector('#start');
    const stopBtn = document.querySelector('#stop');
    const resetBtn = document.querySelector('#reset');
    let hoursDisplay = document.querySelector('#hours');
    let minsDisplay = document.querySelector('#mins');
    let secondsDisplay = document.querySelector('#seconds');
    let hours =0;
    let mins =0;
    let seconds =0;
    let p1GamePoints = 10;
    let p2GamePoints = 20;
    
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
            gameResultDeclare();
            startTimer();
        },1000);
    }

    /**
     * Turn Functionality
     */
    const p1Submit = document.querySelector('#p1Submit');
    const p2Submit = document.querySelector('#p2Submit');
    const p1Table = document.querySelector('.table-p1');
    const p2Table = document.querySelector('.table-p2');
    const p1Input1 = document.querySelector('#p1Input1');
    const p1Input2 = document.querySelector('#p1Input2');
    const p2Input1 = document.querySelector('#p2Input1');
    const p2Input2 = document.querySelector('#p2Input2');
    let p1Turn = true;
    let p2Turn = false;
    let p1Input1SubmitEnabled = false;
    let p1Input2SubmitEnabled = false;
    let p2Input1SubmitEnabled = false;
    let p2Input2SubmitEnabled = false;
    turnTracker(p1Turn,p2Turn);
    checkEnableBtn();
    
    p1Input1.addEventListener('keyup',function(){
        if(takeOnlyInteger(this)){
            p1Input1SubmitEnabled = true;
        }else{
            p1Input1SubmitEnabled = false;
        }
        checkEnableBtn();
    });
    p1Input2.addEventListener('keyup',function(){
        if(takeOnlyInteger(this)){
            p1Input2SubmitEnabled = true;
        }else{
            p1Input2SubmitEnabled = false;
        }
        checkEnableBtn();
    });
    p2Input1.addEventListener('keyup',function(){
        if(takeOnlyInteger(this)){
            p2Input1SubmitEnabled = true;
        }else{
            p2Input1SubmitEnabled = false;
        }
        checkEnableBtn();
    });
    p2Input2.addEventListener('keyup',function(){
        if(takeOnlyInteger(this)){
            p2Input2SubmitEnabled = true;
        }else{
            p2Input2SubmitEnabled = false;
        }
        checkEnableBtn();
    });
    p1Submit.addEventListener('click',function(e){
        e.preventDefault();
        p2Turn = true;
        p1Turn = false;
        turnTracker(p1Turn,p2Turn);
        checkEnableBtn();
    });
    p2Submit.addEventListener('click',function(e){
        e.preventDefault();
        p2Turn = false;
        p1Turn = true;
        turnTracker(p1Turn,p2Turn);
        checkEnableBtn();
    });

    function turnTracker(p1Turn,p2Turn){
        switch (true) {
            case p1Turn==true:
                p2Table.style.display = 'none';
                p1Table.style.display = 'revert';
                break;
            case p2Turn==true:
                p1Table.style.display = 'none';
                p2Table.style.display = 'revert';
                break;
        }
    }
 
    function takeOnlyInteger(obj){
        let valueValue = parseInt(obj.value);
        if(Boolean(valueValue) == true){
            if(valueValue >= 0){
                obj.value = valueValue;
                return true;
            }else{
                obj.value = '';
                return false;
            }
        }else{
            obj.value = '';
            return false;
        }
    }

    function checkEnableBtn(){
        if(p1Input1SubmitEnabled && p1Input2SubmitEnabled){
            p1Submit.removeAttribute("disabled");
        }else{
            p1Submit.setAttribute("disabled", "disabled");
        }
    
        if(p2Input1SubmitEnabled && p2Input2SubmitEnabled){
            p2Submit.removeAttribute("disabled");
        }else{
            p2Submit.setAttribute("disabled", "disabled");
        }
    }

    /**
     * Game Functionality
     */
     
    function gameResultDeclare(){
        if(parseInt(secondsDisplay.textContent) == 30 && parseInt(minsDisplay.textContent)==0){
            hours =0;
            mins =0;
            seconds =0;
            hoursDisplay.textContent='00';
            secondsDisplay.textContent='00';
            minsDisplay.textContent='00';
            clearTimeout(timex);
            if(p1GamePoints > p2GamePoints || p1GamePoints == 20){
                alert('Player 1 won');
            }else if(p1GamePoints < p2GamePoints || p2GamePoints == 20){
                alert('Player 2 won');
            }
            else{
                alert('Match Draw');
            }
            window.location.reload(true);
        }
    }

})();