let inputs = document.querySelectorAll('.input-control');
let form = document.forms.firstform;

console.log(name);

var patterns = {
    firstname:  /^[a-z]{3,}$/i,
    lastname: /^[a-z]{3,}$/i,
    email: /^([\w\.-]+)@(gmail|hotmail|yahoo)\.com$/,
    password: /^[A-Za-z0-9-@$&\.,]{8,12}$/
}

var sub_patterns = {
    firstname : [/[0-9]+/,
                      /[!@#$%^\*()+=]+/],

    lastname : [/[0-9]+/,
                      /[!@#$%^\*()+=]+/],

    email: [/@/,/[!#$%{}[]<>\?\/,]+/]
  
}
/*
let error_messages = {
    firstname: {
        one: 'Only letters only are allowed!',
        two:'First Name can\'t be less than three characters'
    },
    lasttname: {
        one:'Only letters only are allowed!',
        two:'Last Name can\'t be less than three characters'
    },
    email: {
        one:'Email must contain @',
        two:"Only gmail,hotmail and yahoo are allowed"

    },
    password: {
        one:'Password must be atleast 8 characters long',
        two: 'Password cannot be more than 12 characters long'
    },
}*/


inputs[0].addEventListener('keyup',function(e){
    var parent = this.parentElement.parentElement;
    var error_message = parent.querySelector('p').textContent;
    if(this.value.length < 3){
        parent.querySelector('p').textContent = 'First Name can\'t be empty';
    }else if(sub_patterns[this.name][0].test(this.value)){
        parent.querySelector('p').textContent = 'First Name cannot contain numbers';
    } else if(sub_patterns[this.name][1].test(this.value)){
        parent.querySelector('p').textContent = 'FIrst Name cannot contain special characters';
    }
})

inputs[1].addEventListener('keyup',function(e){
   var parent = this.parentElement.parentElement;
    if(this.value.length === 0){
        parent.querySelector('p').textContent = 'Last Name can\'t be empty';
    }else if(sub_patterns[this.name][0].test(this.value)){
        parent.querySelector('p').textContent = 'Last Name cannot contain numbers';
    } else if(sub_patterns[this.name][1].test(this.value)){
        parent.querySelector('p').textContent = 'Last Name cannot contain special characters';
    }
})

inputs[2].addEventListener('keyup',function(e){
    var parent = this.parentElement.parentElement;
 
    if(!sub_patterns[this.name][0].test(this.value)){
        parent.querySelector('p').textContent  = 'Enter a valid Email Address!';
    }
})


inputs.forEach((input)=>{
    input.addEventListener('focus',function(e){
    input.parentElement.parentElement.classList.add('open');
    })

    input.addEventListener('keyup',function(e){
        validate(patterns[input.name],input);
    });
    })


function validate(regex,input){
    if(!regex.test(input.value)){
        input.parentElement.parentElement.classList.add('invalid');        
        input.parentElement.parentElement.classList.remove('open')
    } else{
        input.parentElement.parentElement.classList.remove('invalid');
        input.parentElement.parentElement.classList.add('open');
      
    }
}


