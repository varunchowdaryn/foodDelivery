(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['Restaurant'], factory);
    } else {
        // Browser globals
        root.Restaurant = factory();
    }
}(typeof self !== 'undefined' ? self : this, function() {
    // Returning object
    var Restaurant = function(name, phoneNo, location) {
        if (typeof name == 'undefined' || typeof phoneNo == 'undefined' || typeof location == 'undefined') {
            return console.error('Add valid name,phone no. and location');
        }
        this.name = name;
        this.phoneNo = phoneNo;
        this.location = location;
        this.menu = [];
        this.setMenu = function(setMenuItem) {
            this.menu.push(setMenuItem);
        }
        this.showMenu = function() {
            var itemData = this.menu;
            for (i = 0; i < itemData.length; i++) {
                itemData[i].isAvailable ?
                    console.log(`Item ${itemData[i].name} is Available`) :
                    console.log(`Item ${itemData[i].name} is Not Available`);
            }
        }
        this.showRestaurantDetails = function() {
            var name = this.name;
            var age = this.age;
            var phoneNo = this.phoneNo;
            console.log('Name of the Restaurant is', name);
            console.log('Phone no. of the Restaurant is', phoneNo);
            console.log('current location of the Restaurant is', location);
        }
    }

    return Restaurant;

}));