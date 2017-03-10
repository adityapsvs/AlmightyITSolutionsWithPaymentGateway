$(document).ready(function(){ 
  $('#characterLeft').text('140 characters left');
  $('#message').keydown(function () {
    var max = 140;
    var len = $(this).val().length;
    if (len >= max) {
        $('#characterLeft').text('You have reached the limit');
        $('#characterLeft').addClass('contct-form-red');
        $('#btnSubmit').addClass('disabled');            
    } 
    else {
        var ch = max - len;
        $('#characterLeft').text(ch + ' characters left');
        $('#btnSubmit').removeClass('disabled');
        $('#characterLeft').removeClass('contact-form-red');            
    }
  });    
});