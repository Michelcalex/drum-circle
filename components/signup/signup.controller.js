module.exports = {
    name: 'SignupController',
    func: function($scope, HomeService) {

        //Angular submit ----------------------
        // $scope.sendSignup = function(){
        //     HomeService.sendSignup($scope.username, $scope.password);
        // } 
        
        
        //Toastr alert - only if Angular way-----------------
        //toastr.success('Hello world!', 'Toastr fun!');
        // $scope.status = ' ';
        // $scope.customFullscreen = false;

        //  $scope.showAlert = function(ev) {
        //     $mdDialog.show(
        //     $mdDialog.alert()
        //         .parent(angular.element(document.querySelector('#popupContainer')))
        //         .clickOutsideToClose(true)
        //         .title('Awesomesauce')
        //         .textContent('You can now login with your username and password')
        //         .ariaLabel('Succesfully Signedup')
        //         .ok('Got it!')
        //         .targetEvent(ev)
        //     );
        // };
    }, 
};


