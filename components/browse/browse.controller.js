module.exports = {
    name: 'BrowseController',
    func: function($scope, BrowseService) {
       $scope.sounds = BrowseService.showAllSounds();
       $scope.testPlay = function playSound(index) {
            BrowseService.previewSounds(index);
       }; 
    }, 
};