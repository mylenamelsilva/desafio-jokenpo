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
//console.log(getUserChoice('teSOura'));
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
      return `${submitUsuario()}, pedra ganha da tesoura. Você ganhou!`;
    } else if (userChoice == "tesoura" && computerChoice == "papel") {
      return `${submitUsuario()}, tesoura ganha do papel. Você ganhou!`;
    } else if (userChoice == "papel" && computerChoice == "pedra") {
      return `${submitUsuario()}, papel ganha da pedra. Você ganhou!`;
    } else if (computerChoice == "pedra" && userChoice == "tesoura") {
      return `${submitUsuario()}, pedra ganha da tesoura. Você perdeu!`;
    } else if (computerChoice == "tesoura" && userChoice == "papel") {
      return `${submitUsuario()}, tesoura ganha do papel. Você perdeu!`;
    } else if (computerChoice == "papel" && userChoice == "pedra") {
      return `${submitUsuario()}, papel ganha da pedra. Você perdeu!`;
    } else {
      return `ERRO: Escolha pedra, papel ou tesoura.`;
    }
  }
}

function playGame() {
  let userInput = document.getElementById("userInput").value;

  let userChoice = getUserChoice(userInput);
  console.log("Opção do usuário: " + userChoice);
  let computerChoice = getComputerChoice();
  document.getElementById("computerAnswer").innerHTML = computerChoice;

  console.log(
    "Seu valor escolhido foi: " + userChoice + ".",
    "O valor da máquina foi: " + computerChoice
  );

  let winner = (document.getElementById("winner").innerHTML = determineWinner(
    userChoice,
    computerChoice
  ));
  // console.log(determineWinner(userChoice, computerChoice));
}
// playGame();

function usuarioName(userName) {
  let name = userName[0].toUpperCase() + userName.substring(1).toLowerCase();

  return name;
}

function submitUsuario() {
  let userName = document.getElementById("userName").value;

  let user = usuarioName(userName);

  return user;
}

