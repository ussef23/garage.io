'use strict'
app.controller('garageController', ['$scope' ,'$location','garageProvider','filterFilter' , function($scope ,$location, garageProvider , filterFilter ){
    $scope.query = {} ;
    $scope.currentPage = 1; //current page
    $scope.maxSize = 5; //pagination max size
    $scope.entryLimit = 5; //max rows for data table


    $scope.getVehiclesList = function () {
        var initResult = garageProvider.getVehiclesList();
        initResult.success(function (response) {
            $scope.vehicles = response;
            $scope.filtredList = response;
            $scope.noOfPages = Math.ceil($scope.vehicles.length/$scope.entryLimit);
        }).error(function (response) {
            console.log('loading error getVehiclesList:' +response)
        });
    };
    $scope.getParkingData = function () {
        var initResult = garageProvider.getParkingData();
        initResult.success(function (response) {
            $scope.parking = response;
        }).error(function (response) {
            console.log('loading error getVehiclesList:' +response)
        });
    };
    $scope.getVehiclesList();
    $scope.getParkingData();

    $scope.vehiclesFiltredBy = function (filter , value){
        $scope.query = {};
        $scope.currentPage = 1 ;
        if(filter)
            $scope.query[filter] = value;
    };

    $scope.selectPage =function(page){
        $scope.currentPage = $scope.currentPage + page ;
    };
    $scope.$watch('query', function(term) {
        if($scope.vehicles) {
            $scope.filtredList = filterFilter($scope.vehicles, term);
            $scope.noOfPages = Math.ceil($scope.filtredList.length/$scope.entryLimit);
        }
    });

    $scope.isActive = function (route) {
        return route === $location.path()
    }

}])
