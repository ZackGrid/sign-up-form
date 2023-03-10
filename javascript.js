
const backgroundImage = document.querySelector(".back-img");
const mql = window.matchMedia('(max-width: 1000px)');

//check width of page for adapting
function screenTest(e) {
  if (e.matches) {
    /* the viewport is 1000 pixels wide or less */
    backgroundImage.src="images/phone-CUT-jase-bloor-oCZHIa1D4EU-unsplash.jpg"
  } else {
    /* the viewport is more than 1000 pixels wide */
    backgroundImage.src="images/CUT-jase-bloor-oCZHIa1D4EU-unsplash.jpg"
  }
}

function checkScreen() {
    if (mql.matches) {
        backgroundImage.src="images/phone-CUT-jase-bloor-oCZHIa1D4EU-unsplash.jpg"
    }
}

checkScreen(); 

mql.addEventListener('change', screenTest);

//verify if password match
const check = function() {
    if (document.getElementById('password').value ==
        document.getElementById('confirm-pwd').value) {
        document.getElementById('confirm-pwd').style.border = "1px solid green";
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'Yay password is matching';
    } else {
        document.getElementById('confirm-pwd').style.border = "1px solid red";
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'password not matching';
    }
  }