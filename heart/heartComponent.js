function heartComponentFactoryFun(appName, rootPath) {

    function HeartComponentController() {
        var ctrl = this;
        ctrl.clickHeartFun = function (boolean_number) {
            ctrl.isHeart =  (boolean_number == 1) ? true : false;
            // ctrl.heartFun({bn:boolean_number});
            ctrl.heartFun({obj:boolean_number});
        }
    }

    angular.module(appName).component('heart', {
        templateUrl: rootPath + '/heartComponent.html',
        controller: HeartComponentController,
        bindings: {
            isHeart: '=',
            heartFun: '&',
        }
    });
}