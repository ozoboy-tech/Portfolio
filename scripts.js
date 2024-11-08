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
    "Développeur Web",
    "Passionné de Cybersécurité",
    "Créateur d'idées",
    "Transformer les idées en réalité...",
    "Construisons ensemble quelque chose d'incroyable...",
    "Créer des expériences utilisateur fluides..."
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

//intro sur chaque section
const sections = document.querySelectorAll("section");
const options = {
  threshold: 0.1,
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});


/*//affichage de la modale pour le cv
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("cv-modal");
    const viewCVButton = document.getElementById("view-cv-button");
    const closeButton = document.querySelector(".close");
  
    viewCVButton.onclick = function() {
      modal.style.display = "flex";
    }
  
    closeButton.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  });
  */
  //Affichage de la modale pour le formulaire de contact dans le footer
  document.addEventListener("DOMContentLoaded", function () {
    // Ouvrir la modale de contact
    const contactFormLink = document.getElementById("contact-form-link");
    const contactModal = document.getElementById("contact-modal");
    const closeModal = document.querySelector(".modalold .closeold");
  
    if (contactFormLink && contactModal && closeModal) {
      contactFormLink.addEventListener("click", function (e) {
        e.preventDefault();
        contactModal.style.display = "flex";
      });
  
      // Fermer la modale en cliquant sur le bouton de fermeture
      closeModal.addEventListener("click", function () {
        contactModal.style.display = "none";
      });
  
      // Fermer la modale en cliquant en dehors du contenu
      window.addEventListener("click", function (e) {
        if (e.target === contactModal) {
          contactModal.style.display = "none";
        }
      });
    }
  });
  
  
/*
// Récupération du bouton de bascule de thème
const themeToggle = document.getElementById("theme-toggle");

// Fonction pour basculer entre les modes et ajuster l'icône
themeToggle.addEventListener("click", function() {
  document.body.classList.toggle("light-mode");

  // Changer l'icône du bouton et l'image d'arrière-plan en fonction du mode
  if (document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "🌞"; // Icône soleil pour le mode clair
    document.getElementById("intro").style.backgroundImage = "url('public/assets/images/Ousmane_avecfondwhite.svg')";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "🌜"; // Icône lune pour le mode sombre
    document.getElementById("intro").style.backgroundImage = "url('public/assets/images/Ousmane_avecfond.svg')";
    localStorage.setItem("theme", "dark");
  }
});

// Maintenir le mode choisi par l'utilisateur même après un rechargement
window.addEventListener("load", function() {
  const theme = localStorage.getItem("theme");

  if (theme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "🌞"; // Icône soleil pour le mode clair
    document.getElementById("intro").style.backgroundImage = "url('public/assets/images/Ousmane_avecfondwhite.svg')";
  } else {
    themeToggle.textContent = "🌜"; // Icône lune pour le mode sombre
    document.getElementById("intro").style.backgroundImage = "url('public/assets/images/Ousmane_avecfond.svg')";
  }
});
*/

//Script pour l'envoie de mail par smtpjs
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const userEmail = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  Email.send({
    Host: "smtp.mail.yahoo.com",
    Username: "ousmanecoulibaly9@yahoo.com",             // Votre adresse Yahoo
    Password: "votre_mot_de_passe_d_application",    // Mot de passe d'application Yahoo
    To: "ousmanecoulibaly9@yahoo.com",                   // Votre adresse email pour recevoir le message
    From: userEmail,                                 // L'email de l'utilisateur pour le champ "De"
    Subject: `Message de ${name} depuis le portfolio`, // Sujet de l'email
    Body: `Nom: ${name} <br> Email: ${userEmail} <br> Message: <br> ${message}`,  // Corps du message avec les détails
    ReplyTo: userEmail                               // Permet de répondre directement à l'utilisateur
  }).then(
    message => alert("Votre message a été envoyé avec succès !")
  ).catch(
    error => alert("Erreur lors de l'envoi du message : " + error)
  );
});

