module.exports = {
    name: 'KitController',
    func: function($scope, KitService, dragulaService, $document, $state) {
        // playList[0] is the index of the sound that should be played when 0 is clicked
        const playList = [];

        $document.bind('keypress', function (event) {
            if ($state.current.url !== '/kit') {
                return;
            }
            if (event.key === '1') {
                KitService.playKitSounds(playList[0]);
            }
            if (event.key === '2') {
                KitService.playKitSounds(playList[1]);
            }
            if (event.key === '3') {
                KitService.playKitSounds(playList[2]);
            }
            if (event.key === '4') {
                KitService.playKitSounds(playList[3]);
            }
            if (event.key === 'q') {
                KitService.playKitSounds(playList[4]);
            }
            if (event.key === 'w') {
                KitService.playKitSounds(playList[5]);
            }
            if (event.key === 'e') {
                KitService.playKitSounds(playList[6]);
            }
            if (event.key === 'r') {
                KitService.playKitSounds(playList[7]);
            }
            if (event.key === 'a') {
                KitService.playKitSounds(playList[8]);
            }
            if (event.key === 's') {
                KitService.playKitSounds(playList[9]);
            }
            if (event.key === 'd') {
                KitService.playKitSounds(playList[10]);
            }
            if (event.key === 'f') {
                KitService.playKitSounds(playList[11]);
            }
            if (event.key === 'z') {
                KitService.playKitSounds(playList[12]);
            }
            if (event.key === 'x') {
                KitService.playKitSounds(playList[13]);
            }
            if (event.key === 'c') {
                KitService.playKitSounds(playList[14]);
            }
            if (event.key === 'v') {
                KitService.playKitSounds(playList[15]);
            }                          
        });

        $scope.play = function (slot, event) {
            if (playList[slot] !== undefined) {
                KitService.playKitSounds(playList[slot]);
            } else {
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

