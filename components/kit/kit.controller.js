module.exports = {
    name: 'KitController',
    func: function($scope, KitService, dragulaService) {
        $scope.favoriteList = KitService.getFavoriteList();

        dragulaService.options($scope, 'first-bag', {
            copy: false
        });
    },
};

