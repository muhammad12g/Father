let images = document.querySelector('#user')
let header = document.querySelector('header')
let section = document.querySelector('section')
let x = document.querySelector('.x')
let items = document.querySelector('.items')
let items1 = document.querySelector('.items1')
let items2 = document.querySelector('.items2')
let items3 = document.querySelector('.items3')
let users = document.querySelector('.users')
let co = document.querySelector('#container')
let ho = document.querySelector('#home')
let fat = document.querySelector('.father')
let body = document.querySelector('body')
let inp = document.querySelector('input')
let btn = document.querySelector('.btn')

images.addEventListener('click', () => {
    header.style.width = "100%";
    header.style.marginLeft = "0";
    section.style.opacity = "0";
    header.style.transition = "1s";
    items.style.opacity = "1";
    items1.style.opacity = "1";
    items2.style.opacity = "1";
    items3.style.opacity = "1";
    header.style.zIndex = "1111111111111111111111111111111111111111";
})
x.addEventListener('click', ()=> {
    header.style.width ="25%";
    section.style.opacity ="1";
    header.style.marginLeft ="1000px";
    items.style.opacity = "0";
    items1.style.opacity = "0";
    items2.style.opacity = "0";
    items3.style.opacity = "0";
})

users.addEventListener('click', () => {
   co.style.left = "2%";
   fat.style.opacity = '0';
   co.style.zIndex = "11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112222";
})
btn.addEventListener('click', ()=> {
    co.style.backgroundColor = inp.value;
})
co.addEventListener("click", ()=> {
    co.style.marginLeft = "101%"
    fat.style.opacity = "1";
})
ho.addEventListener('click', () => {
    header.style.marginLeft = "101%";
    header.style.transition = ".3s";
})