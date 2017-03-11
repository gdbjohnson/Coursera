(function(global) {
  'use strict';


  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var tbc = this;

    tbc.items = ShoppingListCheckOffService.tobuy;

    tbc.buy = function(index) {
      console.log("bought");
      ShoppingListCheckOffService.buy(index);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var abc = this;

    abc.items = ShoppingListCheckOffService.bought;
  }

  function ShoppingListCheckOffService() {
    var service = this;

    service.bought = [];
    service.tobuy = [
      { name: "cookies", quantity: 10 },
      { name: "jam", quantity: 1 },
      { name: "bread", quantity: 2 },
      { name: "pizza", quantity: 3 },
      { name: "coke", quantity: 6 },
      { name: "butter", quantity: 1 }
    ];

    service.buy = function(index) {
      var item = service.tobuy[index];
      if (!item) return;

      service.bought.push(item);
      service.tobuy.splice(index, 1);
    }
  }



})(window);
