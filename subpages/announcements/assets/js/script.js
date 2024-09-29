/*============== ANNOUNCEMENTS ==============*/
const contentElements = document.querySelectorAll(".content-description");

contentElements.forEach((element) => {
  const originalText = element.innerText;

  const limitedText =
    originalText.length > 90
      ? originalText.substring(0, 80) + "..."
      : originalText;

  element.innerText = limitedText;
});
