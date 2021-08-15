(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['DeliveryEmployees'], factory);
    } else {
        // Browser globals
        //root.DeliveryEmployees = factory(root.dataBaseObject);
        root.DeliveryEmployees = factory();
    }
}(typeof self !== 'undefined' ? self : this, function() {
    // Returning object
    var DeliveryEmployees = function(name, age, phoneNo) {
        if (typeof name == 'undefined' || typeof age == 'undefined' || typeof phoneNo == 'undefined') {
            return console.error('Add valid name, age and Phone no.');
        }
        this.name = name;
        this.age = age;
        this.phoneNo = phoneNo;
        this.getLocation = function() { return this.currentLocation }
        this.setLocation = function(location) {
            this.currentLocation = location;
            return this.currentLocation
        }
        this.showDeliveryEmployeeDetails = function() {
            var name = this.name;
            var age = this.age;
            var phoneNo = this.phoneNo;
            var currentLocation = this.currentLocation;
            console.log('Name of the Delivery person is', name);
            console.log('Age of the Delivery person is', age);
            console.log('Phone no. of the Delivery person is', phoneNo);
            console.log('current location of the Delivery person is', currentLocation);
        }
    }
    return DeliveryEmployees;

}));