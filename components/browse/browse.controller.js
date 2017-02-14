module.exports = {
    name: 'BrowseController',
    func: function($scope, BrowseService) {
        BrowseService.showSounds();
        
    },
};