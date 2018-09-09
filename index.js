var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var shoppingCart = new Object({ itemName: item, itemPrice: price });
  cart.push(shoppingCart);
  return (`${shoppingCart.itemName} has been added to your cart.`);
}

function viewCart() {
   if (cart.length === 0) {
       return ("Your shopping cart is empty.");
   } else {
     
       var itemsAndPrice = [];
       for(var i = 0; i < cart.length; i++) {
          var cartItems = Object.values(cart[i]).join(' at $');
          itemsAndPrice.push(cartItems);
       }
     var final = itemsAndPrice.splice(itemsAndPrice.length - 1, 0, "and ");
        return (`In your cart, you have ${[itemsAndPrice.join(', ')]}.`);
   }
}

function total() {
  var totalValue = 0;
  for (var i = 0; i < cart.length; i++) {
    totalValue += Object.values(cart[i]).pop();
  }
  return totalValue;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (item === Object.values(cart[i]).slice(0, 1).toString()) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return ("That item is not in your cart.");
}

function placeOrder(cardNumber) {
 if (!cardNumber) {
    return ("Sorry, we don't have a credit card on file for you.");
  }
  else {
    cart = [];
    return (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
}