// 0 = rock, 1 = paper, 2 = scissor
function getCompChoice() {
    let compChoice = Math.floor(Math.random(0)*3);
    return compChoice;
}

function getUserChoice() {
    let userChoice = prompt("Enter 0-rock, 1-paper, 2-scissors.");
    return userChoice;
}

function shoot(userChoice, compChoice) {
    if (Number(userChoice) === compChoice) {
        console.log("Draw, go again.");
        return 0;
    } else if (Number(userChoice) == 0 && Number(compChoice) == 2) {
        console.log("You chose rock, comp chose scissor. You win");
        return 1;
    } else if (Number(userChoice) == 1 && Number(compChoice) == 0) {
        console.log("you chose paper, comp chose rock. You win");
        return 1;
    } else if (Number(userChoice) == 2 && Number(compChoice) == 1) {
        console.log("you chose scissor, comp chose paper. You win.");
        return 1;
    } else if (Number(userChoice) == 0 && Number(compChoice) == 1) {
        console.log("You chose rock, comp chose paper. You lose");
        return -1;
    } else if (Number(userChoice) == 1 && Number(compChoice) == 2) {
        console.log("You chose paper, comp chose scissor. You lose");
        return -1;
    } else if (Number(userChoice) == 2 && Number(compChoice) == 0) {
        console.log("You chose scissor, comp chose rock. You lose");
        return -1;
    }
} 

function game() {
    let userScore = 0;
    let compScore = 0;
    while (userScore < 4 && compScore < 4) {
    if (userScore === 3){
        console.log("YOU WIN!");
        break;
    } else if (compScore === 3) {
        console.log("you lose.");
        break;
    }
        let points = shoot(getUserChoice(), getCompChoice())
    if (points === 1) {
        userScore += 1;
    } else if (points === -1) {
        compScore += 1;
    }
    }
}
