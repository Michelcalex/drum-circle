module.exports = {
    name: 'BrowseService',
    func: function ($state, $http) {
        const sounds = [
            {
                name: 'Kick 808 1',
                source: 'http://localhost:8080/test-sounds/Kick/Kick 808 1.wav',
            },

        ];
        
        const wads = [];
        for (let i = 0; i < sounds.length; i++) {
            wads.push(new Wad({
                source: sounds[i].source,
            }));
        };


        return {
            showSounds() {
                return sounds;

            },
            previewSounds() {
                wads[0].play();
                console.log(wads[0]);
            }

        }; 

    },
};