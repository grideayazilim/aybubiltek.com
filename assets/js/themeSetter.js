// NOTE: Theme button script is on home-page's js!!

const biltekTheme = localStorage.getItem("biltekTheme");
if (biltekTheme) {
  document.body.classList[biltekTheme === "dark" ? "add" : "remove"](
    "darkTheme"
  );
}