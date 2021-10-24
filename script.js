let head = document.querySelector('header .container nav .navbar-nav');
let munu = document.querySelector('.menu');



//  munu.onclick = function() {

//   head.style.display = 'block';

//  }

// munu.addEventListener('click', (e) => {


//     head.style.display = 'none';
// });
munu.addEventListener('click', (e) => {

    head.classList.toggle('plan')
        // head.classList.add("plan");

});