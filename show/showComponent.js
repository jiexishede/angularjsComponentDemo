function showComponentFactoryFun(appName,rootPath) {
    function ShowComponentController() {
        var ctrl = this;
    }
    angular.module(appName).component('shownumber', {
        templateUrl:rootPath + '/showComponent.html',
        controller:ShowComponentController,
        bindings: {
            heartNumber:'=',
            collectionNumber:'='
        }
    });

}
