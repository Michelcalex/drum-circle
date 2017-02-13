// window.addEventListener('load', function() {
//     checkUser(id);
// });


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
    //require('../components/logout/logout.component'),
    //require('../components/home/welcome.component'),
];

for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].object);
}


//Controllers ----------------------------------------------------
const controllers = [
    require('../components/header/header.controller'),
    require('../components/browse/browse.controller'),
    // require('../components/login/login.controller'),
    // require('../components/signup/signup.controller'),
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

    // $stateProvider.state({
    //     name: 'logout',
    //     url: '/start',
    //     component: 'logout',
    // });

}).run(function ($location, $state) {
    // There is probably a cleaner way to do this; specifically it feels kinda
    // gross because we have to put file names in here (which could change).
    // Should work fine for you guys for now, but this will break if you
    // rename your html files.

    // Once routes are setup, move to a different default route based on 
    // what file we've loaded.


    // If the url includes 'index.html', redirect to the main app state.
    // if ($location.absUrl().includes('index.html')) {
    //     $state.go('index');
    // } else {
    //     $state.go('start');
    // }

});