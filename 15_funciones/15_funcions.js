

// SALUDAR: Dice hola a quien tú quieras
function saludar(nombre) {
    return "¡Hola, " + nombre + "!";
}

// SUMAR: Suma dos números (como una calculadora básica)
function sumar(a, b) {
    return a + b;
}

// DOBLE: Multiplica un número por 2
function obtenerDoble(numero) {
    return numero * 2;
}

// ES PAR: Responde SI (true) o NO (false) si es divisible por 2
function esPar(numero) {
    return numero % 2 === 0;
}

// MAYOR: Encuentra cuál de los tres números es el más grande
function obtenerMayor(a, b, c) {
    return Math.max(a, b, c);
}

// CELSIUS A FAHRENHEIT: Convierte temperatura (fórmula fija)
function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// METROS A CM: Convierte metros a centímetros (x100)
function metrosACentimetros(metros) {
    return metros * 100;
}

//ÁREA CILINDRO: Calcula el área total (fórmula matemática)
function calcularAreaCilindro(radio, altura) {
    return 2 * Math.PI * radio * (radio + altura);
}

//ALEATORIO: Elige un número al azar entre min y max (como un dado)
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//FECHA ACTUAL: Te dice qué día y hora es ahora mismo
function obtenerFechaActual() {
    return new Date().toLocaleString();
}

// MAYÚSCULAS: Transforma todo el texto a letras grandes
function convertirMayusculas(texto) {
    return texto.toUpperCase();
}

// CONTAR PALABRAS: Cuenta cuántas palabras hay en una frase
function contarPalabras(frase) {
    if (!frase) return 0;
    return frase.trim().split(" ").length;
}

//ELIMINAR DUPLICADOS: Quita los repetidos de una lista
function eliminarDuplicados(arr) {
    return [...new Set(arr)];
}

//FILTRAR MAYORES: Solo deja pasar los números mayores a 10
function filtrarMayoresA10(arr) {
    return arr.filter(num => num > 10);
}

// CAMBIAR TEXTO HTML: Cambia lo que dice un elemento en la página
function cambiarTextoElemento(id, nuevoTexto) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.textContent = nuevoTexto;
        return "Texto cambiado con éxito.";
    }
    return "Error: No encontré ese elemento.";
}