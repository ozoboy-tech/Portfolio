<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>

  <header>
    <nav>
      <ul>
        <li><a href="#about">MOI</a></li>
        <li><a href="#projects">PROJETS</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#contact">CONTACT</a></li>
        <li><a href="#" id="view-cv-button">Visualiser</a></li>
        <li><a href="ASSETS/images/CV.pdf" download><img src="assets/images/cv-icon.png" alt="Télécharger le CV" class="cv-icon"> Télécharger</a></li>
        
      </ul>
    </nav>
  </header>

  <div id="cv-modal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <img src="assets/images/CV_image.png" alt="CV" class="cv-image">
    </div>
  </div>

  <section id="intro">
    <div class="intro-text">
      <h1>Bienvenue dans mon Portfolio</h1>
      <p id="dynamic-text">Un texte d'introduction dynamique apparaîtra ici...</p>
    </div>
  </section>

  <section id="about">
    <h2><b>MOI</b></h2>
    <p id="moi">
    Je m'appelle <span class="animate" id="ousmane">Ousmane</span>, passionné par le <span class="animate" id="dev-web">développement web</span> et toujours en quête de <span class="animate" id="nouveaux_défis">nouveaux défis</span>.<br> 
    J'aime transformer des idées complexes en solutions web dynamiques, alliant front-end et back-end.<br> 
    Ma maîtrise de langages comme <span class="animate" id="javascript">JavaScript</span>, <span class="animate" id="php">PHP</span>, <span class="animate" id="mysql">MYSQL</span>, 
    <span class="animate" id="html">HTML</span>, <span class="animate" id="css">CSS</span>, etc., me permet de livrer des projets innovants et <span class="animate" id="efficace">efficaces</span>.<br>
    Mon <span class="animate" id="ambition">ambition</span> ? Me surpasser à chaque projet, apprendre en continu et contribuer à un avenir <span class="animate" id="avenir">numérique audacieux</span>.
</p>
  </section>
  <section id="projects">
    <h2>PROJETS</h2>
    <div class="project-grid">
      <div class="project">
        <h3 class="project-title">PharmaGuard</h3>
        <img src="assets/images/PharmaGuard.png" alt="Project 1 Image" loading="lazy">
        <p>Une gestion de pharmacie PharmaGuard est un logiciel qui permet 
          à une pharmacie de pouvoir gérer sa pharmacie entièrement à travers l'application.
          Elle intègre tout ce dont la pharmacie a besoin allant de la gestion des produits, aux ventes,
        à la gestion des stocks, à la gestion des fournisseurs, etc.</p>
      </div>
      <div class="project">
        <h3 class="project-title">Planora</h3>
        <img src="assets/images/Planora.png" alt="Project 2 Image" loading="lazy">
        <p>Planora est calendrier intéractif permettant à l'utilisateur de créer 
          des taches et de pouvoir les déplacer les ajuster les modifier selon sa volonté 
          et tout est intéractif et fluide.</p>
      </div>
      <div class="project">
        <h3 class="project-title">Afribus</h3>
        <img src="assets/images/Afribus.png" alt="Project 3 Image" loading="lazy">
        <p>Afribus est une application qui a vu le jour lors d'un projet de fin de cycle.
          C'est un système de reservation de tickets de bus.
          Pleinement intéractif et fluide elle permet à l'utilisateur de réserver son ticket de bus avec ton téléphone ou son ordinateur portable.
          Il paye sur le site il a la capacité de choisir l'heure, la date et meme le siège de voyage dans le bus.
          Tout est fait pour qu'il n'ait plus à se déplacer pour aller réserver 2 ou 3 heures à l'avance.
        </p>
      </div>
    </div>
</section>
  <section id="skills">
    <h2>SKILLS</h2>
    <div class="skills-grid">
      <div class="skill">HTML</div>
      <div class="skill">CSS</div>
      <div class="skill">JavaScript</div> 
      <div class="skill">PHP</div>
      <div class="skill">REACT</div>
      <div class="skill">MYSQL</div>
    </div>
  </section>
  <footer>
    <p>&copy; 2024 PORTFOLIO</p>
    <p><a href="#" id="contact-form-link">Formulaire de Contact</a></p>
    <nav>
        <a href="#about">À propos</a> |
        <a href="#projects">Projets</a> |
        <a href="#services">Services</a> |
        <a href="#testimonials">Témoignages</a>
    </nav>

    <div class="social-media">
        <a href="https://www.linkedin.com/in/ousmane-alou-coulibaly-077882221/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/ozoboy-tech" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
        <a href="https://www.instagram.com/ozo_vibes_667/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://wa.me/22364031695" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
    </div>
</footer>

  <!-- Formulaire de contact dans une modale cachée -->
  <div id="contact-modal" class="modalold">
    <div class="modal-contentold">
      <span class="closeold">&times;</span>
      <h2>Contactez-moi</h2>
      <form action="send_email.php" method="POST">
        <label for="name">Nom :</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email :</label>
        <input type="email" id="email" name="email" required>
        
        <label for="subject">Sujet :</label>
        <input type="text" id="subject" name="subject" required>
        
        <label for="message">Message :</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        
        <button type="submit">Envoyer</button>
      </form>
    </div>
  </div>
</body>
<script src="scripts.js" defer></script>

</html>
