let indiceSlide = 1;
mostrarSlides(indiceSlide);

// Para correr los slides
function plusSlides(n) {
  mostrarSlides(indiceSlide += n);
}

// Slide actual
function currentSlide(n) {
  mostrarSlides(indiceSlide = n);
}

function mostrarSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let puntos = document.getElementsByClassName("punto");
  if (n > slides.length) {indiceSlide = 1}
  if (n < 1) {indiceSlide = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < puntos.length; i++) {
    puntos[i].className = puntos[i].className.replace(" active", "");
  }
  slides[indiceSlide-1].style.display = "block";
  puntos[indiceSlide-1].className += " active";
}

//imprimir la pantalla o curriculum vitae entero
function imprimir(){
    window.print();  //imprimimos la ventana
}

