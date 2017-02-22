module.exports = {
    name: 'KitService',
    func: function ($state, $http) {
        const favoriteList = [];
        const wads = [];

        $http.get('/favorites').then(function (favResponse) {
            angular.copy(favResponse.data, favoriteList);
            for (let i = 0; i < favoriteList.length; i++) {
                addWad(favoriteList[i]);
            };
        });

        /* Add a new Wad from a sound object */
        function addWad(sound) {
            sound.index = wads.length;

            wads.push(new Wad({
                source: sound.filePath,
            }));
        }

        return {
            getFavoriteList() {
                return favoriteList;
            },

            playKitSounds(index) {
                // console.log(wads[index]);
                wads[index].play();
            },

            markFavorite(sound) {
                $http.post('/favorites/' + sound.id, {
                    id: sound.id,
                });
                sound.isFavorite = true;
                favoriteList.push(sound);
                addWad(sound);

                // console.log(favoriteList);
            },

            markUnFavorite(sound) {
                $http.post('/unfavorite/' + sound.id, {
                    id: sound.id,
                })
                sound.isFavorite = false;
                for (let i = 0; i < favoriteList.length; i++) {
                    if (favoriteList[i] === sound) {
                        favoriteList.splice(i,1);
                    }
                }

            }
        }

    },
};
