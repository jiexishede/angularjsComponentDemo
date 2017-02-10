var app = angular.module('app',[]);
app.controller('controller', function ($scope) {
    $scope.heartBoolean = true;
    $scope.collectionBoolean = true;
    $scope.collectionNum = 10;
    $scope.heartNum = 10;
    $scope.heartFun = function (obj) {
        console.log("heart,number, === " + obj);
        $scope.heartNum  =  $scope.heartNum  + obj;
    };

    $scope.collectionFun = function (obj) {
        $scope.collectionNum  =  $scope.collectionNum  + obj;
    };
})