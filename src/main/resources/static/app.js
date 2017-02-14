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
       $scope.testPlay = function playSound() {
            console.log('play sound');
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
        templateUrl: 'components/home/home.view.html',
    },
};
},{}],6:[function(require,module,exports){
module.exports = {
    name: 'kit',
    object: {
        templateUrl: 'components/kit/kit.view.html',
    },
};
},{}],7:[function(require,module,exports){
module.exports = {
    name: 'loginForm',
    object: {
        templateUrl: 'components/login/login.view.html',
    },
};
},{}],8:[function(require,module,exports){
module.exports = {
    name: 'signupForm',
    object: {
        templateUrl: 'components/signup/signup.view.html',
    },
};
},{}],9:[function(require,module,exports){
module.exports = {
    name: 'start',
    object: {
        templateUrl: 'components/start/start.view.html',
    },
};
},{}],10:[function(require,module,exports){
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
},{"../components/browse/browse.component":1,"../components/browse/browse.controller":2,"../components/browse/browse.tabs.controller":3,"../components/header/header.component":4,"../components/home/home.component":5,"../components/kit/kit.component":6,"../components/login/login.component":7,"../components/signup/signup.component":8,"../components/start/start.component":9,"../services/browse.service":11,"../services/home.service":12}],11:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){
module.exports = {
    name: 'HomeService',
    func: function ($http, $state) {
        return {
            // checkUser(id) {
            //     return $http.get('https://drumcircle1.herokuapp.com/user');
            // },
            
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
},{}]},{},[10]);
