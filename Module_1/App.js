(function () {

    angular.module('MyApp', [])
    .controller('MyController', LunchCheckController)

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
          $scope.Checkfood = function () {
              var num = countItems($scope.Fooditem);
              $scope.Message = ShowMessage(num);
          };

          function countItems(Fooditem) {
              var count = 0;
              if (Fooditem) {
                  var array = Fooditem.split(',');
                  for (var i in array) {
                      if (array[i].trim().length != 0) {
                          count++;
                      }
                  }
              }
              return count;
          }

          function ShowMessage(num) {
              if (num === 0) {
                  return 'Please enter food item';
              }
              else if (num <= 3) {
                  return 'Enjoy!';
              } else {
                  return 'Too much!';
              }
          }
    }

 
})();