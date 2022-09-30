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
let back = document.querySelector('.back');
let started = document.querySelector('#modal');
let selectBamboo = document.querySelector('#selectBamboo');
let selectBlack = document.querySelector('#selectBlack');
let selectMahogany = document.querySelector('#selectMahogany');
let progressInner = document.querySelector('div.progress-inner');
let people = document.querySelector('.people').textContent;

//back-this-project button functionality
back_this_project.addEventListener('click',function(e){
    openModal(modal);
})

//bookmark toggle functionality
bookmark_icon.addEventListener('click',function(e){
   updateProgress();
    if(bookmark_text.classList.contains('bookmarked')){
        bookmark_text.textContent = 'Bookmark';
        bookmark_text.classList.remove('bookmarked');
        bookmark_icon.removeAttribute('id');

}else{
    bookmark_text.classList.add('bookmarked');
    bookmark_icon.setAttribute('id','svg-bookmarked')
    bookmark_text.textContent = 'Bookmarked';
}
});


icon_toggle.addEventListener('click',function(e){
    if(menu.style.display == 'flex'){
        menu.style.display = 'none';
        icon_toggle.setAttribute('src',"images/icon-hamburger.svg" )

    }else{
        menu.style.display = 'flex';
        icon_toggle.setAttribute('src',"images/icon-close-menu.svg");
      
    }
})

close_modal.addEventListener('click',function(e){
    close_modal.parentElement.parentElement.style.display = 'none';
    check();
    deselect();
    
})

back.addEventListener('click',function(e){
    back.parentElement.style.display = 'none';
    check();
})

//radio buttons functionality
let isChecked = false;
radios.forEach(function(each){
    each.addEventListener('change',function(e){
        if(each.checked == true){
            deselect();
            each.checked = true;
            each.parentElement.parentElement.parentElement.classList.add('selected');
        }else{
            if(each.checked == false){
                each.parentElement.parentElement.parentElement.classList.remove('selected');
            }
        }
    })
})

button_select.forEach(function(each){
    each.addEventListener('click',function(e){
        openModal(modal);
    })
})

function openModal(modal){
   
    modal.style.display = 'block';
    modal.scrollIntoView();
    //sections.style.opacity = .4;
   check();
   deselect()
    
};

//continue button functionality

btns.forEach(function(each){
    each.addEventListener('click',function(e){
       continueBtn(modal,success);
       e.preventDefault();
    })
})



//function that deselects all radio buttons

function deselect(){
    let radios = document.querySelectorAll('.form-control');
  radios.forEach(function(each){
    each.checked = false;
 
        each.parentElement.parentElement.parentElement.classList.remove('selected');
    
  })
}

function check(){
    if(modal.style.display == 'none'){
        sections.style.opacity = 1
    }else{
        sections.style.opacity = .4;
    }
}
function continueBtn (toHide,toShow){
    toHide.style.display = 'none';
    toShow.style.display = 'grid';
    toShow.scrollIntoView();
}

function percentage(){
    let amountStr = document.querySelector('#theamt').textContent;
    let amount = strToNum(amountStr);
    let over = 100000;
    return (amount/over) * 100 + '%';

}

//console.log(percentage())




var num = '5,000';
var newNum = num.split(/[]/)

function strToNum(str){
    let newStr = str.split('');
    //console.log(newStr);
    let newer = newStr.filter(function(each){
       return each != '$' && each != ',';
    })

    //console.log('newer: ' + newer);
    return Number(newer.join(''));
    
}

//console.log(strToNum(people) + 1)
strToNum(people) ;

function updateProgress(){
    document.querySelector('#theamt').textContent = strToNum(document.querySelector('#theamt').textContent) + 100;
    progressInner.style.width = percentage();
    document.querySelector('.people').textContent = strToNum(document.querySelector('.people').textContent) + 1;


}















