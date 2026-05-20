
// 1. Initialize the game score object
let score = {
    win: 0,
    lost: 0,
    tie: 0
};

// 2. Function to generate a random move for the computer
function condition() {
    // Generates a random whole number: 0, 1, or 2
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice;

    if (randomNum === 0) {
        computerChoice = "Bat";
    } else if (randomNum === 1) {
        computerChoice = "Ball";
    } else {
        computerChoice = "Stump";
    }
    
    return computerChoice;
}

// 3. Function to compare moves and calculate the game result
function getResult(userMove, computerMove) {
    // Check for a tie first
    if (userMove === computerMove) {
        score.tie++;
        return "It's a tie 🤝";
    }

    // Rules when User chooses Bat
    if (userMove === 'Bat') {
        if (computerMove === 'Ball') {
            score.win++;
            return 'User Won 💥';
        } else { // Computer chose Stump
            score.lost++;
            return 'Computer Won 💥';
        }
    }

    // Rules when User chooses Ball
    if (userMove === 'Ball') {
        if (computerMove === 'Stump') {
            score.win++;
            return 'User Won 💥';
        } else { // Computer chose Bat
            score.lost++;
            return 'Computer Won 💥';
        }
    }

    // Rules when User chooses Stump
    if (userMove === 'Stump') {
        if (computerMove === 'Bat') {
            score.win++;
            return 'User Won 💥';
        } else { // Computer chose Ball
            score.lost++;
            return 'Computer Won 💥';
        }
    }
}

// 4. Function to display the results directly on the webpage
function showResult(userMove, computerMove, result) {
    document.getElementById('user-move').innerText = `You have chosen ${userMove} `;
    document.getElementById('computer-move').innerText = `Computer choice is ${computerMove} `;
    document.getElementById('result').innerText = `${result} `;
    document.getElementById('score').innerText = `Won :${score.win} Lost :${score.lost} Tie :${score.tie} `;
}

// 5. Main engine function that runs when you click a button
function playGame(userChoice) {
    const compChoice = condition();
    const result = getResult(userChoice, compChoice);
    showResult(userChoice, compChoice, result);
}

// 6. Function to reset the game score back to zero
function resetScore() {
    score.win = 0;
    score.lost = 0;
    score.tie = 0;
    
    // Clear the text fields on the webpage
    document.getElementById('user-move').innerText = '';
    document.getElementById('computer-move').innerText = '';
    document.getElementById('result').innerText = '';
    document.getElementById('score').innerText = 'Won :0 Lost :0 Tie :0 ';
}
