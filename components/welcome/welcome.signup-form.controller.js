module.exports = {
    name: 'UserSignupController',
    func: function($scope, WelcomeService) {
        $scope.signupUserName = '';
        $scope.signupUserPassword = '';

        $scope.addSignup = function () {
            WelcomeService.sendSignup($scope.signupUserName, $scope.signupUserPassword);
        }
    },
};