module.exports = {
    name: 'BrowseService',
    func: function ($state, $http) {
        const sounds = ['hello'];

        return {
            showSounds() {
                for (let i = 0; i < sounds.length; i++) {
                console.log(sounds[i]);
                }
            },
        };        

    },
};