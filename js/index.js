// JS Variables

const menuButtonSelector = document.querySelector('.mobile-header');
const mobileBodySelector = document.querySelector('.mobilemove');
const dropDownSelector = document.querySelector('.dropdown');
const dropDownItemSelector = document.querySelectorAll('.dropdown-item')


// Event Listener for Mobile Drop Down Menu on Click

menuButtonSelector.addEventListener('click', () => {
    console.log('clicked menu')
    mobileBodySelector.classList.toggle("drop-body")
    dropDownSelector.classList.toggle("dropdown-down");
    dropDownItemSelector[0].classList.toggle("dropdown-items-down");
    dropDownItemSelector[1].classList.toggle("dropdown-items-down");
    dropDownItemSelector[2].classList.toggle("dropdown-items-down");
    dropDownItemSelector[3].classList.toggle("dropdown-items-down");
    event.stopPropagation();
}, );