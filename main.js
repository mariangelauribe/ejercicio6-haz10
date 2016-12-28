function calcular()
{
    var a = parseInt(document.getElementById("numero_a").value);
    var b = parseInt(document.getElementById("numero_b").value);
    var salida = document.getElementById("salida");
    var salida2 = document.getElementById("salida2");
    var suma = a + b;
    
	if ((a == 10 && b != 10) || (b == 10 && a != 10) || (suma == 10)) {
        salida.innerHTML = suma;
        salida2.innerHTML = "1";
        
    } else {
        salida.innerHTML = suma;
        salida2.innerHTML = "0";
    }
}