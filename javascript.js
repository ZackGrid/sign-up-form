const backgroundImage = document.querySelector(".back-img");
const mql = window.matchMedia('(max-width: 1000px)');

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    backgroundImage.src="images/phone-CUT-jase-bloor-oCZHIa1D4EU-unsplash.jpg"
  } else {
    /* the viewport is more than 600 pixels wide */
    backgroundImage.src="images/CUT-jase-bloor-oCZHIa1D4EU-unsplash.jpg"
  }
}

mql.addEventListener('change', screenTest);
