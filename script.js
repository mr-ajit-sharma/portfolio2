const menubar=document.querySelector('#menu')

const navbar=document.querySelector('.navbar')
menubar.onClick=()=>{
    menubar.classList.toggle('bx-x');
    navbar.classList.toggle('active')
    console.log("some click")
}