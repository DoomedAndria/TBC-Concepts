import {createHeader} from "./components/header.js";
import {createFooter} from "./components/footer.js";
import {Main} from "./main.js";


document.getElementById('header').innerHTML = createHeader()
document.getElementById('footer').innerHTML = createFooter()
document.getElementById('main').innerHTML = Main()



//hamburger button click event in header section
const hamburger = document.querySelector('#hamburger')
const overlay = document.querySelector('.header-overlay')
const header = document.querySelector('.header')
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  overlay.classList.toggle('active')
  header.classList.toggle('active')
})


//click events for header menu button
const buttons = document.querySelectorAll('.header-dropdown');
const bg = document.querySelector('.header-dropdown-bg');

buttons.forEach(button => {
  button.addEventListener('click', () => {

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


//click events for header menu mobile dropdowns
const mobile_buttons = document.querySelectorAll('.header-mobile-dropdown')
mobile_buttons.forEach(b => {
  b.addEventListener('click', () => {
    mobile_buttons.forEach(b1 => {
      if (b !== b1) {
        b1.classList.remove('active')
      }
    })
    b.classList.toggle('active')
  })
})