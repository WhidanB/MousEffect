// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
// const cursor = document.getElementById("cursor");
// const rond2 = document.getElementById("mouse1");
// const rond3 = document.getElementById("mouse2");

// window.addEventListener("mousemove", (e) => {
//   cursor.style.left = e.x + "px";
//   cursor.style.top = e.y + "px";
//   rond2.style.left = e.x + "px";
//   rond2.style.top = e.y + "px";
//   rond3.style.left = e.x + "px";
//   rond3.style.top = e.y + "px";
// });

const ronds = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  ronds.forEach((rond) => {
    rond.style.left = e.x + "px";
    rond.style.top = e.y + "px";
  });
});
