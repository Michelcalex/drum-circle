module.exports = {
    name: 'BrowseService',
    func: function ($state, $http) {
        const sounds = [];
        const wads = [];

        $http.get('/sounds').then(function (response) {
            angular.copy(response.data, sounds);

            for (let i = 0; i < sounds.length; i++) {
                sounds[i].index = i;
                wads.push(new Wad({
                    source: sounds[i].filePath,
               
                }));
            };


        });

        return {
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