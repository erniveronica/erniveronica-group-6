// DARKMODE
const darkButton = document.querySelector('.darkmode-button')

darkButton.addEventListener('click', ()=>{
  document.body.classList.toggle('darkmode')
  if(darkButton.innerText == 'Darkmode'){
    darkButton.innerText = 'Lightmode'
  }
  else{
    darkButton.innerText = 'Darkmode'
  }
})

// HAMBURGER 
const ham = document.querySelector('.hamburger')
const navMenu = document.querySelector('.navbar')

ham.addEventListener('click', ()=>{
    navMenu.classList.toggle("active")
})

const items = document.querySelectorAll('.nav-item')

items.forEach(item =>{
  item.addEventListener('click', ()=>{
    navMenu.classList.remove("active")
})
})

// SCROOL UP
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
  b;
}
window.addEventListener("scroll", scrollUp);
