// Dichiarazione variabili generali
var bottoneMenuApertura = $('.fa-bars');
var bottoneMenuChiusura = $('.fa-times');
var menu = $('.hamburger-menu');

// Far comparire il menu
bottoneMenuApertura.click(
  function(){
    menu.fadeIn(500);
  }
);

// Far scomparire il menu
bottoneMenuChiusura.click(
  function(){
    menu.fadeOut(500);
  }
);
