module.exports = {
    name: 'BrowseService',
    func: function ($state, $http) {
        const sounds = [
            {
                name: 'Kick 808 1',
                source: 'http://localhost:8080/test-sounds/Kick/Kick 808 1.wav',
            },

        ];

        /** This is pushing everything in the sounds array into an array called wads.
         *  Then the for loop creates a new Wad for everything in the wads array.
         */ 


        return {
            showSounds() {
                return sounds;

            },
            previewSounds() {
                const wads = [];
                for (let i = 0; i < sounds.length; i++) {
                    wads.push(new Wad({
                        source: sounds[i].source,
                    }));
                };
                console.log(wads[0].name);
            }

        }; 

    },
};