$(document).ready(function(){

    // Changes _day to field name
    $('input[name=first_name]').keyup(function(){
      $('.initname').text( this.value + ' ' );
      $('.first-name').text( this.value + ' ' );

      var field = $('input[name=first_name]').val();

      if (field == '') {
        console.log('empty');
        $('.initname').text( '_' );
      }
    });

    // FAQ's accordian
    $('h3').click(function(){
      console.log('hello');
      $(this).next('p').toggle();
      $(this).children('.symbol').toggleClass('closed');
    });

  });