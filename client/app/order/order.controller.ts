'use strict';

class OrderController {
  constructor(Auth, $mdSidenav, $log, $state) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.state = $state;
    this.mocktabs = [{
      tabname: 'HOY',
      list: [
        {
          itenname: 'Sillpancho',
          price: 25,
          currency: 'Bs',
          description: 'Arroz, Carne, Ensalada, Papas fritas y Huevo',
          url: '../assets/images/silpancho.jpg'
        },
        {
          itenname: 'Sopa de mani',
          price: 10,
          currency: 'Bs',
          description: 'Mani, Fideo y Papas fritas',
          url: '../assets/images/sopademani.jpg'
        },
        {
          itenname: 'Lechon al horno',
          price: 25,
          currency: 'Bs',
          description: 'Lechon fresco, Ensalada, Papas cocidas y Platanos cocidos',
          url: '../assets/images/lechon.jpg'
        },
        {
          itenname: 'Keperi',
          price: 25,
          currency: 'Bs',
          description: 'Carne de res, Arroz, Ensalada y Papas fritas',
          url: '../assets/images/keperi.jpg'
        }
      ]
    },
    {
      tabname: 'EXTRAS',
      list: [
        {
          itenname: 'Churrasco',
          price: 100,
          currency: 'Bs',
          description: 'Arroz con queso, Carne especial, Ensalada y Papas fritas',
          url: '../assets/images/carneparrilla.jpg'
        },
        {
          itenname: 'Aji de lengua',
          price: 10,
          currency: 'Bs',
          description: 'Lengua, Picante, Arroz y Papas cocidas',
          url: '../assets/images/picantelengua.jpg'
        },
        {
          itenname: 'Ceviche',
          price: 10,
          currency: 'Bs',
          description: 'Pescado fresco, Ensalada y Papas cocidas',
          url: '../assets/images/ceviche.jpg'
        },
        {
          itenname: 'Pique macho',
          price: 10,
          currency: 'Bs',
          description: 'Carbe de res, Papas fritas, Chorizo y Huevo',
          url: '../assets/images/piquemacho.jpg'
        }
      ]
    },
    {
      tabname: 'BEBIDAS',
      list: [
        {
          itenname: 'Coca cola',
          price: 11,
          currency: 'Bs',
          description: '2 litros',
          url: '../assets/images/coca2litros.jpg'
        },
        {
          itenname: 'Coca cola',
          price: 2,
          currency: 'Bs',
          description: '300 ml mini',
          url: '../assets/images/cocamini.jpg'
        },
        {
          itenname: 'Limonada',
          price: 10,
          currency: 'Bs',
          description: '2 litros Jarra',
          url: '../assets/images/limonada.jpg'
        },
        {
          itenname: 'Cerveza Huari',
          price: 13,
          currency: 'Bs',
          description: '600 ml',
          url: '../assets/images/huari2.jpg'
        },
        {
          itenname: 'Ron Abuelo',
          price: 10,
          currency: 'Bs',
          description: 'Grande',
          url: '../assets/images/ronabuelo.jpg'
        }
      ]
    },
    {
      tabname: 'POSTRES',
      list: [
        {
          itenname: 'Napoleon',
          price: 11,
          currency: 'Bs',
          description: 'Crema',
          url: '../assets/images/napoleon.jpg'
        },
        {
          itenname: 'Gelatina',
          price: 2,
          currency: 'Bs',
          description: ['Vaso'],
          url: '../assets/images/gelatina.jpg'
        },
        {
          itenname: 'Fruta variada',
          price: 10,
          currency: 'Bs',
          description: 'Papaya, Platano y Naranja',
          url: '../assets/images/fruta.jpg'
        },
        {
          itenname: 'Flan',
          price: 13,
          currency: 'Bs',
          description: 'Vaso',
          url: '../assets/images/flan.jpg'
        },
        {
          itenname: 'Dona',
          price: 10,
          currency: 'Bs',
          description: 'Leche porcion',
          url: '../assets/images/dona.jpg'
        }
      ]
    }];
  }

  logout() {
    this.state.go('logout');
  }
}

angular.module('mionioApp')
  .controller('OrderController', OrderController);
