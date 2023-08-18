
const min = 1;
const max = 100;

function adivinaElNumero(min, max) {
    while (min <= max) {
        const mitad = Math.floor((min + max) / 2);
        const posible = parseInt(prompt(`¿Es ${mitad} tu número? (1: Sí, 2: Mi número es mayor, 3: Mi número es menor)`));
        
        if (posible === 1) {
            console.log(`¡Adiviné! Tu número es ${mitad}.`);
            break;
        } else if (posible === 2) {
            min = mitad + 1;
        } else if (posible === 3) {
            max = mitad - 1;
        } else {
            console.log("Respuesta inválida. Por favor, elige 1, 2 o 3.");
        }
    }
}



adivinaElNumero(min, max);
