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