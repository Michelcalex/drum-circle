module.exports = {
    name: 'BrowseService',
    func: function ($state, $http) {
        const sounds = [];
        const wads = [];
        const favoriteSounds = [];


        return {
            getSounds() {
                $http.get('/sounds').then(function(response){
                    angular.copy(response.data, sounds);
                    console.log(sounds);
                    for (let i = 0; i < sounds.length; i++) {
                        sounds[i].index = i;
                        wads.push(new Wad({
                            source: sounds[i].filePath,
                        }));
                    };
                });
            },

            getSoundFavorite() {
               $http.get('/sounds').then(function(soundResponse) {
                    $http.get('/favorites').then(function(favoriteResponse){
                        soundResponse.data.forEach(function(sound, index){
                            sound.index = index;
                            wads.push(new Wad({
                                source: sound.filePath,
                            }));
                            const findFavorite = function(id) {
                                return favoriteResponse.data.find(function(favorite){
                                    return favorite === id;
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
            },

            showAllSounds() {
                return sounds;
            },

            previewSounds(index) {
                wads[index].play();
                console.log(wads[index]);             
            },
        }; 
    },
};
