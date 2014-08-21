angular.module('gasNgoApp').directive('subwayPage', function(){


  return{
    restrict:'E',
    replace:true,
    templateUrl: '/views/subway-page.html',
    link: function(scope, elem, attrs){

    }
  };

});