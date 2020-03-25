// GENERAL SETTING
window.sr = ScrollReveal({ reset: true });

// Custom Settings

sr.reveal('.box_1', { 
  origin: 'right', 
  duration: 2250 
});

function sendEmail()
{
  console.log("HELLO")
  form_data = document.getElementById('message_form');
  myForm = new FormData(form_data);
  console.log("AJAX SENT")
  $.ajax({
          url: "send_email",
          type: "get",                         
          enctype: 'multipart/form-data',
          processData: false, 
          contentType: false,            
          data: myForm,
          success: function(response) {
              if(response == "1")
              {
                  alert("There has been an error sending your message.  Please check that all entered information is correct!")
              }
              else
              {
                  alert("Message successfully sent!  I will get back to you as soon as possible.")
              }
          },
          error: function (stat, err) {
            alert("There has been an error sending your message.  Please check that all entered information is correct!")
          }       
  });

}