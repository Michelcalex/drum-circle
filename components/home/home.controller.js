module.exports = {
    name: 'HomeController',
    func: function($scope, HomeService) {
       console.log ('hey');
       HomeService.getUser().then(function (name) {
        $scope.name = name;
       });
       
    //    .then(function(response){
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
    //    }
    //  });
    },
};

