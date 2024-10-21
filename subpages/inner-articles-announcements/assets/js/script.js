/* =============== SCROLL REVEAL ANIMATION =============== */
sr.reveal(`.title-area`);
sr.reveal(`.left-box, .right-box`, { delay: 700, interval: 700 });

/*============== SWITCH ANNOUNCEMENT-ARTICLES ==============*/
/*
  This page is originally an article template. Content of the page
  is transforming into announcement page according to which type of
  page is going to be chosen.

  'aa' words in the variables mean 'announcement-article'
*/
function switchContents() {
  const aaType = localStorage.getItem("aaType");

  // Elements that are going to be adjusted
  const mainTitle = document.querySelector(".bigger-title");
  const authorParent = document.querySelector(".left-box > .content");
  const author = document.querySelector(".author");
  const announcementDate = document.querySelector(".announcement-date");
  const othersTitle = document.querySelector(".right-box > .subtitle");

  // Change the content into announcement
  if (aaType === "announcement") {
    mainTitle.textContent = "DUYURU";
    authorParent.style.gridTemplateColumns = "1fr";
    author.style.display = "none";
    announcementDate.style.display = "block";
    othersTitle.textContent = "Diğer Duyurular";
  }
}

/*============== FILL PAGE ==============*/
async function fillPage() {
  const aaType = localStorage.getItem("aaType");
  const aaId = localStorage.getItem("aaId");

  // Properties to set
  const aaSubtitle = document.querySelector(".aa-subtitle"); // both
  const authorLogo = document.querySelector(".author > .logo"); // article
  const authorName = document.querySelector(".author > .name"); // article
  const articleDate = document.querySelector(".article-date"); // article
  const announcementDate = document.querySelector(".announcement-date"); // announcement
  const aaText = document.querySelector(".aa-text"); // both
  const othersParent = document.querySelector(".others");

  // Access the appropriate json file and fill the page based on which file it is
  /*======== ARTICLE PART ========*/
  if (aaType === "article") {
    // Get the proper article from json file
    const response = await fetch("assets/data/articles.json");
    const articles = await response.json();
    const selectedArticle = articles.find((article) => article.id === aaId);

    // Fill the content
    document.title = selectedArticle.title;
    aaSubtitle.textContent = selectedArticle.title;
    authorLogo.src = selectedArticle.authorLogo;
    authorName.textContent = selectedArticle.authorName;
    articleDate.textContent = selectedArticle.date;
    aaText.textContent = selectedArticle.articleItself;

    // Add each 'other' article item with 'id'
    let idCount = 1;
    articles.forEach((article) => {
      if (idCount < 9) {
        othersParent.innerHTML += `
        <a
          href="index.html"
          class="item article-link aa-link"
          onclick="navigateAa(this, ${idCount})"
        >
          <img src="${article.authorLogo}" alt="Yazar takım logosu" />
          <div class="title">${article.title}</div>
        </a>
      `;

        idCount++;
      }
    });
  } else if (aaType === "announcement") {
    /*======== ARTICLE PART ========*/
    // Get the proper announcement from json file
    const response = await fetch("assets/data/announcements.json");
    const announcements = await response.json();
    const selectedAnnouncement = announcements.find(
      (announcement) => announcement.id === aaId
    );

    // Fill the page
    document.title = selectedAnnouncement.title;
    aaSubtitle.textContent = selectedAnnouncement.title;
    announcementDate.textContent = selectedAnnouncement.date;
    aaText.textContent = selectedAnnouncement.announcementItself;

    // Add each 'other' announcement item with 'id'
    let idCount = 1;
    announcements.forEach((announcement) => {
      if (idCount < 9) {
        othersParent.innerHTML += `
        <a
          href="index.html"
          class="item announcement-link aa-link"
          onclick="navigateAa(this, ${idCount})"
        >
          <img src="assets/media/bmw-logo.png" alt="" />
          <div class="title">${announcement.title}</div>
        </a>
        `;

        idCount++;
      }
    });
  }
}

switchContents();
fillPage();
