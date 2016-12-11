'use strict';

app.config(
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'garageController',
                templateUrl: 'view/vehicles.html'
                
            })
            .when('/add-vehicle', {
                controller: 'garageController',
                templateUrl: 'view/add-vehicle.html'

            })
            .when('/settings', {
                controller: 'garageController',
                templateUrl: 'view/parking.html'

            })

    }
);
