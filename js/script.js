/* 
CREATE YOUR BURGER
*/

// REFERENCE
var btn = document.getElementById('button');
console.log(btn); //test
var burgerName = document.getElementById('name');
console.log(burgerName); //test

// Calculate Price
btn.addEventListener('click', function(){
    // console.log('click'); //test
    var name = burgerName.value.trim();
    console.log(name); //test
    // BurgerName required
    if(name.length === 0){
        alert('Insert Burger Name');
    } else{
        console.log('proceed with the calculation ');
    }
})