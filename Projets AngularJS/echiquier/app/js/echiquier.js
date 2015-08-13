var app = angular.module('echiquier', ['colorpicker.module']);

    app.controller('casesCtrl', ['$scope', function ($scope) {
            $scope.casesL = [{},{},{},{},{},{},{},{}];
            $scope.casesC = [{},{},{},{},{},{},{},{}];

            $scope.casesPair = '#fff';
            $scope.casesImpair = '#000';

            $scope.ajouter =  function () {
                $scope.casesL.push({});
                $scope.casesC.push({});
            };

            $scope.retirer = function () {
                    $scope.casesL.pop();
                    $scope.casesC.pop();
            }
    }]);

