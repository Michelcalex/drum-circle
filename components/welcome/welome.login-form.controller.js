module.exports = {
    name: 'UserLoginController',
    func: function($scope, WelcomeService) {
        $scope.loginUserName = '';
        $scope.loginUserPassword = '';

        $scope.addLogin = function () {
            WelcomeService.sendLogin($scope.loginUserName, $scope.loginUserPassword);
        }
    },
};