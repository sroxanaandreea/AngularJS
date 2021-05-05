(function () {
    'use strict';

    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var toBuy = this;
        	
        toBuy.items = [
            {
                name:'Bags of chips',
                quantity: 3
            },
            {
                name: 'Bottles of water',
                quantity: 2
            },
            {
                name: 'Soda',
                quantity: 3
            },
            {
                name: 'litres of Milk',
                quantity:4
            },
            {
                name: 'Pizza',
                quantity: 3
            },
            {
                name: 'Bags of cookies',
                quantity: 4
            }
          ];
        toBuy.moveItem = function(itemIndex) {
            ShoppingListCheckOffService.moveItem(itemIndex, toBuy.items);
        }
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var AlreadyBought = this;
        AlreadyBought.items = ShoppingListCheckOffService.items;
    }

    function ShoppingListCheckOffService() {

        var service = this;
        service.items = [];
        service.moveItem = function (itemIndex, arrayOfitems) {
            var item = {
                name: '',
                quantity: ''
            }
            item.name = arrayOfitems[itemIndex].name;
            item.quantity = arrayOfitems[itemIndex].quantity;
            arrayOfitems.splice(itemIndex, 1);
            service.items.push(item);
        };
    };

})();