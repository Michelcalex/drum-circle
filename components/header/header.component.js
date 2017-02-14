module.exports = {
    name: 'headerSection',
    object: {
        controller: 'HeaderController',
        controllerAs: '$ctrl',
        templateUrl: 'components/header/header.view.html',
        bindings: {
            loggedIn: '<',
        }
    },
};