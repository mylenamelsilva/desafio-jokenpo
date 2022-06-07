const getUserChoice = (userInput) => {
  const userAnswer = userInput.toLowerCase();

  switch (userAnswer) {
    case "papel":
      return userAnswer;
      break;
    case "pedra":
      return userAnswer;
      break;
    case "tesoura":
      return userAnswer;
      break;
    default:
      return `ERRO: Escolha pedra, papel ou tesoura.`;
      break;
  }
};

//console.log(getUserChoice('PedRA'));
//console.log(getUserChoice('papel'));
//console.log(getUserChoice('TESOURA'));
//console.log(getUserChoice('qualquerum'));

const getComputerChoice = () => {
  const computerAnswer = Math.floor(Math.random() * 3);

  switch (computerAnswer) {
    case 0:
      return `pedra`;
      break;
    case 1:
      return `papel`;
      break;
    case 2:
      return `tesoura`;
      break;
  }
};

// console.log(getComputerChoice())

function determineWinner(userChoice, computerChoice) {
  if (userChoice == computerChoice) {
    return "Empate!";
  } else {
    if (userChoice == "pedra" && computerChoice == "tesoura") {
      return "Pedra ganha da Tesoura. Você ganhou!";
    } else if (userChoice == "tesoura" && computerChoice == "papel") {
      return "Tesoura ganha do papel. Você ganhou!";
    } else if (userChoice == "papel" && computerChoice == "pedra") {
      return "Papel ganha da pedra. Você ganhou!";
    } else if (computerChoice == "pedra" && userChoice == "tesoura") {
      return "Pedra ganha da Tesoura. Você perdeu!";
    } else if (computerChoice == "tesoura" && userChoice == "papel") {
      return "Tesoura ganha do papel. Você perdeu!";
    } else if (computerChoice == "papel" && userChoice == "pedra") {
      return "Papel ganha da pedra. Você perdeu!";
    }
}
}

function playGame() {
    let userInput = document.getElementById('userInput').value;

    let userChoice = getUserChoice(userInput);
    console.log("Opção do usuário: " + userChoice);
    let computerChoice = getComputerChoice();
    document.getElementById('computerAnswer').innerHTML = computerChoice

    console.log(
      "Seu valor escolhido foi: " + userChoice + ".",
      "O valor da máquina foi: " + computerChoice
    );

    let winner = document.getElementById('winner').innerHTML = determineWinner(userChoice, computerChoice)
    // console.log(determineWinner(userChoice, computerChoice));

}
// playGame();
