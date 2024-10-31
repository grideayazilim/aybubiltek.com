Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

/* =============== FILL PAGE =============== */
fetch("assets/data/images.json")
    .then((response) => response.json())
    .then((photoBlocks) => {
      let photosContainer = document.querySelector(".photos-container");

      // The latest photos will be shown first
      let reversedBlocks = photoBlocks.reverse();

      reversedBlocks.forEach(photoBlock => {
        // Create the 'template' in the HTML
        const newBlock = document.createElement("div");

        const miniPhotosContainer = document.createElement("div");
        miniPhotosContainer.classList.add = "mini-photos-container";

        newBlock.innerHTML += `<div class="big-title section-title">${photoBlock.year}</div>`;
        newBlock.appendChild(miniPhotosContainer);

        photoBlock.photos.forEach(photo => {
          miniPhotosContainer.innerHTML += `
          <a
            class="photo"
            href="${photo.src}"
            data-fancybox="gallery"
            data-caption="${photo.caption}"
          >
            <img src="${photo.src}" width="19%" alt="biltek fotosu"/>
          </a>`;
        });

        photosContainer.appendChild(newBlock);

        // Animate after fetching
        sr.reveal(`.section-title`, { delay: 400 });
        sr.reveal(`.photo`, { delay: 400, interval: 10});
      });
    })
    .catch((error) => {
      console.error("Error loading images data:", error);
    });

/* =============== SCROLL REVEAL ANIMATION =============== */
sr.reveal(`.title-area`);
sr.reveal(`.first-photo`, { delay: 300 });