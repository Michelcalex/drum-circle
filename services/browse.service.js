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



        // ------This was for testing before /sounds database was setup
        // const sounds = [
        //     {
        //         name: 'Kick 808 1',
        //         source: 'http://localhost:8080/test-sounds/Kick/Kick 808 1.wav',
        //         type: 'Kick',
        //     },
        //     {
        //         name: 'Rim Mononoke',
        //         source: 'http://localhost:8080/test-sounds/Snare/Rim Mononoke.wav',
        //         type: 'Snare',
        //     },

        // ];

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