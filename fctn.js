function toggleDetails() {
  const x = button.nextElementSibling;
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// document.getElementById("header").innerHTML =

//     "<div class='container'>"

//     + "<div class='all'>"
//             + "<button onclick='location.href = `accueil.html`;'> Accueil </button>"
//             + "<button onclick='location.href = `projets.html`;'> Projets </button>"
//             + "<button onclick='location.href = `contacts.html` ;'> Contacts CV </button>"
//         + "</div>"
     
//     + "</div>"
//     + "<hr class = 'hrHeader' />"
// ;