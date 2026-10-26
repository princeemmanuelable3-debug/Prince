const card = document.querySelector('.div-card')
const btn = document.getElementById('btn')

window.addEventListener('DOMContentLoaded', () => {
    card.classList.add('Emmanuel')
    btn.addEventListener('click', () =>{
        btn.innerHTML = "Quête Lancé"
        card.style.background = "radial-gradient(circle at top left, black, white)";
        card.style.transition = "1s ease-in-out"
    });
});