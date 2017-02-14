module.exports = {
    name: 'LoginController',
    func: function($scope, HomeService) {
        console.log('I am login controller');
        $scope.userName = '';
        console.log($scope.userName);
    }
};