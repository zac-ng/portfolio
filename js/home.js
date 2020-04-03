// GENERAL SETTING
window.sr = ScrollReveal({ reset: true });

// Custom Settings

sr.reveal('.box_1', { 
  origin: 'right', 
  duration: 2250 
});

var nav_dict = {"home":"home_box", "about":"about_box", "experience":"experience_box", "skills":"skills_box", "projects":"projects_box","contact":"contact_box"}

var indicator = document.querySelector('.nav-indicator');
var items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach(function (item) {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  indicator.style.width = "".concat(el.offsetWidth, "px");
  indicator.style.left = "".concat(el.offsetLeft, "px");
  indicator.style.backgroundColor = el.getAttribute('active-color');
  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}

items.forEach(function (item, index) {
  item.addEventListener('click', function (e) {
    handleIndicator(e.target);
    navTo = nav_dict[item.id]
    console.log(navTo)
    $('html,body').animate({
      scrollTop: $("#"+navTo).offset().top},
      'slow');
  });
  item.classList.contains('is-active') && handleIndicator(item);
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