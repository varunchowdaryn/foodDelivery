window.onload = function() {
    var getShowCustomers = document.getElementById('showCustomers');
    var getShowRestaurants = document.getElementById('showRestaurants');
    var getAddToCart = document.getElementById('addToCart');
    var getBuy = document.getElementById('buy');
    getShowCustomers.onclick = function() { console.log('Show Customers Button clicked'); }
    getShowRestaurants.onclick = function() { console.log('Show Restaurants Button clicked'); }
    getAddToCart.onclick = function() { console.log('Add To Cart Button clicked'); }
    getBuy.onclick = function() { console.log('Buy Button clicked'); }
}