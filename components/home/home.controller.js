module.exports = {
    name: 'HomeController',
    func: function($scope, HomeService) {
       HomeService.getUser().then(function (name) {
        $scope.name = name;
       });
    },
};

