module.exports = {
    name: 'KitController',
    func: function($scope, KitService, dragulaService) {
        $scope.favoriteList = KitService.getFavoriteList();
        $scope.playFavorites = function playKit(index) {
            KitService.playKitSounds(index);
        };

        dragulaService.options($scope, 'first-bag', {
            copy: false
        });
    },
};

