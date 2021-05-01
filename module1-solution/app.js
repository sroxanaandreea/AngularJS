(function () {
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        //$scope.Output = "Enjoy!";

        $scope.Check = function(){
            var n = document.getElementById('lunch-menu').value;
            const word = n.split(',');
            const word2 = word.filter(e => e);
            for (const i in word){
                word[i] =word[i].trim();
            }
            
            if(n === ""){
                $scope.Output ="Please enter data first"

            }else if (word.length == 1 && word[0] == ""){
                $scope.Output ="Please enter data first"
            }
            else if(word.length <= 3){
                $scope.Output = "Enjoy!"

            }else if(word.length > 3){
                $scope.Output = "Too much!"

            }
            
        };

    }
})();