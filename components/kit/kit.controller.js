module.exports = {
    name: 'KitController',
    func: function($scope, KitService, dragulaService) {
        // playList[0] is the index of the sound that should be played when 0 is clicked
        const playList = [];

        $scope.play = function (slot, event) {
            if (playList[slot] !== undefined) {
                // todo: play wad
                KitService.playKitSounds(playList[slot]);
            }
            // if (playList[slot] !== undefined && event.keyCode == 81) {
            //     KitService.playKitSounds(playList[slot]);
             else {
                console.log(`Slot ${slot} doesnt have a sound assigned.`);
            }
        };

        $scope.favoriteList = KitService.getFavoriteList();
        $scope.playFavorites = function playKit(index) {
            KitService.playKitSounds(index);
        };

        $scope.$on('first-bag.drop', function(a, b, c, d) {
            const soundIndex = b[0].dataset.target;
            const slotNum = c[0].dataset.slot;

            playList[slotNum] = parseInt(soundIndex);
        });

        dragulaService.options($scope, 'first-bag', {
            copy: false
        });
    },
};

