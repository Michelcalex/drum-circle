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
       $scope.sounds = BrowseService.showSounds();
       $scope.testPlay = function playSound(index) {
            BrowseService.previewSounds(index);
       }; 
    }, 
};
},{}],3:[function(require,module,exports){
module.exports = {
    name: 'TabsController',
    func: function($scope) {
        $scope.tab = 1;
        $scope.setTab = function(newTab){
            $scope.tab = newTab;
        };

        $scope.isSet = function(tabNum){
            return $scope.tab === tabNum;
        };
    }
};
},{}],4:[function(require,module,exports){
module.exports = {
    name: 'headerSection',
    object: {
        templateUrl: 'components/header/header.view.html',
        bindings: {
            loggedIn: '<',
        }
    },
};
},{}],5:[function(require,module,exports){
module.exports = {
    name: 'home',
    object: {
        controller: 'HomeController',
        controllerAs: '$ctrl',
        templateUrl: 'components/home/home.view.html',
    },
};
},{}],6:[function(require,module,exports){
module.exports = {
    name: 'HomeController',
    func: function($scope, HomeService) {
       console.log ('hey');
       HomeService.getUser().then(function (name) {
        $scope.name = name;
       });
       
    //    .then(function(response){
    //        let user = response.data;
    //        console.log(user);
    //    })
    //    HomeService.getUser().then(function(response) {
    //        let user = response.data;
    //        if (user !== null) {
    //            console.log('cool dude')
    //        } else {
    //            console.log("this is not working");
    //        console.log(user);
    //    }
    //  });
    },
};


},{}],7:[function(require,module,exports){
module.exports = {
    name: 'kit',
    object: {
        templateUrl: 'components/kit/kit.view.html',
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
        templateUrl: 'components/start/start.view.html',
    },
};
},{}],11:[function(require,module,exports){
const app = angular.module('DrumCircleApp', ['ui.router']);


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
    require('../components/browse/browse.tabs.controller'),
    require('../components/home/home.controller'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
}


//Services -------------------------------------------------------
const services = [
    require('../services/home.service'),
    require('../services/browse.service'),
];

for (let i = 0; i < services.length; i++) {
    app.factory(services[i].name, services[i].func);
}


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
});

// window.addEventListener('load', function() {
//     getUser().then(function(response) {
//         let answer = response;
//         console.log(answer);
//     })
// })


// .then(function(response){
    //        let user = response.data;
    //        console.log(user);
    //    })
    //    HomeService.getUser().then(function(response) {
    //        let user = response.data;
    //        if (user !== null) {
    //            console.log('cool dude')
    //        } else {
    //            console.log("this is not working");
    //        console.log(user);
},{"../components/browse/browse.component":1,"../components/browse/browse.controller":2,"../components/browse/browse.tabs.controller":3,"../components/header/header.component":4,"../components/home/home.component":5,"../components/home/home.controller":6,"../components/kit/kit.component":7,"../components/login/login.component":8,"../components/signup/signup.component":9,"../components/start/start.component":10,"../services/browse.service":12,"../services/home.service":13}],12:[function(require,module,exports){
module.exports = {
    name: 'BrowseService',
    func: function ($state, $http) {
        const sounds = [
            {
                name: 'Kick 808 1',
                source: 'http://localhost:8080/test-sounds/Kick/Kick 808 1.wav',
            },
            {
                name: 'Rim Mononoke',
                source: 'http://localhost:8080/test-sounds/Snare/Rim Mononoke.wav',
            },

        ];
        
        const wads = [];
        for (let i = 0; i < sounds.length; i++) {
            sounds[i].index = i;

            wads.push(new Wad({
                source: sounds[i].source,
            }));
        };



        return {
            showSounds() {
                return sounds;

            },
            previewSounds(index) {
                // let wads = [];
                // for (let i = 0; i < sounds.length; i++) {
                //     wads.push(new Wad({
                //         source: sounds[i].source,
                //     }));
                    // if (wads[i].source === sounds[i].source) {
                        wads[index].play();
                        // console.log(wads[i]);
                    // };   
    
                // let i = wads[0];
                
            },

        }; 

    },
};
},{}],13:[function(require,module,exports){
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
            
            // sendLogin(username, userpassword) {
            //     $http.post('https://drumcircle1.herokuapp.com/login', {
            //         username: username,
            //         password: userpassword
            //     }).then(function(response) {
            //         console.log('POST successful!');
            //     });
            // }, 
            // sendSignup(username, userpassword) {
            //     $http.post('https://drumcircle1.herokuapp.com/sign-up', {
            //         username: username,
            //         password: userpassword
            //     }).then(function(response) {
            //         console.log('POST signup successful!');
            //         $state.go('index');
            //     });
            // }
        }
    }
}
},{}]},{},[11]);
