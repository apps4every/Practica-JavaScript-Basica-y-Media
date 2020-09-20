
/*Escriba un programa JavaScript para crear una nueva cadena a partir de una cadena dada con el primer
arácter de la cadena dada agregado al principio y al final*/
function Pract68(cadenaOrigen){
    document.getElementById("txt682").style = " font-weight: bold;color:blue;"

    if ((cadenaOrigen.trim()).length > 0) {
        document.getElementById("txt682").innerHTML = cadenaOrigen[0] + cadenaOrigen + cadenaOrigen[0];
    }else{
        document.getElementById("txt682").innerHTML ="Debe introducir un texto";
        document.getElementById("txt682").style = "color:red"
    }
}

/*Escriba un programa JavaScript para comprobar si un número positivo dado es múltiplo de 3 o múltiplo de 7.*/
function Pract69(numeroOrigen){
    document.getElementById("result69").style = " font-weight: bold;color:blue;"

    if (numeroOrigen.length > 0){
        if (numeroOrigen % 3 === 0 || numeroOrigen % 7 === 0){
            document.getElementById("result69").innerHTML = "Es divisible entre 3 o 7";
        }else{
            document.getElementById("result69").innerHTML = "No es divisble entre 3 ni entre 7";
        }
    }else{
        document.getElementById("result69").innerHTML ="Debe introducir un número";
        document.getElementById("result69").style = "color:red"
    }
}

/*Escriba un programa JavaScript para crear una nueva cadena a partir de una cadena dada,
tomando los últimos 3 caracteres y agregándolos al frente y al dorso. La longitud de la cuerda debe ser 3 o más. */
function Pract70(cadenaOrigen){
    document.getElementById("result70").style = " font-weight: bold;color:blue;"
    if ((cadenaOrigen.trim()).length > 0) {
        if (cadenaOrigen.length >= 3){
            let substr =cadenaOrigen.substring(cadenaOrigen.length, cadenaOrigen.length-3) ;
            document.getElementById("result70").innerHTML =     substr + cadenaOrigen + substr;
        }else{
            document.getElementById("result70").innerHTML ="La cadena debe contener, al menos, 3 caracteres";
            document.getElementById("result70").style = "color:red"
        }
    }else{
        document.getElementById("result70").innerHTML ="Debe introducir un texto";
        document.getElementById("result70").style = "color:red"
    }
}

/*Escriba un programa JavaScript para verificar si una cadena comienza con 'Java' y falso en caso contrario.*/
function Pract71(cadenaOrigen){
    document.getElementById("result71").style = " font-weight: bold;color:blue;"
    if ((cadenaOrigen.trim()).length > 0) {
        if (cadenaOrigen.substring(0,4) === 'Java') {
            document.getElementById("result71").innerHTML = "Si empieza por Java";
        }else{
            document.getElementById("result71").innerHTML = "No empieza por Java";
        }
    }else{
        document.getElementById("result71").innerHTML ="Debe introducir un texto";
        document.getElementById("result71").style = "color:red"
    }
}

/* Escriba un programa JavaScript para verificar si dos valores enteros dados están en el
rango 50..99 (inclusive). Devuelve verdadero si alguno de ellos está en dicho rango. */
function Pract72(numeroOrigen1, numeroOrigen2){
    document.getElementById("result72").style = " font-weight: bold;color:blue;"
    if (numeroOrigen1.length > 0 && numeroOrigen2.length > 0){
        if ((numeroOrigen1 >= 50 && numeroOrigen1 <= 99) || ((numeroOrigen2 >= 50 && numeroOrigen2 <= 99))){
            document.getElementById("result72").innerHTML = "Al menos uno de los número está en el rango (50-99)";
        }else{
            document.getElementById("result72").innerHTML = "Ninguno de los números está en el rango (50-99)";
        }
    }else{
        document.getElementById("result72").innerHTML ="Debe introducir 2 numeros";
        document.getElementById("result72").style = "color:red"
    }
}

/*Escriba un programa JavaScript para verificar si tres valores enteros dados están en el
rango 50..99 (inclusive). Devuelve verdadero si uno o más de ellos están en dicho rango. */
function Pract73(numeroOrigen1, numeroOrigen2, numeroOrigen3){
    document.getElementById("result73").style = " font-weight: bold;color:blue;"
    if (numeroOrigen1.length > 0 && numeroOrigen2.length > 0 && numeroOrigen3.length > 0){
        if ((numeroOrigen1 >= 50 && numeroOrigen1 <= 99) || (numeroOrigen2 >= 50 && numeroOrigen2 <= 99) || (numeroOrigen3 >= 50 && numeroOrigen3 <= 99)){
            document.getElementById("result73").innerHTML = "Al menos uno de los número está en el rango (50-99)";
        }else{
            document.getElementById("result73").innerHTML = "Ninguno de los números está en el rango (50-99)";
        }
    }else{
        document.getElementById("result73").innerHTML ="Debe introducir 2 numeros";
        document.getElementById("result73").style = "color:red"
    }
}

/*Escriba un programa JavaScript para obtener la fecha actual. Resultado  esperado :
    mm-dd-aaaa, mm / dd / aaaa o dd-mm-aaaa, dd / mm / aaaa */
function Pract74(){
    let fecha =new Date();
    let dia =fecha.getDate();
    let mes = fecha.getMonth();
    let year =fecha.getFullYear();

    /*mm-dd-aaaa*/
    document.getElementById("result741").innerHTML = mes + '-' + dia + '-' + year;
    /*mm/dd/aaaa o dd-mm-aaaa*/
    document.getElementById("result742").innerHTML = mes + '/' + dia + '/' + year + '&nbsp;&nbsp;&nbsp;-o-&nbsp;&nbsp;&nbsp;' + dia + '-' + mes + '-' + year;
    /*dd/mm/aaaa*/
    document.getElementById("result743").innerHTML = dia + '/' + mes + '/' + year;
}

/*Escriba un programa JavaScript para verificar si una cadena "Script" se presenta en la quinta posición (índice 4)
en una cadena dada, si "Script" se presenta en la cadena, devuelva la cadena sin "Script"; de lo contrario,
devuelva la original.*/
function Pract75(cadenaOriginal){
    const Cadena = "Script";
    document.getElementById("result75").style = " font-weight: bold;color:blue;"

    if ((cadenaOriginal.trim()).length > 0) {
        if (cadenaOriginal.includes(Cadena,4)){
            document.getElementById("result75").innerHTML = cadenaOriginal.substring(0,4) + cadenaOriginal.substring(4 + Cadena.length,cadenaOriginal.length);
        }else{
            document.getElementById("result75").innerHTML = cadenaOriginal;
        }
    }else{
        document.getElementById("result75").innerHTML ="Debe introducir un texto";
        document.getElementById("result75").style = "color:red"
    }
}