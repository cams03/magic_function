var magicFunction = function (nombre,inc,dec) {
	if (typeof nombre === "number" || nombre != "0") {
    	var valeur = nombre.toString();
    	console.log(valeur);
        if (inc === "inc") {
	    	if (valeur < 0 ) {
	    		if (valeur[2] === ".") {
				    var lastNumber = Number(valeur.charAt(valeur.length - 1));
				    valeur = valeur.replace(lastNumber, (lastNumber - 1));
				    valeur = Number(valeur);
				} else if (valeur.length === 2) {
		    	 	var lastNumber = Number(valeur.charAt(valeur.length - 1))
				    valeur = valeur.replace(lastNumber, (lastNumber - 1));
				    valeur = Number(valeur);
			    } else if (valeur.length === 3) {
			    	if (valeur === "-10") {
						valeur = -9;
					} else {
				        var roundNumber = Number(valeur[1]) -1;
				        var roundStr = roundNumber.toString();
				        var valeurTemp = "-" + roundStr + "0";
				        valeur = Number(valeurTemp);
			    	}
		   		} else if (valeur.length === 4) {
		   			if (valeur === "-100") {
						valeur = -90;
					} else {
				        roundNumber = Number(valeur[1]) -1;
				        roundStr = roundNumber.toString();
				        valeurTemp = "-" + roundStr + "00";
				        valeur = Number(valeurTemp);
			    	}
				} else if (valeur.length === 5) {
					if (valeur === "-1000") {
						valeur = -900;
					} else {
				        roundNumber = Number(valeur[1]) -1;
				        roundStr = roundNumber.toString();
				        valeurTemp = "-" + roundStr + "000";
				        valeur = Number(valeurTemp);
				    }
		    	}  
	    	} else if (valeur[1] === ".") {
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
			if (valeur < 0 ) {
				if (valeur[2] === ".") {
				    var lastNumber = Number(valeur.charAt(valeur.length - 1));
				    valeur = valeur.replace(lastNumber, (lastNumber + 1));
				    valeur = Number(valeur);
				} else if (valeur.length === 2) {
		    	 	var lastNumber = Number(valeur.charAt(valeur.length - 1))
				    valeur = valeur.replace(lastNumber, (lastNumber + 1));
				    valeur = Number(valeur);
			    } else if (valeur.length === 3) {
			        var roundNumber = Number(valeur[1]) +1;
			        var roundStr = roundNumber.toString();
			        var valeurTemp = "-" + roundStr + "0";
			        valeur = Number(valeurTemp);
		   		} else if (valeur.length === 4) {
			        roundNumber = Number(valeur[1]) +1;
			        roundStr = roundNumber.toString();
			        valeurTemp = "-" + roundStr + "00";
			        valeur = Number(valeurTemp);
				} else if (valeur.length === 5) {
			        roundNumber = Number(valeur[1]) +1;
			        roundStr = roundNumber.toString();
			        valeurTemp = "-" + roundStr + "000";
			        valeur = Number(valeurTemp);
		    	}
			} else if (valeur[1] === "." || valeur[2] === ".") {
		        var lastNumber = Number(valeur.charAt(valeur.length - 1))
		        valeur = valeur.replace(lastNumber, (lastNumber - 1));
		        valeur = Number(valeur);
		    } else if (valeur.length === 1) {
		    	valeur = Number(valeur) -1;
		    } else if (valeur.length === 2) {
		        var roundNumber = Number(valeur[0]) -1;
		        var roundStr = roundNumber.toString();
		        var valeurTemp = roundStr + "0";
		        valeur = Number(valeurTemp);
		   	} else if (valeur.length === 3) {
		        roundNumber = Number(valeur[0]) -1;
		        roundStr = roundNumber.toString();
		       	valeurTemp = roundStr + "00";
		        valeur = Number(valeurTemp);
			} else if (valeur.length === 4) {
		        roundNumber = Number(valeur[0]) -1;
		        roundStr = roundNumber.toString();
		        valeurTemp = roundStr + "000";
		        valeur = Number(valeurTemp);
		    }
		}
    	
    } else {return 0;}
return valeur;
}
console.log(magicFunction(0,"inc"));