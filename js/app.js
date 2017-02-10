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
}).run(function ($location, $state) {
    // There is probably a cleaner way to do this; specifically it feels kinda
    // gross because we have to put file names in here (which could change).
    // Should work fine for you guys for now, but this will break if you
    // rename your html files.

    // Once routes are setup, move to a different default route based on 
    // what file we've loaded.


    // If the url includes 'index.html', redirect to the main app state.
    if ($location.absUrl().includes('index.html')) {

    } else {
        $state.go('welcome');
    }

});