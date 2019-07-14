// set global variables on page load

//crystal variables

var crystal = {
    pink:
    { 
        name: "Pink",
        value: 0
    },
    blue:
    { 
        name: "Blue",
        value: 0
    },
    orange:
    { 
        name: "Orange",
        value: 0
    },
    green:
    { 
        name: "Green",
        value: 0
    }
};

//additional variables

var userScore = 0;
var targetNum = 0;
var wins = 0;
var loses = 0;


//display wins and loses
$("#wins").html(wins);
$("#loses").html(loses);

// START GAME FUNCTION
///////////////////////////////////////////////


function startGame() {

        //currentscore to zero
        userScore = 0;

        //function to generate random number between two values
        function randomNum(min, max) {
            return Math.floor(Math.random()*(max-min+1)+min);
        }
        

        //generate random number between 19-120 for target number
        targetNum = randomNum(19,120);

        console.log("------random Num-------");
        console.log(targetNum);
        console.log("-------------------");

        //generate random number between 1-12 for each jewel button
        crystal.pink.value = randomNum(1,12);
        crystal.blue.value = randomNum(1,12);
        crystal.orange.value = randomNum(1,12);
        crystal.green.value = randomNum(1,12);


        console.log("------Pink Jewel-------");
        console.log(`button 1 ${crystal.pink.value}`);
        console.log("-------------------");
        console.log("------Blue Jewel-------");
        console.log(`button 1 ${crystal.blue.value}`);
        console.log("-------------------");
        console.log("------Orange Jewel-------");
        console.log(`button 1 ${crystal.orange.value}`);
        console.log("-------------------");
        console.log("------Green Jewel-------");
        console.log(`button 1 ${crystal.green.value}`);
        console.log("-------------------");

        //display target number
        $("#random-num").html(targetNum);
        //display userguess number
        $("#guessed-score").html(userScore);

        console.log("initial target Num");
        console.log(targetNum);
        console.log("-------------------");
        console.log("initial userscore ZERO");
        console.log(userScore);
        console.log("-------------------");
}


//ADD JEWEL VALUES FUNCTION
///////////////////////////////////////////

function addValues(crystal){

    //add to userscore variable
    userScore = userScore + crystal.value;

    //update HTML element
    $("#guessed-score").html(userScore);
    console.log("UserScore during game loop");
    console.log(userScore);
    console.log("-------------------");

    //run win/lose function
    endGame();
}


// WIN OR LOSE FUNCTION
////////////////////////////////

function endGame() {

    //lose the game if userscore exceed target number 
    if (userScore > targetNum) {

        //notify user
        alert("You lose!");

        //add one to lose count
        loses++;

        //update html element
        $("#loses").html(loses);

        //restart the game
        startGame();
    }

    //win the game if userscore is equal to target number
    else if (userScore===targetNum) {

        //notify user
        alert("You win!");

        //add one to win count
        wins++;

        //update html element
        $("#wins").html(wins);

        //restart the game
        startGame();
    }
}

startGame();

//BUTTON EVENTS
//////////////////////////////////


// create onclick function for pink jewel
$("#first-jewel").click(function() {
    addValues(crystal.pink);
});

// create onclick function for blue jewel
$("#second-jewel").click(function() {
    addValues(crystal.blue);
});

// create onclick function for orange jewel
$("#third-jewel").click(function() {
    addValues(crystal.orange);
});

// create onclick function for green jewel
$("#fourth-jewel").click(function() {
    addValues(crystal.green);
});
