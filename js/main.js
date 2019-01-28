//var numberButton = document.getElementById("number-button");
var codeContainer = document.getElementById("code-container");
var clickCounter = 0;
var attempts = 0;
var Greenblock = document.getElementById("Green");
var Redblock = document.getElementById("Red")
var intervalTimer = 0;
var buttons = document.getElementsByClassName("button");
var Correct = document.getElementById("numberCorrect");
var Wrong = document.getElementById("numberWrong");
guesspass ="";
password = "132";

function getNumber(clickedButton){
    clickCounter++;
    if(clickCounter == 1){
        guesspass = "";
        guesspass = guesspass += clickedButton.value;
        codeContainer.innerHTML = "";
    }
    else if (clickCounter == 2) {
        guesspass = guesspass += clickedButton.value;
    }
    else if(clickCounter == 3) {
        guesspass = guesspass += clickedButton.value;
        
        clickCounter = 0;
    } 
    codeContainer.innerHTML = guesspass;
}

function submit(clickedButton){
    if(guesspass == password) {
        for(i=0; i < buttons.length; i++) {
            buttons[i].setAttribute('disabled', 'disabled');
        }
        codeContainer.innerHTML = "You guessed it!";
        clickCounter = 0;
        guesspass ="";
        Correct.innerHTML++;
        var blink = setInterval(function() {	
            intervalTimer++;

            if (Greenblock.style.backgroundColor == 'green') 
            {
                Greenblock.style.backgroundColor = 'Limegreen';
            }
            else 
            {
                Greenblock.style.backgroundColor = 'green';
            }
            if(intervalTimer == 10) {
                clearInterval(blink);
                intervalTimer = 0;
                for(i=0; i < buttons.length; i++) {
                    buttons[i].removeAttribute('disabled');
                }
            }
        }, 500);
        if(Greenblock.style.backgroundColor = 'Limegreen')
        {
            Greenblock.style.backgroundColor = 'green';
        }
    }
    else {
        for(i=0; i < buttons.length; i++) {
            buttons[i].setAttribute('disabled', 'disabled');
        }
        codeContainer.innerHTML = "nope";
        clickCounter = 0;
        attempts ++;
        guesspass ="";
        Wrong.innerHTML++;
        var blink = setInterval(function() {	
            intervalTimer++;

            if (Redblock.style.backgroundColor == 'darkred') 
            {
                Redblock.style.backgroundColor = 'red';
            }
            else
            {
                Redblock.style.backgroundColor = 'darkred';
            }
            if(intervalTimer == 10) {
                clearInterval(blink);
                intervalTimer = 0;
                for(i=0; i < buttons.length; i++) {
                    buttons[i].removeAttribute('disabled');
                }
            }
        }, 500);
        if(Redblock.style.backgroundColor = 'red')
        {
            Redblock.style.backgroundColor = 'darkred';
        }
    } 
}