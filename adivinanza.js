const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado === numeroSecreto) {
        console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
    } else if (numeroAdivinado > numeroSecreto) {
        console.log('El número secreto es menor. ¡Intenta de Nuevo!');
    } else {
        console.log('El número secreto es mayor. ¡Intenta de Nuevo!');
    }
};
module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};
