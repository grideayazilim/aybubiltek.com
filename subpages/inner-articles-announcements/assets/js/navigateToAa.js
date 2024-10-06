/*============== NAVIGATE TO INNER AA ==============*/
function navigateAa(link, linkId) {
    // Set aaType depending on which type the link belongs to
    if (link.classList.contains("announcement-link"))
      localStorage.setItem("aaType", "announcement");
    else if (link.classList.contains("article-link"))
      localStorage.setItem("aaType", "article");
  
    // Set the id of the article/announcement
    localStorage.setItem("aaId", linkId);
  }