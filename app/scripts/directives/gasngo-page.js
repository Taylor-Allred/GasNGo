angular.module('gasNgoApp').directive('gasngoPage', function(){


  return{
    restrict:'E',
    replace:true,
    templateUrl: '/views/gasngo-page.html',
    link: function(scope, elem, attrs){

    }
  };

});