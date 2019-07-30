const menuButtonSelector = document.querySelector('.mobile-header');

const mobileBodySelector = document.querySelector('.call-to-action');
const dropDownSelector = document.querySelector('.dropdown');
const dropDownItemSelector = document.querySelectorAll('.dropdown-item')

function menuVisibility () {
    document.querySelector('.mobile-header').classList.toggle("show")
}

menuButtonSelector.addEventListener('click', () => {
    console.log('clicked menu')
    menuButtonSelector.classList.toggle("drop-body")
    dropDownSelector.classList.toggle("dropdown-down");
    dropDownItemSelector[0].classList.toggle("dropdown-items-down");
    dropDownItemSelector[1].classList.toggle("dropdown-items-down");
    dropDownItemSelector[2].classList.toggle("dropdown-items-down");
    dropDownItemSelector[3].classList.toggle("dropdown-items-down");
    event.stopPropagation();
});