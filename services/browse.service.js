module.exports = {
    name: 'BrowseService',
    func: function ($state, $http) {
        const sounds = [];
        const wads = [];
        // const favoriteSounds = [];

        $http.get('/sounds').then(function(soundResponse) {
            angular.copy(soundResponse.data, sounds);
            for (let i = 0; i < sounds.length; i++) {
                sounds[i].index = i;
                wads.push(new Wad({
                    source: sounds[i].filePath,
                }));
            };
            
            $http.get('/favorites').then(function(favoriteResponse){
                sounds.forEach(function(sound){
                    const findFavorite = function(id) {
                        return favoriteResponse.data.find(function(favorite){
                            return favorite.id === id;
                        });
                    }
                    if(findFavorite(sound.id) !== undefined) {
                        sound.isFavorite = true;
                    } else {
                        sound.isFavorite = false;
                    }
                });
            });
        });

        return {
            showAllSounds() {
                return sounds;
            },

            previewSounds(index) {
                wads[index].play();
            },


        }; 
    },
};
