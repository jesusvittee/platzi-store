const darkHtml = document.querySelector("html");

const moonButtonSm =  document.querySelector('#moon-sm');
const moonButton = document.querySelector('#moon');

moonButton.addEventListener('click', toggleMoonButton)
moonButtonSm.addEventListener('click', toggleMoonButton)


function toggleMoonButton () {
    darkHtml.classList.toggle('dark');
}