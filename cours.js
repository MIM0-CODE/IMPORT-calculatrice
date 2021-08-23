let x = 5;
let y = 4;


 // sert à afficher une boite de dialogue pour écrire qqchose
x = parseInt(prompt("entrer un nombre", x/*par défaut X*/), 10);//prompt= designe une info a récuperer

console.log(x) 
/*PARSEINT=transforme en nb entier le résultat du prompt qui est en string*/
y = parseInt(prompt("entrer un nombre", y), 10);
console.log(y)

operateur/*recupère la saisie*/ = prompt("entrez votre operation (+,-,*,/,%) ", "+")
//permet de récuperer l'opérateur
console.log(operateur)

switch (operateur) {
    case "+":
        resultat = x + y;
        break;
    case "-":
        resultat = x - y;
        break;
    case "*":
        resultat = x * y;
        break;
    case "/":
        if (y == 0) {
            alert("operation impossible")
        }
        else {
            resultat = x / y;
        }
        break;
    case "%":
        if (y == 0) {
            alert("operation impossible")
        }
        else {
            resultat = x / y;
        }
        break;
}
console.log(resultat) //affiche le résultat dans la console