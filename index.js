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
