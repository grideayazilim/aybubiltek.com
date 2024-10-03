/*============== FILL PAGE ==============*/
async function fillPage() {
  const response = await fetch(
    "../inner-articles-announcements/assets/data/articles.json"
  );
  const articles = await response.json();
  const articlesContainer = document.querySelector(".articles");

  let idCount = 1;
  articles.forEach((article) => {
    articlesContainer.innerHTML += `
        <a
          href="../inner-articles-announcements/index.html"
          class="content-box aa-link article-link"
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
}

fillPage();