/* 
CREATE YOUR BURGER
*/

// REFERENCE
var btn = document.getElementById('button');
var burgerName = document.getElementById('name');
var ingredients = document.getElementsByClassName('ingredient-checkbox');
var displayPrice = document.getElementById('price');
var coupon = document.getElementById('coupon');
var addBtn = document.getElementsByClassName('ingredient-add');


// SETTINGS
var coupons = ['123456ABCDEF', '7890GHIJK123', 'QWERTY987654'];

// Calculate Price
btn.addEventListener('click', function(){ //waiting for click
    var name = burgerName.value.trim();
    // BurgerName required
    if(name.length === 0){
        alert('Insert Burger Name');
    } else{
        var price = 50;

        for(var i = 0; i < ingredients.length; i++){ //loop on ingredients
            var ingredient = ingredients[i];
            if(ingredient.checked){
                // Add Price
                price += parseInt(ingredient.value);
            }
        }

        var couponCode = coupon.value; 
        if(coupons.includes(couponCode)){ //check for discount coupon
            price *= .8;
        }

        displayPrice.innerHTML = price.toFixed(2); //final price
    }
})

// Clickable add
for(var i = 0; i < addBtn.length; i++){
    var add = addBtn[i];

    add.addEventListener('click', function(){ //waiting for click
        var thisCheckbox = this.previousElementSibling;
        thisCheckbox.checked = !thisCheckbox.checked;
    });
}