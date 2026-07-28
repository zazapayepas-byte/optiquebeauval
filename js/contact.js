document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_hbyjrel", "template_p62e0p7", this)
        .then(() => {
          alert("Votre message a bien été envoyé !");
          form.reset();
        })
        .catch((err) => {
          console.log(err);
          alert("Une erreur est survenue, merci de réessayer.");
        });
    });
  } else {
    console.warn("Formulaire #contact-form introuvable.");
  }
});