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
let pledgeAmts = document.querySelectorAll('.pledge-amt');

//back-this-project button functionality
back_this_project.addEventListener('click',function(e){
    openModal(modal);
})

//bookmark toggle functionality
bookmark_icon.addEventListener('click',function(e){
   //updateProgress(document.querySelector('#pledge-amt-bamboo'));
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
        e.preventDefault()
       continueBtn(modal,success);
	   success.scrollIntoView();
	   success.style.marginTop = '150px';
    })
})

// for(let i = 0 ; i < btns.length; i++){
//     btns[i].addEventListener('click',function(e){
//         updateProgress(inputValue[i]);
//     })
// }



//function that deselects all radio buttons

function deselect(){
    let radios = document.querySelectorAll('.form-control');
  radios.forEach(function(each){
    each.checked = false;
 
        each.parentElement.parentElement.parentElement.classList.remove('selected');
    
  })
}
//select button functionality to updat progress
 btns[1].addEventListener('click',function(e){
    updateProgress(pledgeAmts[1],25);
    let a = document.querySelector('.bamboo-stand .testingg');
    let b = document.querySelector('.bamboo .testing');
    let c = document.querySelector('.bamboo-stand .testinggg');
    let card = document.querySelector('.card.bamboo-stand');
    let otherCard = document.querySelector('.card.bamboo')
    updateCards(a,b,c);
   func(c,card,otherCard);

 })

 btns[2].addEventListener('click',function(e){
    updateProgress(pledgeAmts[2],75);
    let a = document.querySelector('.black-pledge .testingg');
    let b = document.querySelector('.black_edition .testing');
    let c = document.querySelector('.black-pledge .testinggg');
    let card = document.querySelector('.card.black-pledge');
    let otherCard = document.querySelector('.card.black_edition')
	updateCards(a,b,c);
    func(c,card,otherCard);
 })

 btns[3].addEventListener('click',function(e){
    updateProgress(pledgeAmts[3]);
 })

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
}

function percentage(){
    let amountStr = document.querySelector('#theamt').textContent;
    let amount = strToNum(amountStr);
    let over = 100000;
    return (amount/over) * 100 + '%';

}

//console.log(percentage())

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
//strToNum(people) ;

function updateProgress(inputValue,minValue){
    let theamt = strToNum(document.querySelector('#theamt').textContent);
    if(inputValue.value >= minValue){
         document.querySelector('#theamt').textContent = theamt + Number(inputValue.value);
    } else{
        document.querySelector('#theamt').textContent = theamt + minValue;
    }
   
    progressInner.style.width = percentage();
    document.querySelector('.people').textContent = strToNum(document.querySelector('.people').textContent) + 1;
    checkAndDisable();
  
}
function updateCards(a,b,c){
    a.textContent = Number(a.textContent) -1;
    b.textContent = Number(b.textContent) -1;
   
     c.textContent = Number(c.textContent) -1;

}

function  checkAndDisable(){
    let radiosList = document.querySelectorAll('.form-control');
    let amtRaised = strToNum(document.querySelector('span#theamt').textContent);
    console.log('Goal reached : ' ,amtRaised);

    if(amtRaised >= 100000){
        radiosList.forEach(function(each){
            each.disabled = true;
            disabledAllCards();
        })
    }
    
}

function disabledAllCards(){
    let cards = document.querySelectorAll('.card');
    for(let i = 0 ; i < cards.length; i++){
        cards[i].classList.add('disabled');
    }
}

function func(a,card,card2){
    if(+a.textContent === 0){
    card.classList.add('disabled');
    card.querySelector('.form-control').disabled = true;
    card.querySelector('button.btn').style = 'pointer-events: none';
    card2.classList.add('disabled');
    card2.querySelector('button.select').textContent = 'Out of Stock';
    card2.querySelector('button.select').style = 'pointer-events:none';
}}

















