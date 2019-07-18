let time = 45;
let timer;
let score =0;
let highScore = 0;



//set variable to id in html
let isPlaying = false;
let buttonStart = document.getElementById('button');
let board = document.getElementById('score');
let timeBoard = document.getElementById('time'); 



//make the stuff fall down

function startGame()
{
    
buttonStart.disabled  = 'disabled';
isPlaying = true;
renderScore();

timer = setInterval(clock,1000);// 1000 duration counting time
}

function clock()
{
time = time - 1;
timeBoard.innerText = time;
if (time == 0)
{
    clearInterval(timer);
    endGame();
}
 
}

function fall(monster)
{
if(!(isPlaying && monster instanceof HTMLElement))
{
    return;
}
//set custom attribute
//store thr top posistion for varible
monster.setAttribute('data-top', monster.style.top)

monster.style.top = '390px';
//change top position

;
//increase score
score = score + 10;


//display score  by calling this function
renderScore();
//delelte 
hideFallenMonster(monster);

}


function hideFallenMonster(monster)
{
setTimeout(function()
{
monster.style.display='none';

restoreFallenMonster(monster);
},500)
// 500 is for every fallen second
}



function restoreFallenMonster(monster)
{
monster.style.top = monster.getAttribute('date-top');
setTimeout(function()
{
monster.style.display='inline-block';
},505)

}


function renderScore()
{
board.innerText = score;
if(score > highScore)
{
    highScore = score;
    document.getElementById('high').innerText = highScore;
}

}


function endGame()
{
    isPlaying = false;
    score = 0;
    time = 45;

    buttonStart.removeAttribute('disabled'); 
}

