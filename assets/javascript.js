

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
    