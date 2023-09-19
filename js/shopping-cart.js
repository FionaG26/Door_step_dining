// shopping-cart.js

var shoppingCart = (function () {
  // Private methods and properties
  var cart = [];

  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }

  function saveCart() {
    sessionStorage.setItem("shoppingCart", JSON.stringify(cart));
  }

  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem("shoppingCart")) || [];
  }

  loadCart();

  // Public methods and properties
  var obj = {};

  obj.addItemToCart = function (name, price, count) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count += count;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  };

  obj.setCountForItem = function (name, count) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        saveCart();
        break;
      }
    }
  };

  obj.removeItemFromCart = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count--;
        if (cart[item].count === 0) {
          cart.splice(item, 1);
        }
        saveCart();
        break;
      }
    }
  };

  obj.removeItemFromCartAll = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart.splice(item, 1);
        saveCart();
        break;
      }
    }
  };

  obj.clearCart = function () {
    cart = [];
    saveCart();
  };

  obj.totalCount = function () {
    var totalCount = 0;
    for (var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  };

  obj.totalCart = function () {
    var totalCart = 0;
    for (var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  };

  obj.listCart = function () {
    var cartCopy = [];
    for (var i in cart) {
      var item = cart[i];
      var itemCopy = {};
      for (var prop in item) {
        itemCopy[prop] = item[prop];
      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy);
    }
    return cartCopy;
  };

  return obj;
})();
