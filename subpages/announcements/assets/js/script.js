/*============== CUT DESCRIPTION AND TITLE ==============*/
function cutDescription(description) {
  const originalText = description;

  const limitedText =
    originalText.length > 90
      ? originalText.substring(0, 80) + "..."
      : originalText;

  return limitedText;
}

/*============== FILL PAGE ==============*/
async function fillPage() {
  fetch("../inner-articles-announcements/assets/data/announcements.json")
    .then((response) => response.json())
    .then((announcements) => {
      const announcementsContainer = document.querySelector(".announcements");

      let idCount = 1;
      announcements.forEach((announcement) => {
        announcementsContainer.innerHTML += `
        <div class="announcement load-hidden">
          <div class="img-container" id="img-container">
            <img src="${announcement.photo}" alt="duyuru fotoğrafı" />
          </div>

          <div class="content">
            <p class="content-title" id="content-title">
              ${announcement.title}
            </p>
            <p class="content-description" id="content-description">
              ${cutDescription(announcement.announcementItself)}
            </p>
            <div class="info">
              <div class="when">
                <i class="fa-regular fa-clock"></i>
                <p id="date">${announcement.date}</p>
              </div>
              <a
                href="../inner-articles-announcements/index.html"
                class="aa-link announcement-link"
                onclick="navigateAa(this, '${idCount}')"
              >
                Devamı
              </a>
            </div>
          </div>
        </div>`;

        idCount++;
      });

      sr.reveal(`.announcement`, { delay: 300, interval: 300 });
    })
    .catch((error) => {
      const message = document.querySelector(".system-message");
      message.classList.add("error-message");
      message.innerHTML = "Görüntülenecek duyuru yok. Henüz...";
      console.error(error);
    });
}

fillPage();
sr.reveal(`.title-area`);

sr.reveal(`.system-message`, { delay: 300 });