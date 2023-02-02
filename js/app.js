// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('GeralCtrl', function($scope, $ionicActionSheet) {
  $scope.showActionSheet = function() {
  // Show the action sheet:
  $ionicActionSheet.show({
    buttons: [{
      text: 'WhatsApp'
    }, {
      text: 'Facebook'
    }, {
      text: 'Gmail'
    }],
    destructiveText: 'Cancelar',
    titleText: 'Compartilhe esta notícia',
    destructiveButtonClicked: function() {
      alert("Cancelado");
      return true;
    },
    buttonClicked: function(index, buttonObj) {
 switch (index) {
   case 0:
     alert("Compartilhando no WhatsApp");
     return true;
   case 1:
     alert("Compartilhando no Facebook");
     return true;
   case 2:
      alert("Compartilhando no Gmail");
      return true;
 }
}
  });
 };
})
.controller('AppCtrl', function($scope) {

})
.controller('contatoCtrl', function($scope) {

})

.config(function($stateProvider, $urlRouterProvider) {
 $stateProvider
   .state('app', {
   url: "/app",
   abstract: true,
   templateUrl: "templates/menu.html",
   controller: 'AppCtrl'
 })
  .state('app.principal', {
     url: "/principal",
     views: {
       'menuContent': {
         templateUrl: "templates/principal.html"
       }
     }
  })
 .state('app.tombraider', {
   url: "/tombraider",
   views: {
     'menuContent': {
       templateUrl: "templates/tombraider.html"
     }
   }
 })
 .state('app.leiatomb', {
   url: "/leiatomb",
   views: {
     'menuContent': {
       templateUrl: "templates/leiatomb.html",
       controller: 'GeralCtrl'
     }
   }
 })
 .state('app.switch', {
   url: "/switch",
   views: {
     'menuContent': {
       templateUrl: "templates/switch.html"
     }
   }
 })
 .state('app.leiaswitch', {
   url: "/leiaswitch",
   views: {
     'menuContent': {
       templateUrl: "templates/leiaswitch.html",
       controller: 'GeralCtrl'
     }
   }
 })
 .state('app.zelda', {
     url: "/zelda",
     views: {
       'menuContent': {
         templateUrl: "templates/zelda.html"
       }
     }
   })
 .state('app.leiazelda', {
   url: "/leiazelda",
   views: {
     'menuContent': {
       templateUrl: "templates/leiazelda.html",
       controller: 'GeralCtrl'
     }
   }
 })
 .state('app.yugioh', {
     url: "/yugioh",
     views: {
       'menuContent': {
         templateUrl: "templates/yugioh.html"
       }
     }
   })
 .state('app.leiayugioh', {
     url: "/leiayugioh",
     views: {
       'menuContent': {
         templateUrl: "templates/leiayugioh.html"
       }
     }
   })
 .state('app.drag', {
     url: "/drag",
     views: {
       'menuContent': {
         templateUrl: "templates/drag.html"
       }
     }
   })
 .state('app.leiadrag', {
     url: "/leiadrag",
     views: {
       'menuContent': {
         templateUrl: "templates/leiadrag.html"
       }
     }
   })
   .state('app.contato', {
     url: "/contato",
     views: {
       'menuContent': {
         templateUrl: "templates/contato.html",
         controller: 'contatoCtrl'
       }
     }
   });
 // If none of the above states are matched, use this as the fallback:
 $urlRouterProvider.otherwise('/app/principal');
})
