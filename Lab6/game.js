/*Global variables*/
let wins = 0;
let losses = 0;
let draws = 0;

let result=[];
let gameStarted = false;
let round =0;

/*PlayerName function*/
function startGame(){
    //get name
    let name = document.getElementById("fname").value.trim();
    
    //check if empty or not 
    if(name === ""){
        alert("Please enter your name first!");
        return;
    }
    //Start game
    gameStarted = true;
    //welcome message
    document.getElementById("welcome").innerHTML = "Welcome player " + name +"!";
    document.getElementById("startDateTime").innerHTML = "Game start at: " + new Date();
}

/*Computer choice*/
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

/*Player choice*/
function playRound(playerChoice){
    if(gameStarted === false){
        alert("Click Start Game First.");
        return;
    }

    let computerChoice = getComputerChoice();
    let roundResult ="";
    let resultColor ="";

//decide winner 
if (playerChoice === computerChoice){
    roundResult = "Draws";
    resultColor = "grey";
    draws++;
}else if(
    (playerChoice === "rock" && computerChoice === "scissors") || 
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
){
    roundResult = "Wins";
    resultColor = "green";
    wins++;

}else{
    roundResult = "Losses";
    resultColor = "red";
    losses++;
}

//change image according to choice 
document.getElementById("playerImg").src ="images/" + playerChoice + ".png";
document.getElementById("computerImg").src ="images/" + computerChoice + ".png";

//display result
document.getElementById("gameResult").innerHTML = roundResult;
document.getElementById("gameResult").style.color = resultColor;

//update scoreboard
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("draws").innerHTML = draws;

//store result in array 
result.push(roundResult);

round++;

//add new new row to the history table using innerHTML +=
document.getElementById("historyTable").innerHTML +=
    "<tr>" +
    "<td>" + round + "</td>" +
    "<td>" + playerChoice + "</td>" +
    "<td>" + computerChoice + "</td>" +
    "<td>" + roundResult + "</td>" +
    "</tr>";

//summary 
document.getElementById("summary").innerHTML = "";
}

function showSummary(){
    let totalWin=0;

    for (let i =0; i<result.length; i++){
        if(result[i] === "Wins"){
            totalWin++;
        }
    }

    let totalRounds = result.length;
    let percentage =0;

    if(totalRounds>0){
        percentage=Math.round((totalWin/totalRounds)*100);
    }

    //display summary
    document.getElementById("summary").innerHTML = "You played " + totalRounds +" rounds and won "+totalWin + " times. Win percentage: " + percentage + "%.";
}

/*Reset Game*/
function resetGame(){

    wins=0;
    losses=0;
    draws =0;

    result=[];
    gameStarted = false;
    round =0;

    /*Update scoreboard*/
    document.getElementById("wins").innerHTML = 0;
    document.getElementById("losses").innerHTML = 0;
    document.getElementById("draws").innerHTML = 0;

    document.getElementById("gameResult").style.color = "black";
    document.getElementById("gameResult").innerHTML = "Result below :)";
    document.getElementById("welcome").innerHTML = "";
    document.getElementById("startDateTime").innerHTML = "";

    document.getElementById("playerImg").src = "images/rock.png";
    document.getElementById("computerImg").src = "images/rock.png";

    document.getElementById("fname").value = "";

    document.getElementById("summary").innerHTML = "";

    document.getElementById("historyTable").innerHTML =
        "<tr>" +
        "<th>Round</th>" +
        "<th>You</th>" +
        "<th>Computer</th>" +
        "<th>Result</th>" +
        "</tr>";
}

