let buttons = document.querySelectorAll('div.select-tip button');
let inputs = document.querySelectorAll('.input-control');
let outputs = document.querySelectorAll('.amt');
const resetBtn = document.querySelector('.reset');


buttons.forEach(function(button){
    console.log(button.name,button.value);
    button.addEventListener('click',function(e){
        deselect();
        button.classList.toggle('selected');
        // if(inputs[0].textContent !== '' && inputs[2].textContent !== ''){
        //     grabAllValues(e.target);
        // }else{return}
        grabAllValues(e.target)
    })
})

//function to deselect all other buttons

function deselect(){
    document.querySelectorAll('div.select-tip button').forEach(function(button){
        button.classList.remove('selected');
        document.querySelector('#custom-tip').classList.remove('selected');
        inputs[1].value = '';
    })
};

//function that takes the value of a button or input and convert it to number
function converter(input){
    if(input.value == ''){
        return input.value = '';
    }else{
         console.log(parseFloat(input.value));
    return parseFloat(input.value);
    }
   
}

//function that grabs all values 
function grabAllValues(percentage){
    if(inputs[2].value < 1 || inputs[2].value == ''){
        inputs[2].parentElement.parentElement.parentElement.classList.add('invalid');
        return
    }else{
        inputs[2].parentElement.parentElement.parentElement.classList.remove('invalid');
    }
    let tip = (converter(inputs[0]) * (converter(percentage) / 100)) / Math.floor(converter(inputs[2]));
    let total = (converter(inputs[0]) / Math.floor(converter(inputs[2])) + tip);
   
        outputs[0].textContent = tip.toFixed(2);
         outputs[1].textContent = total.toFixed(2);
         inputs[2].value = Math.floor(converter(inputs[2]));
    resetBtn.classList.add('active');
}

//reset button functionality

resetBtn.addEventListener('click',function(e){
    inputs.forEach(function(each){
        each.value = '';
    })
    outputs[0].textContent = 0;
    outputs[1].textContent = 0;
    deselect();
    resetBtn.classList.remove('active');

})

//custom tip functionality
inputs[1].addEventListener('keyup',function(e){
    let value = this.value;
    console.log('Custom tip is: ' ,value);
    deselect();
    this.value = value;
    this.classList.add('selected');
    grabAllValues(this);
})

inputs[2].addEventListener('keyup',(e) =>{
    let selectedTip = document.querySelector('.selected');
    grabAllValues(selectedTip);
})



