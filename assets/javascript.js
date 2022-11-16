

$(document).ready(function(){

    $('.saveBtn').on('click', function(){
        // This is the save button area which will also store to local storage
        let value = $(this).siblings('.description').val();
        let time = $(this).parent().attr('id');