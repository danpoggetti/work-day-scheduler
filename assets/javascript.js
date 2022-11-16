

$(document).ready(function(){

    $('.saveBtn').on('click', function(){
        // This is the save button area which will also store to local storage
        let value = $(this).siblings('.description').val();
        let time = $(this).parent().attr('id');
  
        // Found this on w3 tutorial for the time, value mark
        localStorage.setItem(time,value);
    
    $('.alert').addClass('show');
    
    setTimeout(function () {
        $('.alert').removeClass('show');
      }, 1000);
    });
    
  // show saved items from LocalStorage
  
  $('#nine_am .description').val(localStorage.getItem('nine_am'));
  $('#ten_am .description').val(localStorage.getItem('ten_am'));
  $('#eleven_am .description').val(localStorage.getItem('eleven_am'));
  $('#twelve_pm .description').val(localStorage.getItem('tweleve_pm'));
  $('#one_pm .description').val(localStorage.getItem('one_pm'));
  $('#two_pm .description').val(localStorage.getItem('two_pm'));
  $('#three_pm .description').val(localStorage.getItem('three_pm'));
  $('#four_pm .description').val(localStorage.getItem('four_pm'));
  $('#five_pm .description').val(localStorage.getItem('five_pm'));
  });