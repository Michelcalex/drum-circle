module.exports = {
    name: 'BrowseController',
    func: function($scope, BrowseService) {
       $scope.sounds = BrowseService.showSounds();
       $scope.play = function playSound() {
            console.log('play sound');
       }; 
    }, 
};