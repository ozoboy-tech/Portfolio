
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


//affichage de la modale pour le cv
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
  
  //Affichage de la modale pour le formulaire de contact dans le footer
  document.addEventListener("DOMContentLoaded", function () {
    // Ouvrir la modale de contact
    const contactFormLink = document.getElementById("contact-form-link");
    const contactModal = document.getElementById("contact-modal");
    const closeModal = document.querySelector(".modal .close");
  
    contactFormLink.addEventListener("click", function (e) {
      e.preventDefault();
      contactModal.style.display = "flex";
    });
  
    // Fermer la modale
    closeModal.addEventListener("click", function () {
      contactModal.style.display = "none";
    });
  
    // Fermer la modale en cliquant en dehors du contenu
    window.addEventListener("click", function (e) {
      if (e.target == contactModal) {
        contactModal.style.display = "none";
      }
    });
  });
  

// Récupération du bouton de bascule de thème
const themeToggle = document.getElementById("theme-toggle");

// Fonction pour basculer entre les modes et ajuster l'icône
themeToggle.addEventListener("click", function() {
  document.body.classList.toggle("light-mode");

  // Changer l'icône du bouton et l'image d'arrière-plan en fonction du mode
  if (document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "🌞"; // Icône soleil pour le mode clair
    document.getElementById("intro").style.backgroundImage = "url('ASSETS/images/Ousmane_avecfondwhite.svg')";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "🌜"; // Icône lune pour le mode sombre
    document.getElementById("intro").style.backgroundImage = "url('ASSETS/images/Ousmane_avecfond.svg')";
    localStorage.setItem("theme", "dark");
  }
});

// Maintenir le mode choisi par l'utilisateur même après un rechargement
window.addEventListener("load", function() {
  const theme = localStorage.getItem("theme");

  if (theme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "🌞"; // Icône soleil pour le mode clair
    document.getElementById("intro").style.backgroundImage = "url('ASSETS/images/Ousmane_avecfondwhite.svg')";
  } else {
    themeToggle.textContent = "🌜"; // Icône lune pour le mode sombre
    document.getElementById("intro").style.backgroundImage = "url('ASSETS/images/Ousmane_avecfond.svg')";
  }
});


//Script pour l'envoie de mail par smtp
// Écouter l'événement de soumission du formulaire
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  Email.send({
    Host: "smtp.gmail.com",
    Username: "ousmaneacoulibaly667@gmail.com",
    Password: "rosh miyr ldqm scjr",  // Remplacez par le mot de passe d'application
    To: 'ousmaneacoulibaly667@gmail.com',
    From: email,
    Subject: `Message de ${name} via Portfolio`,
    Body: `Nom: ${name} <br> Email: ${email} <br> Message: <br> ${message}`
  }).then(
    message => alert("Email envoyé avec succès !")
  ).catch(
    error => alert("Erreur lors de l'envoi de l'email : " + error)
  );
});
