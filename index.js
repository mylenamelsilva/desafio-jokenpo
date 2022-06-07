const getUserChoice = (userInput) => {
    const userAnswer = userInput.toLowerCase()
    
    switch (userAnswer) {
        case 'papel':
            return userAnswer;
            break;
        case 'pedra':
            return userAnswer;
            break;
        case 'tesoura':
            return userAnswer;
            break;
        default:
            return `ERRO: Escolha pedra, papel ou tesoura.`;
            break;
    }
}

// console.log(getUserChoice('PedRA'));
// console.log(getUserChoice('papel'));
// console.log(getUserChoice('TESOURA'));
// console.log(getUserChoice('qualquerum'));

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
        default:
            return 'ERRO: Escolha pedra, papel ou tesoura';
            break;
    }
}

// console.log(getComputerChoice())