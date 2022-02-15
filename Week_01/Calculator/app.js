/**
 * ANALYSE
 * 1- First we will create a bootstrap template
 * 2- Then we will seperate them to the fragments
 * 3- With DOM element we will reach the buttons
 * 4- We will write some functions;
 *  a) A function that adds number in to the input area
 *  b) A function that adds operations in to the input area
 *  c) Functions that clear and evaluate the numbers
 * 5- We will render all things in main tags.
 */




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
 




