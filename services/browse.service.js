module.exports = {
    name: 'BrowseService',
    func: function ($state, $http) {
        const playIcon = 'assets/play-button (2).png';
        const sounds = [
            {
                name: 'Kick Cypress 1',
                source: 'http://localhost:50383/test-sounds/Kick Cypress 1.wav',
                icon: playIcon, 
            },
            {
                name: 'Bleep MrBleep',
                source: 'http://localhost:50383/test-sounds/Bleep MrBleep.wav',
                icon: playIcon,
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