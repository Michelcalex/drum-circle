module.exports = {
    name: 'KitService',
    func: function ($state, $http) {
        const favoriteList =[];
        const wads = [];

        $http.get('/favorites').then(function(favResponse) {
            angular.copy(favResponse.data, favoriteList);
            for (let i = 0; i < favoriteList.length; i++) {
                favoriteList[i].index = i;
                wads.push(new Wad({
                    source: favoriteList[i].filePath,
                }));
            };
        });

        console.log(favoriteList);
        console.log(wads);

        return {
            getFavoriteList() {
                return favoriteList;
            },

            playKitSounds(index) {
                wads[index].play();
            },
        }
    
    },
};
