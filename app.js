(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

/* Function: ToBuyController */
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getToBuyList();

  buyList.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex)
  };
}

/* Function: AlreadyBoughtController */
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getAlreadyBoughtList();
}

/* Service: ShoppingListCheckOff */
function ShoppingListCheckOffService() {
  var service = this;

  // List of to buy items
  var toBuyList = [
    {name: "cookies", quantity: 10},
    {name: "soda drinks", quantity: 20},
    {name: "choco bar", quantity: 5},
    {name: "pop corn", quantity: 15},
    {name: "ice cream", quantity: 25}
  ];

  // List of already bought items
  var alreadyBoughtList = [];

  service.removeItem = function (itemIndex) {
    var item = toBuyList[itemIndex];

    alreadyBoughtList.push(item);
    toBuyList.splice(itemIndex, 1);
  };

  service.getToBuyList = function () {
    return toBuyList;
  };

  service.getAlreadyBoughtList = function () {
    return alreadyBoughtList;
  };
}

})();
