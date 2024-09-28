 let count = 0;
 const targetCount = 700;
 const increment = 9;
 const speed = 10;

 function updateCounter() {
   if (count < targetCount) {
     count += increment;
     document.getElementById('counter').textContent = count + '+ BİLTEK\'li';
     setTimeout(updateCounter, speed);
   } else {
     document.getElementById('counter').textContent = targetCount +  '+ BİLTEK\'li';
   }
 }

 updateCounter();

 let slideIndex = 0;
 function showSlides() {
   const slides = document.getElementsByClassName("mySlides");
   for (let i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) {
     slideIndex = 1;
   }
   slides[slideIndex - 1].style.display = "block";
   setTimeout(showSlides, 4000); // 3 saniyede bir değiştir
 }

 showSlides();