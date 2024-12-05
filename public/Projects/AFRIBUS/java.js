// Animation de chargement
document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    window.addEventListener("load", function () {
        if (loader && content) {
            // Ajoute une classe pour déclencher le fondu de sortie
            loader.classList.add("fade-out");

            // Retarde l'affichage du contenu pour un fondu d'entrée fluide
            setTimeout(() => {
                loader.style.display = "none";
                content.style.display = "block";
                content.classList.add("fade-in");
            }, 1000); // Durée du fondu de sortie (ajustable si besoin)
        } else {
            console.error("Les éléments #loader ou #content sont introuvables dans le DOM.");
        }
    });
});

// Animation des phrases
const phrases = [
    "Réservation depuis son téléphone...",
    "Ou tout autre appareil électronique...",
    "Paiements rapide et securisées...",
    "Possibilités multiples sur les choix et actualité du voyage...",
    "Tout est fait pour maximiser l'experience utilisateur"
];
let i = 0, j = 0;
function typeEffect() {
    let currentPhrase = phrases[i];
    document.getElementById('dynamic-text').textContent = currentPhrase.slice(0, ++j);
    if (j === currentPhrase.length) {
        i = (i + 1) % phrases.length;
        j = 0;
        setTimeout(typeEffect, 1000); // Pause avant de changer de phrase
    } else {
        setTimeout(typeEffect, 100);
    }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Charger Vibrant.js pour les couleurs dynamiques
document.addEventListener("DOMContentLoaded", function () {
    const imgPath = 'assets/images/afribusback.png'; // Chemin de l'image
    const img = new Image();
    img.src = imgPath;

    img.onload = function () {
        Vibrant.from(img).getPalette()
            .then((palette) => {
                console.log('Palette détectée :', palette);

                // Couleurs récupérées de l'image
                const color1 = palette.Vibrant ? palette.Vibrant.hex : '#4bffd2';
                const color2 = palette.DarkVibrant ? palette.DarkVibrant.hex : '#005006';

                console.log('Couleurs choisies :', color1, color2);

                // Application du dégradé sur le corps entier
                document.body.style.background = `
                    linear-gradient(
                        to bottom, 
                        ${color1} 0%, 
                        ${color2} 60%, 
                        #000000 100%
                    )`;
                document.body.style.backgroundAttachment = "fixed"; // Fixer le dégradé
            })
            .catch((error) => {
                console.error('Erreur avec Vibrant.js :', error);
            });
    };

    img.onerror = function () {
        console.error("Erreur de chargement de l'image");
    };
});

