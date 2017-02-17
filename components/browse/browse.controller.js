module.exports = {
    name: 'BrowseController',
    func: function($scope, BrowseService, $log) {
        $scope.sounds = BrowseService.showAllSounds();
        $scope.testPlay = function playSound(index) {
                BrowseService.previewSounds(index);
        }; 

        $scope.favorite = function() {
            console.log('button clicked');
        }

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

        // todo: remove content property
        let tabs = [
            {title: 'All' },
            {title: 'Kick' },
            {title: 'Snare' },
            {title: 'Tom' },
            {title: 'Hihat' },
            {title: 'Cymbal' },
            {title: 'Percussion' },
        ], 
        selected = null,
        previous = null;
        $scope.tabs = tabs;
        $scope.selectedIndex = 0;
    }, 
};


