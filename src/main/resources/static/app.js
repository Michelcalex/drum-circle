(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
    name: 'browse',
    object: {
        templateUrl: 'browse/browse.view.html',
    },
};
},{}],2:[function(require,module,exports){
module.exports = {
    name: 'headerSection',
    object: {
        controller: 'HeaderController',
        controllerAs: '$ctrl',
        templateUrl: 'header/header.view.html',
        bindings: {
            loggedIn: '<',
        }
    },
};
},{}],3:[function(require,module,exports){
module.exports = {
    name: 'HeaderController',
    func: function($scope) {
        console.log('I am header controller');
        //Need to write login function!
        $scope.loggedin = function() {
            
        }
    },
};
},{}],4:[function(require,module,exports){
module.exports = {
    name: 'home',
    object: {
        templateUrl: 'home/home.view.html',
    },
};
},{}],5:[function(require,module,exports){
module.exports = {
    name: 'kit',
    object: {
        templateUrl: 'kit/kit.view.html',
    },
};
},{}],6:[function(require,module,exports){
module.exports = {
    name: 'loginForm',
    object: {
        controller: 'LoginController',
        controllerAs: '$ctrl',
        templateUrl: 'login/login.view.html',
    },
};
},{}],7:[function(require,module,exports){
module.exports = {
    name: 'LoginController',
    func: function($scope, HomeService) {
        console.log('I am login controller');
        $scope.userName = '';
        $scope.userPassword = '';

        $scope.addUserLogin = function() {
            HomeService.sendLogin($scope.userName, $scope.userPassword);
        };
    }
};
},{}],8:[function(require,module,exports){
module.exports = {
    name: 'logout',
    object: {
        templateUrl: 'logout/logout.view.html',
    },
};
},{}],9:[function(require,module,exports){
module.exports = {
    name: 'signupForm',
    object: {
        controller: 'SignupController',
        controllerAs: '$ctrl',
        templateUrl: 'signup/signup.view.html',
    },
};
},{}],10:[function(require,module,exports){
module.exports = {
    name: 'SignupController',
    func: function($scope, HomeService) {
        console.log('I am signup controller');
        $scope.signupName = '';
        $scope.signupPassword = '';

        $scope.addUserSignup = function() {
            HomeService.sendSignup($scope.signupName, $scope.signupPassword);
        };
    }
};
},{}],11:[function(require,module,exports){
module.exports = {
    name: 'start',
    object: {
        templateUrl: 'start/start.view.html',
    },
};
},{}],12:[function(require,module,exports){
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
    require('../components/logout/logout.component'),
    //require('../components/home/welcome.component'),
    //require('../components/welcome/welcome.header.component'),
];

for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].object);
}


//Controllers ----------------------------------------------------
const controllers = [
    require('../components/header/header.controller'),
    require('../components/login/login.controller'),
    require('../components/signup/signup.controller'),
    //require('../components/welcome/welcome.controller'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
}


//Services -------------------------------------------------------
const services = [
    require('../services/home.service'),
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

    $stateProvider.state({
        name: 'logout',
        url: '/logout',
        component: 'logout',
    });

}).run(function ($location, $state) {
    // There is probably a cleaner way to do this; specifically it feels kinda
    // gross because we have to put file names in here (which could change).
    // Should work fine for you guys for now, but this will break if you
    // rename your html files.

    // Once routes are setup, move to a different default route based on 
    // what file we've loaded.


    // If the url includes 'index.html', redirect to the main app state.
    if ($location.absUrl().includes('index.html')) {
        $state.go('index');
    } else {
        $state.go('start');
    }

});
},{"../components/browse/browse.component":1,"../components/header/header.component":2,"../components/header/header.controller":3,"../components/home/home.component":4,"../components/kit/kit.component":5,"../components/login/login.component":6,"../components/login/login.controller":7,"../components/logout/logout.component":8,"../components/signup/signup.component":9,"../components/signup/signup.controller":10,"../components/start/start.component":11,"../services/home.service":13}],13:[function(require,module,exports){
module.exports = {
    name: 'HomeService',
    func: function ($http, $state) {
        return {
            sendLogin(username, userpassword) {
                $http.post('https://drumcircle1.herokuapp.com/login', {
                    username: username,
                    password: userpassword
                }).then(function(response) {
                    console.log('POST successful!');
                });
            }, 
            // sendSignup(username, userpassword) {
            //     $http.post('https://drumcircle1.herokuapp.com/sign-up', {
            //         username: username,
            //         password: userpassword
            //     }).then(function(response) {
            //         console.log('POST successful!');
            //         $state.go('index');
            //     });
            // }
        }
    }
}
},{}]},{},[12]);
