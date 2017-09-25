var test = function (nombre) {
        function decimalAdjust(type, value, exp) {
            // Si la valeur de exp n'est pas définie ou vaut zéro...
            if (typeof exp === 'undefined' || +exp === 0) {
                return Math[type](value);
            }
            value = +value;
            exp = +exp;
            // Si la valeur n'est pas un nombre 
            // ou si exp n'est pas un entier...
            if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
                return NaN;
            }
            // Si la valeur est négative
            if (value < 0) {
                return -decimalAdjust(type, -value, exp);
            }
            // Décalage
            value = value.toString().split('e');
            value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
            // Décalage inversé
            value = value.toString().split('e');
            return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
        }

        // Arrondi décimal inférieur
        if (!Math.floor10) {
            Math.floor10 = function (value, exp) {
                return decimalAdjust('floor', value, exp);
            };
            x = Math.floor(nombre);
            console.log(x);
            valeur = x.toString();
            console.log(valeur);
            if (valeur[1] === "." || valeur[2] === ".") {
                lastIndex = valeur.charAt(valeur.length - 1);
                lastNumber = Number(lastIndex);
                valeur = valeur.replace(lastNumber, (lastNumber + 1));
            } else if (valeur.length === 2) {
                console.log(valeur[0]);
                firstIndex = valeur.charAt(valeur[0]);
                console.log(firstIndex);
                firstNumber = Number(firstIndex);
                console.log(firstNumber);
                increase = firstNumber + 1;
                console.log(increase);
                str = increase.toString();
                console.log(str);
                valeurTemp = str + "0";
                console.log(valeurTemp);
                valeur = Number(valeurTemp);
                /*lastIndex = valeur.charAt(valeur.length - 1);
                console.log(lastIndex)
                lastNumber = Number(lastIndex);
                lastNumber = 0;
                console.log(lastNumber);
                console.log(valeur);
                valeur = valeur.replace(lastNumber, 0) + 10;
                console.log(valeur);
                valeur = */
                //valeur = Number(valeur2) + 10;
            } else if (valeur.length === 3) {
                valeur = Number(valeur) + 100;
            } else if (valeur.length === 4) {
                valeur = Number(valeur) + 1000;
            }
            return valeur;
        }
        console.log(test(12));