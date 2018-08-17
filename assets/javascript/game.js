//game variables 
let wins = 0;
let losses = 0;
let guessLeft = 9;
let i = 0;

//empty array for guessed letters
let userGuesses = [];

//letter bank array
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//computer picks random letter
let arshLetter = letters[Math.floor(Math.random() * letters.length)];
console.log("random letter: " + arshLetter);

//key stroke made
document.onkeyup = function (event) {
    var key = event.key;


    var guesses = document.getElementById("guesses");

    var key = event.key;




    //user guesses get logged in your guesses
    userGuesses[i] = key;
    i++;

    //add loss counter
    var guesses = document.getElementById("guesses");

    guesses.innerHTML = "Your Guesses so far: " + userGuesses;

    //matches key with corrsponding letter 
    if (key == "a" || key == "b" || key == "c" || key == "d" || key == "e" || key == "f" || key == "g" 
    || key == "h" || key == "i" || key == "j" || key == "k" || key == "l" || key == "m" || key == "n" 
    || key == "o" || key == "p" || key == "q" || key == "r" || key == "s" || key == "t" || key == "u" 
    || key == "v" || key == "w" || key == "x" || key == "y" || key == "z") {

        //if letter does not match arsh letter decrease guesses left by one 
        if (key != arshLetter) {
            guessLeft--;

            var counter = document.getElementById("guessleft");

            counter.innerHTML = "Guesses left: " + guessLeft;
        }

        //win game then add win and reset function
        else {
            wins++;

            var winner = document.getElementById("wins");

            winner.innerHTML = "Wins: " + wins;
            alert("Lucky try winner");
            gameReset();
        }

        //lose game then add lose and reset function
        if (guessLeft == 0) {
            losses++;

            var lose = document.getElementById("losses");

            lose.innerHTML = "Losses: " + losses;
            alert("Sorry loser maybe next time")
            gameReset();
        }

        //clears game and picks new letter
        function gameReset() {

           // guess left is reset
            guessLeft = 9;
            var counter = document.getElementById("guessleft");
            counter.innerHTML = "Guesses left: " + guessLeft;
            //reset arsh letter
            arshLetter = letters[Math.floor(Math.random() * letters.length)];
            //logs new random number
            console.log(arshLetter)
            //reset guesses
            userGuesses = [];
            i = 0;


        }
    }
}








