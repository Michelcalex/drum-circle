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
    func: function($scope, BrowseService, KitService, HomeService) {
        $scope.sounds = BrowseService.showAllSounds();
        $scope.testPlay = function playSound(index) {
            BrowseService.previewSounds(index);
        }; 

//favorite and unfavorite sounds
        $scope.favorite = function(sound) {
            KitService.markFavorite(sound);
        };

        $scope.unfavorite = function(sound) {
            KitService.markUnFavorite(sound);
        }

        HomeService.getUser().then(function (name) {
            $scope.username = name; // if username is undefined, nothing will render.
        });


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
            {title: 'All', src: '../../assets/all.png'},
            {title: 'Kick', src: '../../assets/kick.png' },
            {title: 'Snare', src: '../../assets/snare.png' },
            {title: 'Tom', src: '../../assets/tom.png' },
            {title: 'Hihat', src: '../../assets/hihat.png' },
            {title: 'Cymbal', src: '../../assets/cymbal.png' },
            {title: 'Percussion', src: '../../assets/percussion.png' },
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
        controller: 'SignupController',
        controllerAs: '$ctrl',
        templateUrl: 'components/signup/signup.view.html',
    },
};
},{}],10:[function(require,module,exports){
module.exports = {
    name: 'SignupController',
    func: function($scope, toastr, HomeService) {

        //Angular submit ----------------------
        // $scope.sendSignup = function(){
        //     HomeService.sendSignup($scope.username, $scope.password);
        // } 
        
        
        //Toastr alert - only if Angular way-----------------
        //toastr.success('Hello world!', 'Toastr fun!');
        // $scope.status = ' ';
        // $scope.customFullscreen = false;

        //  $scope.showAlert = function(ev) {
        //     $mdDialog.show(
        //     $mdDialog.alert()
        //         .parent(angular.element(document.querySelector('#popupContainer')))
        //         .clickOutsideToClose(true)
        //         .title('Awesomesauce')
        //         .textContent('You can now login with your username and password')
        //         .ariaLabel('Succesfully Signedup')
        //         .ok('Got it!')
        //         .targetEvent(ev)
        //     );
        // };
    }, 
};



},{}],11:[function(require,module,exports){
module.exports = {
    name: 'start',
    object: {
        controller: 'StartController',
        controllerAs: '$ctrl',
        templateUrl: 'components/start/start.view.html',
    },
};
},{}],12:[function(require,module,exports){
module.exports = {
    name: 'StartController',
    func: function($scope, HomeService) {
        selected = null,
        previous = null;
        $scope.selectedIndex = 0;
    }, 
};



},{}],13:[function(require,module,exports){
const app = angular.module('DrumCircleApp', [
    'ui.router',
    'ngMaterial',
    'ngAnimate', 
    'toastr',
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
    require('../components/signup/signup.controller'),
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
},{"../components/browse/browse.component":1,"../components/browse/browse.controller":2,"../components/header/header.component":3,"../components/home/home.component":4,"../components/home/home.controller":5,"../components/kit/kit.component":6,"../components/kit/kit.controller":7,"../components/login/login.component":8,"../components/signup/signup.component":9,"../components/signup/signup.controller":10,"../components/start/start.component":11,"../components/start/start.controller":12,"../services/browse.service":14,"../services/home.service":15,"../services/kit.service":16}],14:[function(require,module,exports){
module.exports = {
    name: 'BrowseService',
    func: function ($state, $http) {
        const sounds = [];
        const wads = [];
        // const favoriteSounds = [];

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


        }; 
    },
};

},{}],15:[function(require,module,exports){
module.exports = {
    name: 'HomeService',
    func: function ($http, $state) {
        return {
            getUser() {
                return $http.get('/user', {
                    transformResponse: undefined,
                }).then(function (response) {
                    return response.data;  
                    console.log(response.data);
                });
            },


            //Angular way to submit forms-----------------------------------
            // sendSignup(username, password) {
            //     $http.post('/sign-up', {
            //         username: username,
            //         password: password,
            //     }).then(function(response) {
            //         console.log('POST successful!');
            //     });
            // },

            // sendLogin() {
            //     $http.post('https://drumcircle1.herokuapp.com/login', {
            //         username: $scope.username,
            //         password: $scope.password
            //     }).then(function(response) {
            //         console.log('POST successful!');
            //     });
            // }, 
            
        }
    }
}
},{}],16:[function(require,module,exports){
module.exports = {
    name: 'KitService',
    func: function ($state, $http) {
        const favoriteList = [];
        const wads = [];

        $http.get('/favorites').then(function (favResponse) {
            angular.copy(favResponse.data, favoriteList);
            for (let i = 0; i < favoriteList.length; i++) {
                addWad(favoriteList[i]);
            };
        });

        /* Add a new Wad from a sound object */
        function addWad(sound) {
            sound.index = wads.length;

            wads.push(new Wad({
                source: sound.filePath,
            }));
        }

        return {
            getFavoriteList() {
                return favoriteList;
            },

            playKitSounds(index) {
                console.log(wads[index]);
                wads[index].play();
            },

            markFavorite(sound) {
                $http.post('/favorites/' + sound.id, {
                    id: sound.id,
                });
                sound.isFavorite = true;
                favoriteList.push(sound);
                addWad(sound);

                console.log(favoriteList);
            },

            markUnFavorite(sound) {
                $http.post('/unfavorite/' + sound.id, {
                    id: sound.id,
                })
                sound.isFavorite = false;
                for (let i = 0; i < favoriteList.length; i++) {
                    if (favoriteList[i] === sound) {
                        favoriteList.splice(i,1);
                    }
                }

            }
        }

    },
};

},{}]},{},[13]);
