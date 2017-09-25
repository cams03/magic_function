var test = function (nombre) {
 	valeur = nombre.toString();
    for(var i=0;i<valeur.length;i++) {
	    if (valeur.length === 2) {
	    	valeur = Number(valeur) + 10;
	 		console.log(valeur);
	    } else if (valeur.length === 3) {
	    	valeur = Number(valeur) + 100;
	    	console.log(valeur);
	    } else if (valeur[2] === ".") {
	    	valeur = Number(valeur) + 0.1;
	    	console.log(valeur);
	    }
    }
}
test(0.1);