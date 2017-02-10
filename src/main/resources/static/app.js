(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
    name: 'welcome',
    object: {
        controller: 'WelcomeController',
        controllerAs: '$ctrl',
        templateUrl: 'templates/welcome/welcome.temp.html',
    },
};
},{}],2:[function(require,module,exports){
module.exports = {
    name: 'WelcomeController',
    func: function($scope, WelcomeService) {
    //    $scope.username = 'My username';
        $scope.createUsername = '';
        $scope.createPassword='';
    },
};
},{}],3:[function(require,module,exports){
const app = angular.module('DrumCircleApp', ['ui.router']);


//Components ----------------------------------------------------
const components = [
    require('../components/welcome/welcome.component'),
];

for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].object);
}


//Controllers ----------------------------------------------------
const controllers = [
    require('../components/welcome/welcome.controller'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
}


//Services -------------------------------------------------------
const services = [
    require('../services/welcome.service'),
];

for (let i = 0; i < services.length; i++) {
    app.factory(services[i].name, services[i].func);
}


//States ---------------------------------------------------------

app.config(function ($stateProvider) {
    $stateProvider.state({
        name: 'start',
        url: '/start',
        component: 'welcome',
    });

    $stateProvider.state({
        name: 'index',
        url: '/index',
        component: 'welcome',
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
},{"../components/welcome/welcome.component":1,"../components/welcome/welcome.controller":2,"../services/welcome.service":4}],4:[function(require,module,exports){
module.exports = {
    name: 'WelcomeService',
    func: function ($http) {
        return {
            showForm() {
                console.log('show form now');
            }
        }
    }
}
},{}]},{},[3]);
