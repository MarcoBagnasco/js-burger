/* 
CREATE YOUR BURGER
*/

// REFERENCE
var btn = document.getElementById('button');
// console.log(btn); //test
var burgerName = document.getElementById('name');
// console.log(burgerName); //test
var ingredients = document.getElementsByClassName('ingredient-checkbox');
// console.log(ingredients); //test

// Calculate Price
btn.addEventListener('click', function(){
    // console.log('click'); //test
    var name = burgerName.value.trim();
    // console.log(name); //test
    // BurgerName required
    if(name.length === 0){
        alert('Insert Burger Name');
    } else{
        // console.log('proceed with the calculation '); //test
        var price = 50;

        for(var i = 0; i < ingredients.length; i++){
            var ingredient = ingredients[i];
            // console.log(ingredient); //test
            // console.log(ingredient.checked); //test
            if(ingredient.checked){
                console.log(ingredient.value);
                // Add Price
                price += parseInt(ingredient.value);
            }
        }
        console.log(price);
    }
})