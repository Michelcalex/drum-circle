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
        name: 'welcome',
        url: '/login',
        component: 'welcome',
    });
});