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
        }
    }
}