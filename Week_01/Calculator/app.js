/**
 * DOM
 */
 let result = document.querySelector('.result');
 let operations = document.querySelectorAll('.opr-btn');
 let numberButtons = document.querySelectorAll('.number-btn');
 let clear = document.querySelector('.clear');
 let equal = document.querySelector('.equal');



// This function works for each number buttons and adds the value in the input area.  
numberButtons.forEach(function (element) {
    element.onclick = function(btn){
        if (result.value == 0){
            result.value = '';
        }
        result.value += this.textContent;
    }
});


// This function works for each operation buttons and adds the operant in the input area.  
operations.forEach(function (element) {
    element.onclick = function(btn){
        result.value += this.textContent;
    }
});


// This function works for clear the input area.  
clear.onclick = function(){
    result.value = '0';
};


// This function evaluates the given operations.
equal.onclick = function (){
    result.value = eval(result.value);
};
 




