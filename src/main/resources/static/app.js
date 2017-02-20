(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
    name: 'browse',
    object: {
        controller: 'BrowseController',
        controllerAs: '$ctrl',
        templateUrl: 'components/browse/browse.view.html',
        bindings: {
            preview: '<',
        },
    },
};
},{}],2:[function(require,module,exports){
module.exports = {
    name: 'BrowseController',
    func: function($scope, BrowseService) {
        $scope.sounds = BrowseService.showAllSounds();
        $scope.testPlay = function playSound(index) {
            BrowseService.previewSounds(index);
        }; 

//favorite and unfavorite sounds
        $scope.favorite = function(sound) {
            BrowseService.markFavorite(sound);
        };

        $scope.unfavorite = function(sound) {
            BrowseService.markUnFavorite(sound);
        }




//filter sounds and tab functionality 
        $scope.showSounds = [];

        $scope.filterSounds = function (category) {
            // console.log(`Filtering ${category}`)
            $scope.showSounds = [];
            for (let i = 0; i < $scope.sounds.length; i++) {
                if (category === $scope.sounds[i].category || category === 'All') {
                    $scope.showSounds.push($scope.sounds[i]);
                }
            };
            
        };
        $scope.filterSounds('All');

        let tabs = [
            {title: 'All' },
            {title: 'Kick' },
            {title: 'Snare' },
            {title: 'Tom' },
            {title: 'Hihat' },
            {title: 'Cymbal' },
            {title: 'Percussion' },
        ], 
        selected = null,
        previous = null;
        $scope.tabs = tabs;
        $scope.selectedIndex = 0;
    }, 
};



},{}],3:[function(require,module,exports){
module.exports = {
    name: 'headerSection',
    object: {
        templateUrl: 'components/header/header.view.html',
        bindings: {
            loggedIn: '<',
        }
    },
};
},{}],4:[function(require,module,exports){
module.exports = {
    name: 'home',
    object: {
        controller: 'HomeController',
        controllerAs: '$ctrl',
        templateUrl: 'components/home/home.view.html',
    },
};
},{}],5:[function(require,module,exports){
module.exports = {
    name: 'HomeController',
    func: function($scope, HomeService) {
       console.log ('hey');
       HomeService.getUser().then(function (name) {
        $scope.name = name;
       });
    },
};


},{}],6:[function(require,module,exports){
module.exports = {
    name: 'kit',
    object: {
        controller: 'KitController',
        controllerAs: '$ctrl',
        templateUrl: 'components/kit/kit.view.html',
    },
};
},{}],7:[function(require,module,exports){
module.exports = {
    name: 'KitController',
    func: function($scope, KitService, dragulaService) {
        $scope.favoriteList = KitService.getFavoriteList();
        $scope.playFavorites = function playKit(index) {
            KitService.playKitSounds(index);
        };

        dragulaService.options($scope, 'first-bag', {
            copy: false
        });
    },
};


},{}],8:[function(require,module,exports){
module.exports = {
    name: 'loginForm',
    object: {
        templateUrl: 'components/login/login.view.html',
    },
};
},{}],9:[function(require,module,exports){
module.exports = {
    name: 'signupForm',
    object: {
        templateUrl: 'components/signup/signup.view.html',
    },
};
},{}],10:[function(require,module,exports){
module.exports = {
    name: 'start',
    object: {
        controller: 'StartController',
        controllerAs: '$ctrl',
        templateUrl: 'components/start/start.view.html',
    },
};
},{}],11:[function(require,module,exports){
module.exports = {
    name: 'StartController',
    func: function($scope) {
        selected = null,
        previous = null;
        $scope.selectedIndex = 0;
    }, 
};



},{}],12:[function(require,module,exports){
const app = angular.module('DrumCircleApp', [
    'ui.router',
    'ngMaterial',
    angularDragula(angular),
]);

//Components ----------------------------------------------------
const components = [
    require('../components/home/home.component'),
    require('../components/header/header.component'),
    require('../components/login/login.component'),
    require('../components/browse/browse.component'),
    require('../components/signup/signup.component'),
    require('../components/start/start.component'),
    require('../components/kit/kit.component'),
];

for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].object);
}


//Controllers ----------------------------------------------------
const controllers = [
    require('../components/browse/browse.controller'),
    require('../components/home/home.controller'),
    require('../components/kit/kit.controller'),
    require('../components/start/start.controller'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
}


//Services -------------------------------------------------------
const services = [
    require('../services/home.service'),
    require('../services/browse.service'),
    require('../services/kit.service'),
];

for (let i = 0; i < services.length; i++) {
    app.factory(services[i].name, services[i].func);
}




//Filters -------------------------------------------------------
app.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});



//States ---------------------------------------------------------

app.config(function ($stateProvider) {
    $stateProvider.state({
        name: 'start',
        url: '/start',
        component: 'start',
    });

    $stateProvider.state({
        name: 'index',
        url: '/index',
        component: 'home',
    });

    $stateProvider.state({
        name: 'login',
        url: '/start',
        component: 'start',
    });

    $stateProvider.state({
        name: 'browse',
        url: '/browse',
        component: 'browse',
    });

    $stateProvider.state({
        name: 'kit',
        url: '/kit',
        component: 'kit',
    });

    $stateProvider.state({
        name: 'home',
        url: '/',
    });
});
},{"../components/browse/browse.component":1,"../components/browse/browse.controller":2,"../components/header/header.component":3,"../components/home/home.component":4,"../components/home/home.controller":5,"../components/kit/kit.component":6,"../components/kit/kit.controller":7,"../components/login/login.component":8,"../components/signup/signup.component":9,"../components/start/start.component":10,"../components/start/start.controller":11,"../services/browse.service":13,"../services/home.service":14,"../services/kit.service":15}],13:[function(require,module,exports){
module.exports = {
    name: 'BrowseService',
    func: function ($state, $http) {
        const sounds = [];
        const wads = [];
        const favoriteSounds = [];

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

            markFavorite(sound) {
                $http.post('/favorites/' + sound.id, {
                    id: sound.id,
                });
                sound.isFavorite = true;
                favoriteSounds.push(sound);
                console.log(favoriteSounds);
            }, 

            markUnFavorite(sound) {
                $http.post('/unfavorite/' + sound.id, {
                    id: sound.id,
                })
                sound.isFavorite = false;
                for(let i=0; i < favoriteSounds.length; i++) {
                    if(favoriteSounds[i] === sound) {
                        console.log('remove from array')
                    }
                }
                
            }
        }; 
    },
};

},{}],14:[function(require,module,exports){
module.exports = {
    name: 'HomeService',
    func: function ($http, $state) {
        return {
            getUser() {
                return $http.get('/user', {
                    transformResponse: undefined,
                }).then(function (response) {
                    return response.data;  
                });
            },
        }
    }
}
},{}],15:[function(require,module,exports){
module.exports = {
    name: 'KitService',
    func: function ($state, $http) {
        const favoriteList =[];
        const wads = [];

        $http.get('/favorites').then(function(favResponse) {
            angular.copy(favResponse.data, favoriteList);
            for (let i = 0; i < favoriteList.length; i++) {
                favoriteList[i].index = i;
                wads.push(new Wad({
                    source: favoriteList[i].filePath,
                }));
            };
        });

        console.log(favoriteList);
        console.log(wads);

        return {
            getFavoriteList() {
                return favoriteList;
            },

            playKitSounds(index) {
                wads[index].play();
            },
        }
    
    },
};

},{}]},{},[12]);
