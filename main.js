let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

if(window.scrollY > 60){
    document.querySelector('#to-top').classList.add('active');
}else{
    document.querySelector('#to-top').classList.remove('active');
}
}
function start(){
document.querySelector('.load').classList.add('fade-out');
}
function fadeOut(){
    setInterval(start, 3000);
}
window.onload = fadeOut