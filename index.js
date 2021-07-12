/* hover to make sound */
const pikachu = document.querySelector(".pikachu");
const audio = document.getElementsByTagName("audio");

pikachu.addEventListener("mouseenter", function () {
  audio[0].play();
  this.classList.add("move-arms");
});

pikachu.addEventListener("mouseleave", function () {
  this.classList.remove("move-arms");
});
