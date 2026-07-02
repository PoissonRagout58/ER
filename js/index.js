const affichage = document.getElementById("count");
const bouton = document.getElementById("Ajouter");
const buttonSupprimer = document.getElementById("Supprimer");
let scoreSauvegarde = localStorage.getItem("monScore");

let score = scoreSauvegarde ? parseInt(scoreSauvegarde) : 0;


affichage.textContent = score;

bouton.addEventListener("click", () => {
    score++;
    affichage.textContent = score;

 
    localStorage.setItem("monScore", score);
    
});

buttonSupprimer.addEventListener("click", () => {
    score--;
    affichage.textContent = score;
    localStorage.setItem("monScore", score);
});