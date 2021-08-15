//debugger;
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
        var restaurantData = data.restaurantData;
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
var varun = new Customer('varun', 29, '9996776892', 'Mylapore');
var bharath = new Customer('bharath', 31, '9966775544', 'Mylapore');
var ravi = new DeliveryEmployees('ravi', 23, '741850682');
var durai = new DeliveryEmployees('durai', 25, '9887766221');
var sangeethaMenu = [{ name: 'Idly', isAvailable: true }, { name: 'Dosa', isAvailable: true },
    { name: 'Vada', isAvailable: true }, { name: 'Pongal', isAvailable: false }
];
var shreeMithaiMenu = [{ name: 'Idly', isAvailable: true }, { name: 'Dosa', isAvailable: false },
    { name: 'Vada', isAvailable: true }, { name: 'Pongal', isAvailable: true }
];
var sangeetha = new Restaurant('sangeetha', '04425944000', 'Mylapore');
var shreeMithai = new Restaurant('shree Mithai', '044259442233', 'Adayar');
var data = new Database();
data.addCustomer(varun);
data.addCustomer(bharath);
data.addDeliveryEmployee(ravi);
data.addDeliveryEmployee(durai);
data.addRestaurant(sangeetha);
data.addRestaurant(shreeMithai);
sangeethaMenu.forEach(function(sgt) { sangeetha.setMenu(sgt); });
shreeMithaiMenu.forEach(function(smt) { shreeMithai.setMenu(smt); });
ravi.setLocation('Mylapore');
durai.setLocation('Adayar');
sangeetha.showMenu();
varun.showLocalRestaurants('Mylapore');

//Assigning delivery person
//Find the list of all delivery persons in a particular location
//Find the nearest delivery person to the restaurant
//Assign one person to the order
//After delivery, delivery boy updates the status of order.


//List of customer orders
//push the order to orders database after completion of checkout