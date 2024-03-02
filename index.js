
let nombre = prompt("Ingrese su nombre: ");

alert("Hola bienvenido " + nombre + ", te propongo un juegazo.");

alert("Tenés 8 chances para adivinar un número del 1 al 100. Yo te diré si en cada chance que erres el número, éste es mayor o menor al número que pienso. Te deseo suerte!!!" )


let numero = Math.floor(Math.random() * 100) + 1; // con esta función, genero un número aleatorio para el juego que cambie en cada jugada.
let intentos = 1; // contador de intentos que aumenta en uno a medida que erra al número
let intentos_que_quedan = 8; // contandor que informa los intentos que quedan y cuando llegue a 0 termine el juego

while (intentos <= 8) {
    let ingrese_numero = parseInt(prompt("Elige un número del 1 al 100, tienes que adivinar que número estoy pensando, tienes 8 intentos, yo te voy a ayudar diciendote si el número es menor o mayor al mío "));
    
    if (!isNaN(ingrese_numero)) { //con esta condición me aseguro que introduzcan un número
        if (ingrese_numero === numero) {
            alert("¡¡¡ACERTAAAAAASTEEEEE¡¡¡¡ Ganaste el juegooooo!!!");
            alert("Lo hiciste en el intento número " + intentos + " . Sos un capo!!!");
            alert("Ganaste un peluchito de Milei que vale 500 pesos y que tenés que pagarlo porque NO HAY PLATA!!!")
            break;
        } else {
            alert("¡¡¡Erraaaaasteeee!!!");

            if (ingrese_numero < numero) { //con este if else ayudo al jugador y además le informo los intentos que le quedan 
                alert("el numero " + ingrese_numero + " es menor a mi número, prueba con otro numero mayor. Te quedan " + (intentos_que_quedan-1) + " intentos ");
            } else {
                alert("el numero " + ingrese_numero + " es mayor a mi número, prueba con otro numero menor. Te quedan " + (intentos_que_quedan-1) + " intentos ");
            }
            intentos_que_quedan-=1;
        }
    } else {
        alert("No se permiten puntos ni caracteres en el numero. Intenta de nuevo correctamente: "); //condición para que ponga número y no cuente una vuelta del ciclo
    }
    
    intentos+=1; 
}

if (intentos > 8) {
    alert("Perdiste el juegoooo!!!");
    alert("Mi número era el " + numero);

    alert("Por perder vas a tener que invitar a tu suegra a una cena con tu novia y decirle con carita feliz que vaya a vivir con ustedes ");
    alert("Y también cambiar los dólares que tengas ahorrado al tipo de cambio oficial");
    alert("Así que que la próxima vez piensa bien los números antes de poner :-P ");
}