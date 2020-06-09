// Dichiarazione variabili generali
var bottoneBurgerOpen = $('.header-right > a');
var bottoneBurgerClose = $('.hamburger-menu a.close ');

// METODO 1#
// Far comparire il menu
bottoneBurgerOpen.click(
  function(){
    var menu = $('.hamburger-menu');
    menu.addClass( 'active' );
  }
);

// Far scomparire il menu
bottoneBurgerClose.click(
  function(){
    var menu = $('.hamburger-menu');
    menu.removeClass( 'active' );
  }
);

// // METODO 2#
// // Far comparire il menu
// bottoneBurgerOpen.click(
//   function(){
//     var menu = $('.hamburger-menu');
//     menu.fadeIn(200);
//   }
// );
//
// // Far scomparire il menu
// bottoneBurgerClose.click(
//   function(){
//     var menu = $('.hamburger-menu');
//     menu.fadeOut(200);
//   }
// );
