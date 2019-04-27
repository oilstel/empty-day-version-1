$(document).ready(function(){

    // Changes instances of '_day' to first name field
    $('input[name=firstname]').keyup(function() {
      $('.initname').text( this.value + ' ' );
      $('.firstname').val( this.value );

      var field = $('input[name=firstname]').val();

      if (field == '') {
        $('.initname').text( '_' );
      }
    });

    // Populates the website with leaves
    names = ['Elliott', 'Laurel', 'Ralf', 'Damian', 'Josh', 'Lily', 'Mary Helena', 'Michael', 'George', 'Toby', 'Mary', 'Andrew', 'Diana', 'Sara', 'Becca', 'Adam', 'Scott', 'Morgan', 'Sean', 'Doris', 'Joel', 'Nathan', 'Dennis', 'Adriana', 'Julia', 'James', 'Marc', 'Penny', 'Sprout', 'Tara', 'Brandon', 'Cole', 'Hannah', 'Willa', 'Cameron', 'Luke', 'Dimitra', 'Robert', 'Colin', 'Dan', 'Pirijan', 'Lana', 'Wilson', 'Fred', 'Haegen', 'Yanny', 'John', 'Linda', 'Perry', 'Jose', 'Carlos', 'Rebecca', 'Rynda', 'Max', 'Sox', 'Mario', 'Zoe', 'Joseph', 'Kolton', 'Cedar', 'Mark', 'Harrison', 'Allison', 'Kait', 'Eaton'];

    $.each(names, function(index, name) {
      $('.names').append(`
        <div class="leaf"><label>New York</label>${name}</div>
      `);
    });

    // FAQ's accordian
    $('h3').click(function(){
      console.log('hello');
      $(this).next('p').toggle();
      $(this).children('.symbol').toggleClass('closed');
    });

    // Fade out page button
    $('.fadeout').click(function(){
      $('body').fadeOut(2000);
    });

    // Countdown to Empty Day

    function displayTimeRemaining(emptyday_date){
      var t = Date.parse(emptyday_date) - Date.parse(new Date());
      var days = Math.floor( t/(1000*60*60*24) - 7);
      var clock = document.getElementById('days')
      clock.innerHTML = days;
    }

    var emptyday_date = '2019-10-19';

    displayTimeRemaining(emptyday_date);

    // Count number of leaves
    // to come...


});
