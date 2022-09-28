let icon_toggle = document.querySelector('.icon-hamburger');
let menu = document.querySelector('.nav-menu');

let container = document.querySelector('.container');
let body = document.querySelector('body');
let progress_bar = document.querySelector('.progress-bar');
let modals_container = document.querySelector('#modals_container');

let button_select = document.querySelectorAll('.select');
let close_modal = document.querySelector('#close-modal');
let about_cards = document.querySelectorAll('section.about > div.card');
let radios = document.querySelectorAll('.form-control');
let sections = document.querySelector('div.sections');
let back_this_project = document.querySelector('.back-this-project');
let backed = document.querySelector('.topp');
let bookmark_text = document.querySelector('.bookmark-text');
let bookmark_icon = document.querySelector('.bookmark-icon');
let success = document.querySelector('.success-modal');
let modal = document.querySelector('.modal');
let btns = document.querySelectorAll('div.three button');
let back = document.querySelector('button.back');
bookmark_icon.addEventListener('click',function(e){
    if(bookmark_text.classList.contains('bookmarked')){
        bookmark_text.textContent = 'Bookmark';
        bookmark_text.classList.remove('bookmarked');

}else{
    bookmark_text.classList.add('bookmarked');
    bookmark_text.textContent = 'Bookmarked';
}
})

body.addEventListener('click',function(e){
    if(e.target == icon_toggle){
        toggler(menu,container);
}else if(e.target !== icon_toggle){return}
})

back_this_project.onclick = function(){
   
}
about_cards.forEach(function(each){
    each.addEventListener('click',function(e){
        if(e.target.className === 'select'){
            modals_container.style.display = 'flex';
            sections.style.opacity = .4;
    }
    })
});

close_modal.addEventListener('click',function(){

    close_modal.parentElement.parentElement.style.display = 'none';
    sections.style.opacity = 1;
})

radios.forEach(function(each){
    each.addEventListener('click',function(e){
    if(each.checked == true){
        radios.forEach(function(){
            each.parentElement.parentElement.parentElement.classList.remove('selected')
        })
            each.parentElement.parentElement.parentElement.classList.add('selected');

    }else{

        each.parentElement.parentElement.parentElement.classList.remove('selected');
        
    }
})
})
btns.forEach(function(each){
    each.onclick = function(e){
        e.preventDefault();
        success.style.display = 'grid';
        modal.style.display = 'none';
    }
})

back.onclick = function(e){
    modals_container.style.display = 'none';
    sections.style.opacity = 1;
}




function toggler(a,b){
    if(a.style.display === 'flex'){
        a.style.display = 'none';
        b.style.opacity = 1;
      
      icon_toggle.setAttribute('src',"images/icon-hamburger.svg") ;
     
    }else{
        a.style.display = 'flex';
        b.style.opacity = .5;
        icon_toggle.setAttribute('src',"images/icon-close-menu.svg") ;
    }
}