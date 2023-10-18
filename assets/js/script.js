console.log("ça code c'est bon !")

// liste des lettres de l'alphabet
let arrayLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// variable pour inserer les lettres
let arraySaisies = [];

//declaration des variables
let motSecret = "SABRI";
let nbrVie = 7;
let gameOver = false;  // true si gagné
let valeurBouton = "";
let lettreTrouve=false;
let champLettre =[];
let lettreRestante = motSecret.length;  // variable test pour la console n'influt en rien sur le fonctionnement


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

// creer div pour integrer le motSecret enfant de section
let divP = document.createElement("div");
divP.classList.add("divP");
section.appendChild(divP);

// création des boutons alphabet 
for (let i = 0; i < arrayLetters.length; i++) {  
    let bouton = document.createElement("button");
    bouton.innerText = arrayLetters[i];
    clavier.appendChild(bouton);
}

// je créer une boucle pour afficher le nombre de champs de mon motSecret
for (let i = 0; i < motSecret.length; i++) {
    champLettre[i] = "_";  
 }
 console.log(champLettre);

// la variable mesBoutons récupere tout les boutons
let mesBoutons = document.querySelectorAll("button"); 
mesBoutons.forEach(unBouton => {  // dans tous les boutons récupère la valeur de chaque bouton cliqué
    unBouton.addEventListener("click", () => {  // attache une fonction à appeler chaque fois que l'évènement spécifié est envoyé à la cible.
        unBouton.setAttribute("disabled", ""); // une fois le bouton cliqué ne se réutilise plus
        // document.querySelectorAll(".affichage").innerText += unBouton.innerText; 
        arraySaisies.push(unBouton.innerText);// envoi la valeur saisie par le bouton dans arraySaisies
        console.log("Vous avez cliqué sur : ", unBouton.innerText);      
        valeurBouton = unBouton.innerText; // sert a tester les boutons avec la console n'impacte en rien le jeux
        console.log("test valeur bouton : "+ valeurBouton); // affiche le test dans la console
        boutonCliquer(valeurBouton); // sert a tester les boutons avec la console n'impacte en rien le jeux
       console.log(arraySaisies); // affiche le test dans la console
    })
})

// // condition pour que la lettre du bouton appuyé soit la meme que l'une des lettres du motSecret
function boutonCliquer(valeurBouton,champLettre) {
    
    for (let index = 0; index < motSecret.length; index++) {
        if (motSecret[index].includes(valeurBouton)) {
         lettreRestante--; 
         console.log("lettres restantes : " + lettreRestante); 
        }
       

    }  
}
//         lettreTrouve=true;
//         console.log(lettreTrouve);
//         break;
    
//       } 
//       else{
//         lettreTrouve = false;
//         console.log(lettreTrouve);  
//       }

//     }
//    decompte=decompte-1;
//    console.log(decompte);
// }



    
   


 