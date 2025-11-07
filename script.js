const menuBtn = document.getElementById('menu-btn')
const navLinks = document.getElementById('nav-links')
const cards = document.querySelectorAll(".testimonal-card")
const dotsContainer = document.getElementById("dots")

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});


let currentIndex = 0

cards.forEach((_, idx) => {
    const dot = document.createElement('span')
    dot.addEventListener('click', () => showSlide(idx))
    dotsContainer.appendChild(dot)
})

const dots = document.querySelectorAll(".dots span")
function showSlide(index) {
    cards.forEach(card => card.classList.remove('active'))
    dots.forEach(dot => dot.classList.remove("active"))
    cards[index].classList.add("active")
    dots[index].classList.add("active")
    currentIndex = index;
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    showSlide(currentIndex)
}

showSlide(currentIndex);
setInterval(autoSlide, 4000)

