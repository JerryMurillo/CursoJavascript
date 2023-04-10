
/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/
//CODIGO:

const contarCaracteres = (cadena = "") =>
  (!cadena) ? console.warn("No ingresaste ninguna cadena") :
    console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)
contarCaracteres("Hola Mundo");

/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/
//CODIGO:

const recortarCaracteres = (cadena = "", cantidad = "") =>
  (!cadena || !cantidad) ? console.warn("No ingresaste la cadena o la cantidad") :
    console.info(`El texto recortado de la cadena "${cadena}" es: ${cadena.slice(cadena, cantidad)}`)
recortarCaracteres("Hola Mundo", 4);

/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/
//CODIGO:

const separaPalabras = (cadena = "", caracter = "") =>
  (!cadena || !caracter) ? console.warn("No ingresaste la cadena o el caracter") :
    console.info(`El array de palabras generado de la cadena "${cadena}" separadas por el caracter "${caracter}" es: [${cadena.split(caracter)}]`)
separaPalabras("hola que tal", " ");

/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/
//CODIGO:

const repetirTexto = (cadena = "", valor = "") =>
  (!cadena || !valor) ? console.warn("No ingresaste la cadena o el valor") :
    console.info(`Al repetir el texto "${cadena}" recibido, y repetirlo por "${valor}" veces, queda así: ${cadena.repeat(valor)}`)
repetirTexto("Hola Mundo ", 3);

/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/
//CODIGO:

const invertirPalabras = (cadena = "") => {
  let almacen1 = undefined;
  let almacen2 = undefined;
  if (!cadena) {
    return console.warn("No ingresaste ningun texto")
  }
  else {
    almacen1 = cadena.split("");
    almacen2 = almacen1.reverse("");
    almacen1 = almacen2.join("");
    return console.info(`La cadena "${cadena}" invertida queda así: ${almacen1}`);
    }
}
invertirPalabras("Hola Mundo");

/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/
//CODIGO:

const palabrasRepetidas = (cadena = "", palabra = "") => {
  let almacen1 = undefined;
  let contador = 0;
  if (!cadena) {
    return console.warn("No ingresaste ningun texto")
  }
  else {
    almacen1 = cadena.split(" ");
    for (i = 0; i <= almacen1.length; i++) {
      if (almacen1[i] === palabra) {
        contador++;
      }
    }
      if (contador > 0) {
        return console.info(`El numero de veces que se repite la palabra "${palabra}" en el texto es: "${contador}" veces`);
      }
      else {
        return console.info(`La palabra que ingreso no existe en el texto`);
      }
  }
}
palabrasRepetidas("hola mundo adios mundo", "mundo");

/*
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/
//CODIGO:

const palindromo = (cadena = "") => {
    cadena = cadena.toLowerCase();
    let almacen1 = undefined;
    let almacen2 = undefined;
    if (!cadena) {
        return console.warn(`No ingresaste ningun texto`);
    }
    else {
        almacen1 = cadena.split("");
        almacen2 = almacen1.reverse("");
        almacen1 = almacen2.join("");
    }
    if (almacen1 === cadena) {
        return console.info(`La frase "${cadena}" es un palindromo?: "TRUE"`)
    }
    else {
        return console.info(`La frase "${cadena}" es un palindromo?: "FALSE"`)
    }
}
palindromo("Salas");

/*
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/
//CODIGO:

const eliminarPatron = (cadena = "", patron = "") => {
    if (!cadena) {
        return console.warn(`No ingresaste ningun texto`)
    }
    if (!patron) {
        return console.warn(`No ingresaste el patron a eliminar`)
    }
    if (cadena && patron) {
        return console.info("La ejecusion de la funcion devuelve: " + cadena.replace(new RegExp(patron, "ig"), ""));
    }
}
eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/
//CODIGO:

const numeroAleatorio = (min = "", max = "") =>
    (!min) ? console.warn("No ingresaste el valor minimo") :
        (!max) ? console.warn("No ingresaste el valor maximo") :
            console.info(`El número aleatorio entre el rango minimo "${min}" y el maximo "${max}" suministrado es: ${Math.floor(Math.random() * (max - min)) + min}`);
numeroAleatorio(501, 601);

/*
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/
//CODIGO:

const capicua = (numero = 0) => {
    numero = numero.toString();
    let almacen1 = numero.split("").reverse().join("");
    if (almacen1 === numero) {
        return console.info(`La cifra "${numero}" es un capicua?: "TRUE"`)
    }
    else {
        return console.info(`La cifra "${numero}" es un capicua?: "FALSE"`)
    }
}
capicua(2002);

/*
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/
//CODIGO:

const factorialNumero = (numero = undefined) => {

    let producto = 1;

    if (numero === 0) { return console.warn(`A el numero "${numero}" no se le puede sacar Factorial`); }

    if (!numero) { return console.warn("No ingresaste ningun número"); }

    if (numero < 1) { return console.warn("El número debe ser positivo"); }

    for (i = 1; i <= numero; i++) {
        producto = producto * i;
    }
    return console.info(`El factorial del numero "${numero}" es: ${producto}`);
}
factorialNumero(5);

/*
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/
//CODIGO:

const numeroPrimo = (numero = "") => {
    if (!numero) { return console.info('No ingresaste ningun número'); }
    if (numero < 2) { return console.info('El número ingresado debe ser mayor a "1"'); }
    for (i = 2; i <= (numero / 2); i++) {
        if (numero % i === 0) { return console.info(`El número "${numero}" NO es Primo`); }
    }
    if (i = numero / 2) { return console.info(`El número "${numero}" es Primo`) }
}
numeroPrimo(7)

/*
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
*/
//CODIGO:

const numeroEsPar = (numero = "") => {
    if (!numero) { return console.info('No ingresaste ningun número'); }
    if (numero % 2 === 0) { return console.info(`El número "${numero}" es Par`); }
    else { return console.info(`El número "${numero}" es Impar`); }
}
numeroEsPar(29)

/*
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/
//CODIGO:

const conversionTemperatura = (grados = undefined, tipo = undefined) => {
    //    let conversion = undefined;
    if (grados === undefined) return console.warn("No ingresaste los grados");
    if (!tipo) return console.warn("No ingresaste el tipo de temperatura a convertir");
    if (tipo === "C") {
        //        conversion = ;
        return console.info(`"${grados}°C" equivalen a "${(grados * 9 / 5) + 32}°F" `)
    }
    if (tipo === "F") {
        //        conversion =  ;
        return console.info(`"${grados}°F" equivalen a "${(grados - 32) * 5 / 9}°C" `)
    }
}
conversionTemperatura(0, "C")

/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
*/
//CODIGO:

const conversionBinarioDecimales = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste el numero");
    if (base === undefined) return console.warn("No ingresaste la base");
    if (typeof numero !== "number") return console.warn(`"${numero}" no es un numero`);
    if (typeof base !== "number") return console.warn(`"${base}" no es un numero`);

    if (base === 2) return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    else if (base === 10) return console.info(`${numero} base ${base} = ${numero.toString(2)} base 2`);
    else return console.info(`El tipo de base a convertir no es valido`);
}
conversionBinarioDecimales(4, 10);

/*
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
*/
//CODIGO:

const descuento = (valor = undefined, descuento = 0) => {
    let saldo = undefined;
    if (valor === undefined) return console.warn("No ingresaste un valor");
    if (typeof valor !== "number") return console.warn(`${valor} no es un numero`);
    if (typeof descuento !== "number") return console.warn(`${descuento} no es un numero`);
    if (Math.sign(valor) === -1) return console.warn(`No es posible aplicar descuento a sifras negativas`);
    if (Math.sign(descuento) === -1) return console.warn(`El descuento no puede ser negativo`);
    return console.info(`Al aplicar el descuento del "${descuento}%" al valor "${valor}" queda un saldo de "${saldo = valor - (valor * descuento) / 100}"`);
}
descuento(1000, 20)

/*
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/
//CODIGO:

const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined) return console.warn(`No ingresaste la fecha`);
    if (!(fecha instanceof Date)) return console.warn(`"${fecha}"o es una fecha valida`);

    let resultadoEnMilisegundos = new Date().getTime() - fecha.getTime(),
        aniosMilisegundos = 1000 * 60 * 60 * 24 * 365
    aniosHumans = Math.floor(resultadoEnMilisegundos / aniosMilisegundos);

    return (Math.sign(aniosHumans) === -1)
        ? console.info(`Faltan ${aniosHumans} años para el ${fecha.getFullYear()}`)
        : (Math.sign(aniosHumans) === 1)
            ? console.info(`Han pasado ${aniosHumans} años desde el ${fecha.getFullYear()}`)
            : console.info(`Estamos en el año actual: ${fecha.getFullYear()}`);
}
calcularAnios(new Date(2031, 5, 22))

/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/
//CODIGO:

const vocalesConsonantes = (cadena = undefined) => {
    if (cadena === undefined) return console.warn(`No ingresaste el texto`)
    if (typeof (cadena) !== "string") return console.warn(`El valor ingresado no es una cadena de texto`)
    let vocales = 0;
    let consonantes = 0;
    cadena = cadena.toUpperCase();
    for (let letra of cadena) {
        if (/[AEIOUÁÉÍÓÚÜ]/.test(letra)) vocales += 1;
        if (/[BCDFGHJKLMNÑPQRSTVWXYZ]/.test(letra)) consonantes += 1;
    }
    return console.info(`El texto ingresado tiene "${vocales}" Vocales y "${consonantes}" Consonantes`)
}
vocalesConsonantes("Hola mundo")

/*
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/
//CODIGO:

const nombreValido = (nombre = undefined) => {
    if (nombre === undefined) return console.warn(`No ingresaste el nombre`);
    if (typeof (nombre) !== "string") return console.warn(`El valor ingresado no es una cadena de texto`);
    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);
    return (expReg)
        ? console.info(`"${nombre}" es un nombre valido`)
        : console.info(`"${nombre}" No es un nombre valido`)
}
nombreValido("Jerry Murillo");

/*
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/
//CODIGO:

const emailValido = (email = undefined) => {
    if (email === undefined) return console.warn(`No ingresaste el email`);
    if (typeof (email) !== "string") return console.warn(`El valor ingresado no es un email`);
    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    return (expReg)
        ? console.info(`"${email}" es un email valido`)
        : console.info(`"${email}" No es un email valido`)
}
emailValido("jealmuco@gmail.com");

/*
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/
//CODIGO:

const numerosAlCuadrado = (array = undefined) => {
    if (array===undefined) return console.warn(`No ingresaste el array`);
    if (!(array instanceof Array)) return console.warn(`"${array}" No es un array`);
    if (array.length === 0) return console.warn(`El array no puede estar vacio`);
    let arrayNuevo = [undefined];
    for (i = 0; i < array.length; i++) {
        if(typeof(array[i]) === "number" ){
        arrayNuevo[i] = array[i] * array[i];
        }
        else return console.warn(`El array contiene elementos que no son numericos`)
    }
    return console.info(`El nuevo array elevado al cuadrado es: "[${arrayNuevo}]"`)
}
numerosAlCuadrado([1,4,5]);

/*
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/
//CODIGO:

const arrayMinimoMaximo = (arreglo = undefined) =>{
    if (arreglo===undefined) return console.warn(`No ingresaste el array`);
    if (!(arreglo instanceof Array)) return console.warn(`"${arreglo}" No es un array`);
    if (arreglo.length === 0) return console.warn(`El array no puede estar vacio`);
    for(let num of arreglo){
        if(typeof num !== "number") return console.warn(`El valor "${num}" ingresado, No es un numero`);
    }
    return console.info(`Los numeros mayor y menor del array [${arreglo}] dado son: [ ${Math.max(...arreglo)}, ${Math.min(...arreglo)} ]`)
}
arrayMinimoMaximo([1, 4, 5, 99, -60])

/*
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/
//CODIGO:

const paresImpares = (arreglo = undefined) => {
    if (arreglo===undefined) return console.warn(`No ingresaste el array`);
    if (!(arreglo instanceof Array)) return console.warn(`"${arreglo}" No es un array`);
    if (arreglo.length === 0) return console.warn(`El array no puede estar vacio`);
    for(let num of arreglo){
        if(typeof num !== "number") return console.warn(`El valor "${num}" ingresado, No es un numero`);
    }
    let pares = [];
    let impares = [];
    for(i=0;i<arreglo.length;i++){
        if(arreglo[i]%2 === 0){
            pares.push(arreglo[i]);
        }
        else impares.push(arreglo[i]);
    }
    return console.info(`Del arreglo dado: "[${arreglo}]" obtenemos el arreglo pares: "[${pares}]" y el arreglo impares: "[${impares}]"`)
}
paresImpares([1,2,3,4,5,6,7,8,9,0])

/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/
//CODIGO:

const ascendentesDescendentes = (arr = undefined) => {
    if (arr===undefined) return console.warn(`No ingresaste el array`);
    if (!(arr instanceof Array)) return console.warn(`"${arr}" No es un array`);
    if (arr.length === 0) return console.warn(`El array no puede estar vacio`);
    for(let num of arr){
        if(typeof num !== "number") return console.warn(`El valor "${num}" ingresado, No es un numero`);}
    let ascendente = [];
    let descendente = [];
    return console.info(`Del arreglo dado: "[${arr}]" obtenemos el arreglo Ascendente: "[${ascendente = arr.sort(function(a, b){return a - b})}]" y el arreglo Descendente: "[${descendente= arr.sort(function(a, b){return b - a})}]"`)
}
ascendentesDescendentes([7,5,7,8,6])

/*
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/
//CODIGO:

const eliminarRepetidos = (arra = undefined) => {
    if (arra===undefined) return console.warn(`No ingresaste el array`);
    if (!(arra instanceof Array)) return console.warn(`"${arra}" No es un array`);
    if (arra.length === 0) return console.warn(`El array no puede estar vacio`);
    if (arra.length === 7) return console.warn(`El array debe tener minimo 2 elementos`);
    let result = arra.filter((item,index)=>{
        return arra.indexOf(item) === index;
    })    
    return console.info(`El resultado despues de eliminar los repetidos del array "[${arra}]" es: "[${result}]"`)
}
eliminarRepetidos(["x", 10, "x", 2, "10", 10, true, true])

/*
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/
//CODIGO:

const promedioNumero = (arr = undefined) => {
    if (arr===undefined) return console.warn(`No ingresaste el array`);
    if (!(arr instanceof Array)) return console.warn(`"${arr}" No es un array`);
    if (arr.length === 0) return console.warn(`El array no puede estar vacio`);
    for(let num of arr){
        if(typeof num !== "number") return console.warn(`El valor "${num}" ingresado, No es un numero`);
    }
    let suma = 0;
    for(i=0;i<arr.length;i++){
        suma=suma+arr[i];
    }
    let promedio = suma / arr.length;
    return console.info(`El promedio del arreglo dado: "[${arr}]" es el siguiente: "${promedio}"`)
}
promedioNumero([9,8,7,6,5,4,3,2,1,0])

/*
27) Programa una clase llamada Pelicula.
La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
- Todos los datos del objeto son obligatorios.
- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
- Valida que el título no rebase los 100 caracteres.
- Valida que el director no rebase los 50 caracteres.
- Valida que el año de estreno sea un número entero de 4 dígitos.
- Valida que el país o paises sea introducidos en forma de arreglo.
- Valida que los géneros sean introducidos en forma de arreglo.
- Valida que los géneros introducidos esten dentro de los géneros aceptados*.
- Crea un método estático que devuelva los géneros aceptados*.
- Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
- Crea un método que devuelva toda la ficha técnica de la película.
- Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.
+ Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/
//CODIGO:

class Pelicula{
    constructor({id, titulo, director, anioEstreno, paisOrigen, generos, calificacion}){
        this.id=id;
        this.titulo=titulo;
        this.director=director;
        this.anioEstreno=anioEstreno;
        this.paisOrigen=paisOrigen;
        this.generos=generos;
        this.calificacion=calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarAnioEstreno(anioEstreno);
        this.validarPais(paisOrigen);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    static get listaGenero(){
        return["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }
    static generosAceptados(){
        return console.info(`Los generos aceptados son: ${Pelicula.listaGenero.join(", ")}`);
    }

validarCadena(propiedad, valor){
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (typeof valor !== "string") return console.warn(`${propiedad} "${valor}" ingresado, No es una cadena de texto`);
    return true;
}
validarLongitudCadena(propiedad, valor, longitud){
    if (valor.length>longitud) return console.warn(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud})`);
    return true;
}
validarNumero(propiedad, valor){
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (typeof valor !== "number") return console.warn(`${propiedad} "${valor}" ingresado, No es un numero`);
    return true;
}
validarArreglo(propiedad, valor){
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (!(valor instanceof Array)) return console.warn(`${propiedad} "${valor}" ingresado, No es un arreglo`);
    if (valor.length === 0) return console.warn(`${propiedad} "${valor}" no tiene datos`);
    for(let cadena of valor){
        if(typeof cadena !== "string") return console.warn(`El valor "${cadena}" ingresado, No es una cadena de texto`);
    }
    return true;
}
validarIMDB(id){
    if(this.validarCadena("IMDB id",id)){
        if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
            return console.warn(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los primeros 2 letras minusculas y los 7 restantes numeros`);
        }
    }
}
validarTitulo(titulo){
    if(this.validarCadena("Titulo",titulo)){
        this.validarLongitudCadena("Titulo",titulo,100);
    }
}
validarDirector(director){
    if(this.validarCadena("Titulo",director)){
        this.validarLongitudCadena("Titulo",director,50);
    }
}
validarAnioEstreno(anioEstreno){
    if(this.validarNumero("Año de Estreno",anioEstreno)){
        if(!(/^([0-9]){4}$/.test(anioEstreno))){
            return console.warn(`Año de Estreno "${anioEstreno}" no es valido, ser un numero de 4 digitos`);
        }
    }
}
validarPais(paisOrigen){
    this.validarArreglo("Pais",paisOrigen);
}
validarGeneros(generos){
    if(this.validarArreglo("Generos",generos)){
        for(let genero of generos){
            if(!Pelicula.listaGenero.includes(genero)){
                console.warn(`Genero(s) incorrecto(s) "${generos.join(", ")}"`);
                Pelicula.generosAceptados();
            }
        }
    }
}
validarCalificacion(calificacion){
    if(this.validarNumero("Calificacion",calificacion))
        return(calificacion < 0 || calificacion > 10)
        ? console.warn(`La calificacion tiene que estar en un rango entre 0 y 10`)
        : this.calificacion = calificacion.toFixed(1);
}
fichaTecnica(){
    console.info(`Ficha Tecnica:\nTitulo:"${this.titulo}"\nDirector:"${this.director}"\nAño:"${this.anioEstreno}"\nPais:"${this.paisOrigen.join(" - ")}"\nGeneros:"${this.generos.join(", ")}"\nCalificacion:"${this.calificacion}"\nIMDB id:"${this.id}"`);
}

}

const misPeli = [
    {
        id: "tt0241527",
        titulo: "Harry Potter y la piedra filosofal",
        director: "Chris Columbus",
        anioEstreno: 2001,
        paisOrigen: ["Reino Unido","Estados Unidos"],
        generos: ["Adventure","Family", "Fantasy"],
        calificacion: 7.6,
        },
    {
        id: "tt0120338",
        titulo: "Titanic",
        director: "James Cameron",
        anioEstreno: 1997,
        paisOrigen: ["Estados Unidos","Mexico"],
        generos: ["Drama","Romance"],
        calificacion: 7.9,
        },
    {
        id: "tt0454921",
        titulo: "En busca de la felicidad",
        director: "Chris Columbus",
        anioEstreno: 2006,
        paisOrigen: ["Estados Unidos"],
        generos: ["Biography","Drama"],
        calificacion: 8.0,
        }
];

misPeli.forEach(el => new Pelicula(el).fichaTecnica());