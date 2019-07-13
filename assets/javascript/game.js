// set global variables on page load
var buttonMin = 1;
var buttonMax = 12;
var randomMin = 19;
var randomMax = 120;
var wins = 0;
var loses = 0;
var userGuess = 0;



//// function to generate random number between 19-120

var randomNum = generateRandomNum(randomMin,randomMax);

function generateRandomNum(randomMin,randomMax) {
    return Math.floor(Math.random()*(randomMax-randomMin+1)+randomMin);
};

generateRandomNum();
// console.log(randomNum);

//display random number in HTML
$("#random-num").append(randomNum);

//////////BUTTON 1//////////
//function to generate random number between 1-12

var buttonNum1 = generateButtonNum1(buttonMin,buttonMax);


function generateButtonNum1(buttonMin,buttonMax) {
    return Math.floor(Math.random()*(buttonMax-buttonMin+1)+buttonMin);
};

generateButtonNum1();
// console.log(`button 1 ${buttonNum1}`);

//////////BUTTON 2//////////
//function to generate random number between 1-12

var buttonNum2 = generateButtonNum2(buttonMin,buttonMax);


function generateButtonNum2(buttonMin,buttonMax) {
    return Math.floor(Math.random()*(buttonMax-buttonMin+1)+buttonMin);
};

generateButtonNum2();
// console.log(`button2 ${buttonNum2}`);

//////////BUTTON 3//////////
//function to generate random number between 1-12

var buttonNum3 = generateButtonNum3(buttonMin,buttonMax);


function generateButtonNum3(buttonMin,buttonMax) {
    return Math.floor(Math.random()*(buttonMax-buttonMin+1)+buttonMin);
};

generateButtonNum3();
// console.log(`button3 ${buttonNum3}`);

//////////BUTTON 4//////////
//function to generate random number between 1-12

var buttonNum4 = generateButtonNum4(buttonMin,buttonMax);

function generateButtonNum4(buttonMin,buttonMax) {
    return Math.floor(Math.random()*(buttonMax-buttonMin+1)+buttonMin);
};

generateButtonNum4();

///////////////////////// END BUTTON FUNCTIONS //////////////////////////

////// Assign numbers to HTML elements ////// !!! THIS NEEDS TO CHANGE TO NOT DISPLAY THE # BUT SHOW THE IMAGE ONLY

// button 1
$("#first-jewel").html(buttonNum1);

//button 2
$("#second-jewel").html(buttonNum2);

//button 3
$("#third-jewel").html(buttonNum3);

//button 4
$("#fourth-jewel").html(buttonNum4);



////////////////// ~~~~~~~~ MAIN GAME LOOP ~~~~~~~~~~~ ///////////////////


// create onclick function for jewel
$(".jewel").on("click", function() {
//add that specific number value to the total score box
///store value clicked
///display value clicked
///run through conditional
///user clicks a new button
///add the two numbers together
///run through conditional

//does that total score equal the target number? 

// If yes, then you win
///display win message
///add ++ to win
///restart game

//If higher, then you lose
///display lose message
///add ++ to lose
///restart game


//If below, keep playing
///do nothing

//
});
//display that number in the user guess box




//////////////// ~~~~~~~~ END MAIN GAME LOOP ~~~~~~~~~~ ////////////////////

//displays wins
$("#wins").append(wins);

//display loses
$("#loses").append(loses);


//restart game
//generate new random number
//generate new numbers for buttons