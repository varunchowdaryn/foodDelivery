(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['Customer'], factory);
    } else {
        // Browser globals
        root.Customer = factory(self.dataBaseObject);
    }
}(typeof self !== 'undefined' ? self : this, function(dataBaseObject) {
    // Returning object
    var Customer = function(name, age, phoneNo, location) {
        if (typeof name == 'undefined' || typeof age == 'undefined' || typeof phoneNo == 'undefined' || typeof location == 'undefined') {
            return console.error('Add valid name, age, phone no. and location');
        }
        this.name = name;
        this.age = age;
        this.phoneNo = phoneNo;
        var location = location;
        this.cart = [];
        this.orders = [];
        this.showCustomerDetails = function() {
            var name = this.name;
            var age = this.age;
            var phoneNo = this.phoneNo;
            console.log('Name of the Customer is', name);
            console.log('Age of the Customer is', age);
            console.log('Phone no. of the Customer is', phoneNo);
            console.log('current location of the Customer is', location);
        }
        this.showLocalRestaurants = function(location) {
            var restaurantData = dataBaseObject.restaurantData;
            var countRestaurantDataLength = restaurantData.length;
            for (var i = 0; i < countRestaurantDataLength; i++) {
                if (restaurantData[i].location == location) {
                    console.log('Name of the restaurants in the current location is', restaurantData[i].name)
                }
            }
        }
        this.addToCart = function(itemInfo) {
            if (itemInfo) {
                this.cart.push(itemInfo);
                console.log("Item added to cart is:", itemInfo)
            }
        }
        this.deleteFromCart = function(itemInfo) {
            if (this.cart.length > 0) {
                var index = this.cart.indexOf(itemInfo);
                this.cart.splice(index, 1);
                console.log("Item deleted from cart");
            } else {
                console.log("No item in cart");
            }
        }
        this.showCart = function() {
            this.cart.forEach(function(sct) { console.log('Item in the cart is:', sct); });
        }
        this.checkOut = function() {
            if (this.cart.length > 0) {
                //assign delivery person in the restaurant locality
                //push to orderslist
                //var emp = data.deliveryEmployeeData;
                //emp.forEach(function(j) {})
                this.orders.push(cart);
                console.log("checkout completed");
            } else {
                console.log("No item in cart");
            }
        }
        this.ordersList = function() {
            if (this.orders.length > 0) {
                console.log('Displaying list of orders:');
                this.orders.forEach(function(i) { console.log('order is:', i); });
            } else {
                console.log("No orders made so far");
            }

        }
    }
    return Customer;

}));