let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');


hamburger.addEventListener('click',(e)=>{
    if(menu.style.opacity == 1){
        menu.style.opacity = 0;
    }else{
        menu.style.opacity = 1;
    }
})
