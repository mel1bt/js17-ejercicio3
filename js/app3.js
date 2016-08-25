var numero = parseInt(prompt("Ingrese numero"));
if ( numero % 2 == 0) {
	if (numero > 2 && numero < 5) {
		document.write("Good!");
	} else	if (numero > 6 && numero < 20) {
		document.write("Great!");
	}
	else if (numero>20) {
		document.write("Perfect!");
	}
} 
else {
	document.write("Odd!");
}

