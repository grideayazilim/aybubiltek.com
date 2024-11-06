/*============== FILL PAGE ==============*/
async function fillPage() {
  fetch("../inner-articles-announcements/assets/data/articles.json")
    .then((response) => response.json())
    .then((articles) => {
      const articlesContainer = document.querySelector(".articles");

      let idCount = 1;
      articles.forEach((article) => {
        console.log(articlesContainer);

        articlesContainer.innerHTML += `
        <a
          href="../inner-articles-announcements/index.html"
          class="content-box aa-link article-link load-hidden"
          onclick="navigateAa(this, '${idCount}')"
        >
          <div class="left-area">
            <div class="date">${article.date}</div>
            <div class="vertical-line"></div>
            <div class="title">
              ${article.title}
            </div>
          </div>

          <div class="right-area">
            <div class="horizontal-line"></div>
            <div class="author">${article.authorName}</div>
          </div>
        </a>`;

        idCount++;
      });

      sr.reveal(`.article-link`, { origin: "left", delay: 300, interval: 300 });
    })
    .catch((error) => {
      const message = document.querySelector(".system-message");
      message.classList.add("error-message");
      message.innerHTML = "Görüntülenecek makale yok. Henüz...";
    });
}

fillPage();

document.addEventListener("DOMContentLoaded", () => {
  sr.reveal(`.title-area`);
  sr.reveal(`.system-message`, { delay: 300 });
});
