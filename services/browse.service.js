module.exports = {
    name: 'BrowseService',
    func: function ($state, $http) {
        const sounds = [
            {
                name: 'Kick Cypress 1',
                source: 'http://localhost:55645/test-sounds/Kick Cypress 1.wav',
            },
            {
                name: 'Bleep MrBleep',
                source: 'http://localhost:55645/test-sounds/Bleep MrBleep.wav',
            },
        ];

        return {
            showSounds() {
                return sounds;
                // for (let i = 0; i < sounds.length; i++) {
                // console.log(sounds[i].icon);

                // }
            },
        };        

    },
};