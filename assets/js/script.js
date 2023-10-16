console.log("ça code c'est bon !")

let arrayLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let jeuxPendu = document.createElement("main");
document.body.appendChild(jeuxPendu);

let clavier = document.createElement("div");
clavier.classList.add("clavier");
jeuxPendu.appendChild(clavier);


for (let i = 0; i < arrayLetters.length; i++) {
    let bouton = document.createElement("button");
    bouton.innerText = arrayLetters[i];
    clavier.appendChild(bouton);
}

