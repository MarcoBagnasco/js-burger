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
var displayPrice = document.getElementById('price');
// console.log(displayPrice); //test
var coupon = document.getElementById('coupon');
// console.log(coupon); //test
var addBtn = document.getElementsByClassName('ingredient-add');
// console.log(addBtn); //test


// SETTINGS
var coupons = ['123456ABCDEF', '7890GHIJK123', 'QWERTY987654'];

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

        var couponCode = coupon.value;
        // console.log(couponCode); //test
        if(coupons.includes(couponCode)){
            price *= .8;
        }

        // console.log(price); //test
        displayPrice.innerHTML = price.toFixed(2);
    }
})

// Clickable add
for(var i = 0; i < addBtn.length; i++){
    var add = addBtn[i];

    add.addEventListener('click', function(){
        // console.log('click'); //test
        // console.log(this); //test
        // console.log(this.previousElementSibling); //test
        var thisCheckbox = this.previousElementSibling;
        thisCheckbox.checked = !thisCheckbox.checked;
    });
}
