'use strict';

class OrderController {
  constructor(Auth, $mdSidenav, $log, $state) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.state = $state;
    this.thereIsAnItemSelected = false;
    this.tempTotalPrice = 0;
    this.oldItemSelected = null;
    this.sidenav = $mdSidenav;
    this.mocktabs = [{
      tabname: 'HOY',
      list: [
        {
          name: 'Sillpancho',
          price: 25,
          currency: 'Bs',
          shortDescription: 'Arroz, Carne, Ensalada, Papas fritas y Huevo',
          url: '../assets/images/silpancho.jpg'
        },
        {
          name: 'Sopa de mani',
          price: 10,
          currency: 'Bs',
          shortDescription: 'Mani, Fideo y Papas fritas',
          url: '../assets/images/sopademani.jpg'
        },
        {
          name: 'Lechon al horno',
          price: 25,
          currency: 'Bs',
          shortDescription: 'Lechon fresco, Ensalada y Papas cocidas',
          url: '../assets/images/lechon.jpg'
        },
        {
          name: 'Keperi',
          price: 25,
          currency: 'Bs',
          shortDescription: 'Carne de res, Arroz, Ensalada y Papas fritas',
          url: '../assets/images/keperi.jpg'
        }
      ]
    },
      {
        tabname: 'EXTRAS',
        list: [
          {
            name: 'Churrasco',
            price: 100,
            currency: 'Bs',
            shortDescription: 'Arroz con queso, Carne especial y Papas fritas',
            url: '../assets/images/carneparrilla.jpg'
          },
          {
            name: 'Aji de lengua',
            price: 10,
            currency: 'Bs',
            shortDescription: 'Lengua, Picante, Arroz y Papas cocidas',
            url: '../assets/images/picantelengua.jpg'
          },
          {
            name: 'Ceviche',
            price: 10,
            currency: 'Bs',
            shortDescription: 'Pescado fresco, Ensalada y Papas cocidas',
            url: '../assets/images/ceviche.jpg'
          },
          {
            name: 'Pique macho',
            price: 10,
            currency: 'Bs',
            shortDescription: 'Carbe de res, Papas fritas, Chorizo y Huevo',
            url: '../assets/images/piquemacho.jpg'
          }
        ]
      },
      {
        tabname: 'BEBIDAS',
        list: [
          {
            name: 'Coca cola',
            price: 11,
            currency: 'Bs',
            shortDescription: '2 litros',
            url: '../assets/images/coca2litros.jpg'
          },
          {
            name: 'Coca cola',
            price: 2,
            currency: 'Bs',
            shortDescription: '300 ml mini',
            url: '../assets/images/cocamini.jpg'
          },
          {
            name: 'Limonada',
            price: 10,
            currency: 'Bs',
            shortDescription: '2 litros Jarra',
            url: '../assets/images/limonada.jpg'
          },
          {
            name: 'Cerveza Huari',
            price: 13,
            currency: 'Bs',
            shortDescription: '600 ml',
            url: '../assets/images/huari.jpg'
          },
          {
            name: 'Ron Abuelo',
            price: 10,
            currency: 'Bs',
            shortDescription: 'Grande',
            url: '../assets/images/ronabuelo.jpg'
          }
        ]
      },
      {
        tabname: 'POSTRES',
        list: [
          {
            name: 'Napoleon',
            price: 11,
            currency: 'Bs',
            shortDescription: 'Crema',
            url: '../assets/images/napoleon.jpg'
          },
          {
            name: 'Gelatina',
            price: 2,
            currency: 'Bs',
            shortDescription: 'Vaso',
            url: '../assets/images/gelatina.jpg'
          },
          {
            name: 'Fruta variada',
            price: 10,
            currency: 'Bs',
            shortDescription: 'Papaya, Platano y Naranja',
            url: '../assets/images/fruta.jpg'
          },
          {
            name: 'Flan',
            price: 13,
            currency: 'Bs',
            shortDescription: 'Vaso',
            url: '../assets/images/flan.jpg'
          },
          {
            name: 'Dona',
            price: 10,
            currency: 'Bs',
            shortDescription: 'Leche porcion',
            url: '../assets/images/dona.jpg'
          }
        ]
      }];
    this.listOrder = [];
  }

  closeRight() {
    this.sidenav('right').close();
  }


  logout() {
    this.state.go('logout');
  }

  selectedItem(item) {
    if (item.selected) {
      item.selected = false;
      this.thereIsAnItemSelected = false;
    } else {
      if (this.oldItemSelected != null) {
        this.listOrder[_.indexOf(this.listOrder, this.oldItemSelected)].selected = false;
      }
      this.thereIsAnItemSelected = true;
      item.selected = true;
      this.oldItemSelected = item;
    }
  }

  addItemToTheOrder(item) {
    var foundsame = _.where(this.listOrder, { $$hashKey: item.$$hashKey });
    if (foundsame.length > 0) {
      var index = _.indexOf(this.listOrder, foundsame[0]);
      this.listOrder[index].quantity += 1;
    } else {
      item.quantity = 1;
      this.listOrder.unshift(item);
    }
    this.tempTotalPrice += item.price;
  }

  removeItemToTheOrder(item) {
      var index = _.indexOf(this.listOrder, item);
      if (this.listOrder[index].quantity === 1) {
        this.listOrder.splice(index, 1);
        this.oldItemSelected = null;
        item.selected = false;
        this.thereIsAnItemSelected = false;
      } else {
        this.listOrder[index].quantity -= 1;
      }
      this.tempTotalPrice -= item.price;
  }

  incrementItem() {
    this.addItemToTheOrder(this.oldItemSelected);
  }

  decrementItem() {
    this.removeItemToTheOrder(this.oldItemSelected);
  }
}

angular.module('mionioApp')
  .controller('OrderController', OrderController);
