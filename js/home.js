$(document).ready(function(){

    $('h3').click(function(){
      console.log('hello');
      $(this).next('p').toggle();
    //   $('.bio-body').slideToggle();
      $(this).children('.symbol').toggleClass('closed');
    });
  
  });