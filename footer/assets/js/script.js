/*============== FOOTER ==============*/

//"Biltek'li Ol" button.
const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  button.classList.add("animate");

  setTimeout(() => {
    button.classList.remove("animate");
  }, 400);
});

function goPageTime() {
  setTimeout(() => window.alert("wdqwe"), 500);
}
