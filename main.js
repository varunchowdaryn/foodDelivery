(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['main'], factory);
    } else {
        // Browser globals
        //root.DeliveryEmployees = factory(root.dataBaseObject);
        root.main=factory(self.Customer, self.DeliveryEmployees, self.Restaurant, self.dataBaseObject);
    }
}(typeof self !== 'undefined' ? self : this, function(Customer, DeliveryEmployees, Restaurant, dataBaseObject) {
    // Returning object
    console.log("program initiated sucessfully. Dependenices are Customers,Database,Restaurants, DeliveryEmployees")
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
    dataBaseObject.addCustomer(varun);
    dataBaseObject.addCustomer(bharath);
    dataBaseObject.addDeliveryEmployee(ravi);
    dataBaseObject.addDeliveryEmployee(durai);
    dataBaseObject.addRestaurant(sangeetha);
    dataBaseObject.addRestaurant(shreeMithai);
    sangeethaMenu.forEach(function(sgt) { sangeetha.setMenu(sgt); });
    shreeMithaiMenu.forEach(function(smt) { shreeMithai.setMenu(smt); });
    ravi.setLocation('Mylapore');
    durai.setLocation('Adayar');
    sangeetha.showMenu();
    //varun.showLocalRestaurants('Mylapore');

    //Assigning delivery person
    //Find the list of all delivery persons in a particular location
    //Find the nearest delivery person to the restaurant
    //Assign one person to the order
    //After delivery, delivery boy updates the status of order.


    //List of customer orders
    //push the order to orders database after completion of checkout

}));