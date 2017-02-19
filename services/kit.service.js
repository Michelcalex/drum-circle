module.exports = {
    name: 'KitService',
    func: function ($state, $http) {
        const favoriteList =[];

        $http.get('/favorites').then(function(favResponse) {
            angular.copy(favResponse.data, favoriteList)
        });

        console.log(favoriteList);

        return {
            getFavoriteList() {
                return favoriteList;
            }
        }
    
    },
};
