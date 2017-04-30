/* JavaScript Document */

(function(){
    var app = angular.module('myCalculator',[]);

    app.controller('CalculatorController',['$scope', function($scope){

            $scope.lumen_options = [375, 600, 900, 1125, 1600];
            $scope.current_lumens = 600;
            $scope.current_cost = 12;
            $scope.current_hours = 3;
            $scope.total_days = 365;

            const CONVERSIONS = {
                inc: 0.0625,
                hal: 0.0450
            };

            $scope.calculations = {
                inc: {
                    wattage: 0,
                    cost: 0
                }
            };

            $scope.inc_conversion = .0625;
            $scope.hal_conversion = .0450;
            $scope.cfl_conversion = .0146;
            $scope.led_conversion = .0125;

            $scope.calculate = function(){
                
                //for (var key in $scope.calculations) {
                //    $scope.calculations[key].wattage = calculateWattage(CONVERSIONS[key]);
                //}

                 $scope.inc_wattage = calculateWattage($scope.inc_conversion);
                 $scope.hal_wattage = calculateWattage($scope.hal_conversion);  
                 $scope.cfl_wattage = calculateWattage($scope.cfl_conversion);
                 $scope.led_wattage = calculateWattage($scope.led_conversion);
           
                if ($scope.current_hours > 24){$scope.current_hours = 24}
        
                var total_hours = $scope.total_days * $scope.current_hours;
                var cost = $scope.current_cost / 100;

                $scope.inc_cost = ((($scope.inc_wattage * total_hours)/1000) * cost).toFixed(2)
                $scope.hal_cost = ((($scope.hal_wattage * total_hours)/1000) * cost).toFixed(2)
                $scope.cfl_cost = ((($scope.cfl_wattage * total_hours)/1000) * cost).toFixed(2)
                $scope.led_cost = ((($scope.led_wattage * total_hours)/1000) * cost).toFixed(2)


                
                 }

                 var calculateWattage = function calculateWattage(forConversion) {
                    return ($scope.current_lumens * forConversion).toFixed(1);
                 };

            $scope.calculate();

    }]);



})();


