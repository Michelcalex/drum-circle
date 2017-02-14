module.exports = {
    name: 'BrowseController',
    func: function($scope, BrowseService) {
       $scope.sounds = BrowseService.showSounds();
       $scope.testPlay = function playSound() {
            console.log('play sound');
       }; 
    }, 
};