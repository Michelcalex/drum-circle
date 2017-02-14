module.exports = {
    name: 'BrowseService',
    func: function ($state, $http) {
        const sounds = [
            {
                name: 'Kick Cypress 1',
                source: 'http://localhost:50383/test-sounds/Kick Cypress 1.wav',
                icon: 'play icon', 
            },
            {
                name: 'Bleep MrBleep',
                source: 'http://localhost:50383/test-sounds/Bleep MrBleep.wav',
                icon: 'play icon',
            },
        ];

        return {
            showSounds() {
                for (let i = 0; i < sounds.length; i++) {
                console.log(sounds[i].name);
                }
            },
        };        

    },
};