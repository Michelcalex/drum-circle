module.exports = {
    name: 'BrowseController',
    func: function($scope, BrowseService, KitService, HomeService) {
        $scope.sounds = BrowseService.showAllSounds();
        $scope.testPlay = function playSound(index) {
            BrowseService.previewSounds(index);
        }; 

//favorite and unfavorite sounds
        $scope.favorite = function(sound) {
            KitService.markFavorite(sound);
        };

        $scope.unfavorite = function(sound) {
            KitService.markUnFavorite(sound);
        }

        HomeService.getUser().then(function (name) {
            $scope.username = name; // if username is undefined, nothing will render.
    });


//filter sounds and tab functionality 
        $scope.showSounds = [];

        $scope.filterSounds = function (category) {
            // console.log(`Filtering ${category}`)
            $scope.showSounds = [];
            for (let i = 0; i < $scope.sounds.length; i++) {
                if (category === $scope.sounds[i].category || category === 'All') {
                    $scope.showSounds.push($scope.sounds[i]);
                }
            };
            
        };
        $scope.filterSounds('All');

        let tabs = [
            {title: 'All', src: '../../assets/all.png'},
            {title: 'Kick', src: '../../assets/kick.png' },
            {title: 'Snare', src: '../../assets/snare.png' },
            {title: 'Tom', src: '../../assets/tom.png' },
            {title: 'Hihat', src: '../../assets/hihat.png' },
            {title: 'Cymbal', src: '../../assets/cymbal.png' },
            {title: 'Percussion', src: '../../assets/percussion.png' },
        ], 
        selected = null,
        previous = null;
        $scope.tabs = tabs;
        $scope.selectedIndex = 0;
    }, 
};


