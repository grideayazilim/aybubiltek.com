    function changeImage() {
        var bgImage = document.getElementsByClassName('bg-img')[0];
        if (window.innerWidth <= 1100) {
            console.log(window.innerWidth);
            bgImage.src = "../../../assets/media/bg-logo-dik.png"; 
        } else {
            bgImage.src = "../../../assets/media/bg-logo.png";
        }
    }
    window.onload = changeImage;
    window.onresize = changeImage;
