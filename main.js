// Dichiarazione variabili generali
var bottoneMenuApertura = $('a.open i');
var bottoneMenuChiusura = $('a.close i');
var menu = $('.hamburger-menu');

// METODO 1#
// Far comparire il menu
bottoneMenuApertura.click(
  function(){
    menu.fadeIn(200);
  }
);

// Far scomparire il menu
bottoneMenuChiusura.click(
  function(){
    menu.fadeOut(200);
  }
);

// METODO 2#
// // Far comparire il menu
// bottoneMenuApertura.click(
//   function(){
//     menu.addClass( 'close' );
//   }
// );
//
// // Far scomparire il menu
// bottoneMenuChiusura.click(
//   function(){
//     menu.removeClass( 'close' );
//   }
// );
