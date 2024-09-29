const links = document.querySelectorAll(".aa-link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    // Set aaType depending on which type the link belongs to
    if (link.classList.contains("announcement-link"))
      localStorage.setItem("aaType", "announcement");
    else if (link.classList.contains("article-link"))
      localStorage.setItem("aaType", "article");

    // Set the id of the article/announcement
    localStorage.setItem("aaId", link.id);
  });
});