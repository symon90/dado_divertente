const cube = document.querySelector(".cube");
const roll = document.querySelector("#button");

roll.addEventListener("click", function () {
  rotazione();
});

function rotazione() {
  let randomX = Math.floor(Math.random() * 12) + 7;
  let randomY = Math.floor(Math.random() * 12) + 7;
  rotX = randomX * 90;
  rotY = randomY * 90;
  cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(0deg)`;
}
