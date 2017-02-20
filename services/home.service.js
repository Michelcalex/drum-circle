module.exports = {
    name: 'HomeService',
    func: function ($http, $state) {
        return {
            getUser() {
                return $http.get('/user', {
                    transformResponse: undefined,
                }).then(function (response) {
                    return response.data;  
                    console.log(response.data);
                });
            },


            //Angular way to submit forms-----------------------------------
            // sendSignup(username, password) {
            //     $http.post('/sign-up', {
            //         username: username,
            //         password: password,
            //     }).then(function(response) {
            //         console.log('POST successful!');
            //     });
            // },

            // sendLogin() {
            //     $http.post('https://drumcircle1.herokuapp.com/login', {
            //         username: $scope.username,
            //         password: $scope.password
            //     }).then(function(response) {
            //         console.log('POST successful!');
            //     });
            // }, 
            
        }
    }
}