//Animation de chargement
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
        document.getElementById("loader")
        document.getElementById("content")
        // Ajoute une classe pour déclencher le fondu de sortie
        loader.classList.add("fade-out");
  
        // Retarde l'affichage du contenu pour un fondu d'entrée fluide
        setTimeout(() => {
            loader.style.display = "none";
            content.style.display = "block";
            content.classList.add("fade-in");
        }, 1000); // Durée du fondu de sortie (ajustable si besoin)
    });
  });
  
  
  //Animation des phrases
  const phrases = [
      "Suivi des stocks et alertes sur les produits bas",
      "Gestion des commandes et des fournisseurs",
      "Interface utilisateur sécurisée avec rôles",
      "Rapports détaillés sur les ventes"
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