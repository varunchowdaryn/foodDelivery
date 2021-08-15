// Defines a module "amdWeb" that depends on another module called "".

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['Database'], factory);
    } else {
        // Browser globals
        root.dataBaseObject = factory();
    }
}(typeof self !== 'undefined' ? self : this, function() {
    // Returning object
    var Database = function() {
        this.customerData = [];
        this.deliveryEmployeeData = [];
        this.restaurantData = [];
        this.addCustomer = function(customerName) {
            this.customerData.push(customerName);
            //console.log('customer added in database');
        }
        this.addDeliveryEmployee = function(deliveryEmployeename) {
            this.deliveryEmployeeData.push(deliveryEmployeename);
            //console.log('Delivery Employee added in database');
        }
        this.addRestaurant = function(restaurantName) {
            this.restaurantData.push(restaurantName);
            //console.log('Restaurant name added in database');
        }
        this.showCustomers = function() {
            this.customerData.forEach(function(ct) { console.log('Name of the customer in database is:', ct.name); });
        }
        this.showDeliveryEmployees = function() {
            this.deliveryEmployeeData.forEach(function(dt) { console.log('Name of the Delivery Employees in database is:', dt.name); });
        }
        this.showRestaurants = function() {
            this.restaurantData.forEach(function(rt) { console.log('Name of the Restaurants in database is:', rt.name); });
        }
    }
    var db = new Database();
    return db;

}));