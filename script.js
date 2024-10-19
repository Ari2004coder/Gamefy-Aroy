const gamebox=document.querySelectorAll(".game_box");
const game1=document.querySelector("#game1")
const game2=document.querySelector("#game2")
const game3=document.querySelector("#game3")
const game4=document.querySelector("#game4")
const realgame1=document.getElementById('guess_the_number');
console.log(gamebox);
game1.addEventListener('click',function(){
   realgame1.style.display='flex';
   window.scrollBy(0,1000)
})

//**implement the game */
let random=Math.floor((Math.random()*100)+1);
const submit=document.querySelector('#submitbtn');
const UserInput=document.querySelector('#input');
const p=document.createElement('p');
const previousres=document.querySelector('#previousGuess');
const attempts=document.querySelector('#attempts');
const lowhi=document.querySelector('#lowHi');
const Startover=document.getElementById('#resParas');

let prevguesses=[];
let numguess=0;
let playgame=true;
if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(UserInput.value)
       
        
        Validitygauess(guess);
    })
}
function Validitygauess(guess){
    //check validity
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess<1){
        alert('please enter a number greater than 1')
    }
    else if(guess>100){
        alert('please enter a number less than 100')
    }else{
        prevguesses.push(guess);
        if(numguess===10){
            displayguess(guess);
            displaymessage(`Game Over,correct number was ${random}`);
            endgame()
        }else{
            displayguess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //check the correctness
    if(guess===random){
        displaymessage(`you win`);
       
       let coins= document.querySelector('#coins');
       let val=parseInt(coins.innerHTML);
       coins.innerHTML=`${val+10}`
       if((val+10)%50==0){
        const dimond=document.querySelector("#dimond")
        let dval=parseInt(dimond.innerHTML)
        dimond.innerHTML=`${dval+1}`
        const rank=document.querySelector("#rank")
        let rankval=parseInt(rank.innerHTML)
        if(rankval>1)
        rank.innerHTML=`${rank-dval}`
       }
       let score=document.querySelector('#score');
       let vals=parseInt(score.innerHTML);
       score.innerHTML=`${vals+(10-numguess)}`
       
       
       endgame();
        
    }else if(guess<random){
        displaymessage(`your guess is Tooo Low`);
    }
    else if(guess>random){
        displaymessage(`your guess is Tooo High`);
    }
    
}
function displayguess(guess){
    //display guess
    UserInput.value='';
    previousres.innerHTML+=`${guess}, `
    numguess++;
    attempts.innerHTML=`${10-numguess}`;
}
function displaymessage(message){
    lowhi.innerHTML=`<h2>${message}</h2>`
}
function endgame(){
    //game over
    UserInput.value='';
    UserInput.setAttribute('disabled','')
   
    playgame=false;
    newgame();
}
function newgame(){

    const startgame=document.querySelector('#newgame');
    startgame.addEventListener('click',function(e){
        random=parseInt(Math.floor((Math.random()*100)+1));
        prevguesses=[]
        numguess=0;
        attempts.innerHTML=`${10}`;
        previousres.innerHTML='';
        lowhi.innerHTML='';
        UserInput.removeAttribute('disabled');
        playgame=true;
        
    })
    
}
const back=document.querySelector("#back");
back.addEventListener('click',function(){

    realgame1.style.display='none';
    window.scrollBy(0,-500);
});
const logo=document.querySelector("#logo");
logo.addEventListener('click',function(){
    window.close()
    alert("Are you sure? becuse your scores are not stored here")
})
gamebox.forEach(function(item){
    if(item.id!='game1'){
        item.addEventListener('click',function(){
            alert("coming soon!")
        })
    }
})


