import {createHeader} from "./components/header.js";
import {createFooter} from "./components/footer.js";


document.getElementById('header').innerHTML = createHeader()
document.getElementById('footer').innerHTML = createFooter()


//hamburger button click event in header section
const hamburger = document.querySelector('#hamburger')
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
})

//click events for header menu button
const buttons = document.querySelectorAll('.header-dropdown');
const bg = document.querySelector('.header-dropdown-bg');

buttons.forEach(button => {
  button.addEventListener('click', () =>{

    buttons.forEach(b => {
      if (b !== button) {
        b.classList.remove('active');
      }
    });

    button.classList.toggle('active')

    const bgActive = Array.from(buttons).some(button => button.classList.contains('active'));

    bg.classList.toggle('active', bgActive);
  });
});