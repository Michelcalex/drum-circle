module.exports = {
    name: 'HomeService',
    func: function ($http, $state) {
        return {
            getUser() {
                return $http.get('/user', {
                    transformResponse: undefined,
                }).then(function (response) {
                    return response.data;  
                });
            },
            
            // sendLogin(username, userpassword) {
            //     $http.post('https://drumcircle1.herokuapp.com/login', {
            //         username: username,
            //         password: userpassword
            //     }).then(function(response) {
            //         console.log('POST successful!');
            //     });
            // }, 
            // sendSignup(username, userpassword) {
            //     $http.post('https://drumcircle1.herokuapp.com/sign-up', {
            //         username: username,
            //         password: userpassword
            //     }).then(function(response) {
            //         console.log('POST signup successful!');
            //         $state.go('index');
            //     });
            // }
        }
    }
}