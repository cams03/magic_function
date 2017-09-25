var number = 0;
var increase
function magic_inc(valeur, inc) {
  number = valeur;
  increase = inc;
  increase = function() {
      if (number[0] === 0) {
        number = number + 0.1;
      }
  }
return number;
}
console.log(magic_inc(0.1,increase));
