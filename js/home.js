// GENERAL SETTING
window.sr = ScrollReveal({ reset: true });

// Custom Settings

sr.reveal('.box_1', { 
  origin: 'right', 
  duration: 2250 
});

function sendEmail()
{
      var form = $('#message_form').serializeArray();
      if( form[0].value.length == 0 || form[1].value.length == 0 || form[2].value.length == 0)
      {
        swal(
          'Error!',
          '<b style="color:red;">Please fill in all fields!</b>',
          'error'
        )
      }
      else
      {
          $.ajax({
            url: "send_email",
            type: "get",
            data:  $('#message_form').serialize(),
            success: function(response) {
              
              if(response == 1)
              {
                alert("There was an error sending your message, please check that all your information is accurate and valid!")
              }
              
              else if(response == 0)
              {
                  swal(
                    'Message Sent!',
                    '<b style="color:green;">I will get back to you as soon as I can!</b>',
                    'success'
                  )
                  document.getElementById("message_form").reset(); 
              }
          },
          error: function (stat, err) {
              alert("There was an error sending your email, please check that all your information is accurate and valid!")
          }    
        });
      }
}