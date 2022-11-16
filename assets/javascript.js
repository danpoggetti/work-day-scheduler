

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

  
  // Set the text area id to 24-hour clock
  const hourTimeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]
  const currentStage = moment().hour()
  const currentDay = $("#currentDay")
  
  
  // I want the time to display: month, day, year and time. User needs to refresh to update time of day
  const systemTime = moment().format("dddd, MMMM DD, YYYY - hh:mm a")
  currentDay.text(systemTime)