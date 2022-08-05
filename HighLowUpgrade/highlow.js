document.addEventListener('DOMContentLoaded',()=>{
    const guesses =document.querySelector('.guesses');
    const lastResult= document.querySelector('.lastResult');
    const lowOrHi = document.querySelector('.lowOrHi');
    const guessField = document.querySelector('.guessField');
    const guessSubmit = document.querySelector('.guessSubmit');
    let message =document.getElementById('message');
    let var_number = max_number("Select max number!");
    let randomNumber = Math.floor(Math.random()* var_number)+1;
    let guessArray = [];
    let guessCount = 1;
    let resetButton;
    console.log(randomNumber);
    //1.Get a # to make you max number!
    //2.Create a (validation function) to make sure max number: is a integer; is not a letter; is not NaN.
    //3. Once Max number is valid input, prompt max number to a Headline; So it says pick a random number 1 to X==randomNumber;
    //3. Take Max number and make a random number to seek
    function max_number(prompt){
        
        let valid_input=false;
        let var_number, input;
        while(!valid_input){
            input=window.prompt(prompt);
            var_number = Number(input);
            if(var_number!=NaN&&var_number>0){
                valid_input=true;
            }
        }
        return var_number;
        
        

    }
    message.innerHTML =`Guess a number between 1 through ${var_number}!`
    
    console.log(var_number);
    
   
    
    
    

    function checkGuess() {
        const userGuess=Number(guessField.value);
    
      

        
        

        
       
           
    

        
        

        if(guessCount===1){
            guesses.textContent= "Previous guesses: ";
        }
        guesses.textContent += userGuess+ " ";
        guessArray.push(userGuess);

        
        if(userGuess===randomNumber){
            lastResult.textContent=`You got it! It took you ${guessArray.length} tries and your guess were ${guessArray}!`;//I initially was using ${guessCount} change to guessArray.length to meet criteria
            lastResult.style.backgroundColor="green";
            lowOrHi.textContent=" ";
            setGameOver();
        }else if(guessCount===5){
            lastResult.textContent="!!!Game Over!!!";
            lowOrHi.textContent=" ";
            setGameOver();
        }else{
            lastResult.textContent="Wrong!!";
            lastResult.style.backgroundColor="red";
            if(userGuess<randomNumber){
                lowOrHi.textContent="Last guess was too Low! ";
                
            }else if(userGuess>randomNumber){
                lowOrHi.textContent="Last guess was too High!";
            }
        }
        guessCount++
        guessField.value=" ";
        guessField.focus();
        
    }
    guessSubmit.addEventListener('click', checkGuess);
    function setGameOver(){
        guessField.disabled =true;
        guessSubmit.disabled = true;
        resetButton= document.createElement('button');
        resetButton.textContent="Start new Game";
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click',resetGame);
    }
    function resetGame(){
        guessCount=1;
        const resetParas = document.querySelectorAll('.resultParas p');
        for(const resetPara of resetParas){
            resetPara.textContent=" ";
        }
        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value=" ";
        guessField.focus();
        lastResult.style.backgroundColor="white";
        var_number = max_number("Select max number!");
        randomNumber = Math.floor(Math.random()* var_number)+1;
        
    }
   
});

