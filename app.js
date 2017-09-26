var magicFunction = function (nombre,inc,dec) {
	var valeur = nombre.toString();
    console.log(valeur);
    if (inc === "inc") {
	    if (valeur[1] === "." || valeur[2] === ".") {
	        var lastNumber = Number(valeur.charAt(valeur.length - 1));
	        valeur = valeur.replace(lastNumber, (lastNumber + 1));
	        valeur = Number(valeur);
	    } else if (valeur.length === 1) {
	    	valeur = Number(valeur) +1;
	    } else if (valeur.length === 2) {
	        var roundNumber = Number(valeur[0]) +1;
	        var roundStr = roundNumber.toString();
	        var valeurTemp = roundStr + "0";
	        valeur = Number(valeurTemp);
	   	} else if (valeur.length === 3) {
	        roundNumber = Number(valeur[0]) +1;
	        roundStr = roundNumber.toString();
	        valeurTemp = roundStr + "00";
	        valeur = Number(valeurTemp);
		} else if (valeur.length === 4) {
	        roundNumber = Number(valeur[0]) +1;
	        roundStr = roundNumber.toString();
	        valeurTemp = roundStr + "000";
	        valeur = Number(valeurTemp);
	    }
	} else {
		if (valeur[1] === "." || valeur[2] === ".") {
	        var lastNumber = Number(valeur.charAt(valeur.length - 1))
	        valeur = valeur.replace(lastNumber, (lastNumber - 1));
	        valeur = Number(valeur);
	    } else if (valeur.length === 1) {
	    	valeur = Number(valeur) -1;
	    } else if (valeur.length === 2) {
	        var roundNumber = Number(valeur[0]) -1;
	        console.log(roundNumber);
	        var roundStr = roundNumber.toString();
	        console.log(roundStr);
	        var valeurTemp = roundStr + "0";
	        console.log(valeurTemp);
	        valeur = Number(valeurTemp);
	   	} else if (valeur.length === 3) {
	        roundNumber = Number(valeur[0]) -1;
	        console.log(roundNumber);
	        roundStr = roundNumber.toString();
	        console.log(roundStr);
	        valeurTemp = roundStr + "00";
	        console.log(valeurTemp);
	        valeur = Number(valeurTemp);
		} else if (valeur.length === 4) {
	        roundNumber = Number(valeur[0]) -1;
	        console.log(roundNumber);
	        roundStr = roundNumber.toString();
	        console.log(roundStr);
	        valeurTemp = roundStr + "000";
	        console.log(valeurTemp);
	        valeur = Number(valeurTemp);
	    }
	}
    return valeur;
}
console.log(magicFunction(3,"dec"));