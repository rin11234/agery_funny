let menubar = document.querySelector('#menu-bars')
let mynav = document.querySelector(".navbar")

let userform = document.querySelector("#user-form")
let myform = document.querySelector(".search-form")



menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}

userform.onclick = () =>{
    myform.classList.toggle('active')
}