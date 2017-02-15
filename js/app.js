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