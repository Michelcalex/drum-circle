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
    func: function($scope) {
       $scope.username = 'My username';
    },
};
},{}],3:[function(require,module,exports){
const app = angular.module('DrumCircleApp', ['ui.router']);


//Components ---------------------------------------------------
const components = [
    require('../components/welcome/welcome.component'),
];

for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].object);
}


//Controllers ---------------------------------------------------
const controllers = [
    require('../components/welcome/welcome.controller'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
}


//States ---------------------------------------------------------

app.config(function ($stateProvider) {
    $stateProvider.state({
        name: 'welcome',
        url: '/login',
        component: 'welcome',
    });
});
},{"../components/welcome/welcome.component":1,"../components/welcome/welcome.controller":2}]},{},[3]);
