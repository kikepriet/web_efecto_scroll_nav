// listener para comprobar que el 

var mediaquery = window.matchMedia("(max-width: 600px)"),
        content = document.querySelector(".content");

    function handleOrientationChange(mediaquery) {
      if (mediaquery.matches) {
        //content.innerHTML = "mediaquery dentro de 600px";
        document.getElementById("img1").classList.add('order-1');
        document.getElementById("img1a").classList.add('order-12');
        document.getElementById("img3").classList.add('order-1');
        document.getElementById("img3a").classList.add('order-12');
      } else {
        //content.innerHTML = "mediaquery fuera de 600px";
        document.getElementById("img1").classList.remove('order-1');
        document.getElementById("img1a").classList.remove('order-12');
        document.getElementById("img3").classList.remove('order-1');
        document.getElementById("img3a").classList.remove('order-12');
      }
    }
    handleOrientationChange(mediaquery);
    mediaquery.addListener(handleOrientationChange);