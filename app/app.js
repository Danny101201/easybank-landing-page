let header = document.querySelector('header')
let overlay = document.querySelector('.overlay')
let Menu = document.querySelector('.header_Toggle')
let MenuItem = document.querySelector('.header_menu')
Menu.addEventListener('click',function(){
    if(header.classList.contains('open')){
        header.classList.remove('open')
        overlay.classList.remove('fade-in')
        overlay.classList.add('fade-out')
        MenuItem.classList.add('has-fade')
        document.body.classList.remove('noscroll')
    }else{
        header.classList.add('open')
        overlay.classList.add('fade-in')
        overlay.classList.remove('fade-out')
        MenuItem.classList.remove('has-fade')
        document.body.classList.add('noscroll')
    }
})