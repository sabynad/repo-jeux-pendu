console.log("ça code c'est bon !")

// liste des lettres de l'alphabet
let arrayLetters = ["A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N"];

let motSecret = "sabri";
let tailleMot;
let coupRate = 0;
// let coupReussi = 0;
let decompte = 7;
let gameOver = false;  // true si gagné

let main = document.createElement("main");
document.body.appendChild(main);

let clavier = document.createElement("div");
clavier.classList.add("clavier");
main.appendChild(clavier);

let section = document.createElement("section");
main.appendChild(section);

let potence = document.createElement("div");
potence.classList.add("potence");
section.appendChild(potence);

let divP = document.createElement("div");
divP.classList.add("divP");
section.appendChild(divP);

// let  = document.createElement("div");
// bouton.classList.add("bouton");
// affichage.appendChild(bouton);

// let affichage = document.createElement("div");
// affichage.classList.add("affichage");

// conteneur.appendChild(affichage);


// création des boutons alphabet 
for (let i = 0; i < arrayLetters.length; i++) {
    let bouton = document.createElement("button");
    bouton.innerText = arrayLetters[i];
    clavier.appendChild(bouton);
}

// interaction des lettres avec la console
let arraySaisies = [];
let mesBoutons = document.querySelectorAll("button");
mesBoutons.forEach(unBouton => {
    unBouton.addEventListener("click", function() {
        if (arraySaisies.length == 0) {
            document.querySelectorAll(".affichage").innerText = ""; 
        }
        document.querySelectorAll(".affichage").innerText += unBouton.innerText;
        arraySaisies.push(unBouton.innerText);
        console.log("Vous avez cliqué sur : ", unBouton.innerText);      
    })
})


for (let i = 0; i < motSecret.length; i++) { // creer une boucle pour voir la longueur du mot et voir le nombre de caractere qu'il y a dedans
   
    let affichage = document.createElement("p"); // creer une variable p 
    let nbrLettre = motSecret[i]; // CREER une variable pour récupérer le nombre de lettre que contient le mot secret
    affichage.setAttribute("id",nbrLettre); // creer une id par rapport aux lettres
    affichage.innerText="_"; // creer _ dans l'afichage
    divP.appendChild(affichage); // conteneur parent de affichage
}
