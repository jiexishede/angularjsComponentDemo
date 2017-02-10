function collectionComponentFactoryFun(appName, rootPath) {

    function CollectionComponentController() {
        var ctrl = this;

        ctrl.clickCollectionFun = function (boolean_number) {
            ctrl.isCollection =  (boolean_number == 1) ? true : false;;
            ctrl.collectionFun({number:boolean_number});
        }
    }

    angular.module(appName).component('collection', {
        templateUrl: rootPath + '/collectionComponent.html',
        controller: CollectionComponentController,
        bindings: {
            isCollection: '=',
            collectionFun: '&',
        }
    });
}