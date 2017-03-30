var badInput = false;
$('#main-submit').click(function() {
    var email = document.getElementById('main-email').value;

    if (validateEmail(email)) {
      $.ajax({
          url: "https://formspree.io/colehjohn+turnip@gmail.com",
          type: "POST",
          data: { email: email },
          dataType: "json",
          cache: false,
          success: function() {
            document.getElementById('main-submit').className += 'good-bg';
            $('#main-submit').html('Success');
          },
          error: function() {
            document.getElementById('main-submit').className += 'bad-bg';
            $('#main-submit').html('Error');
          },
      });
    } else {
      document.getElementById('main-email').className += 'bad';
      badInput = true;
    }
});

$('#main-email').keyup(function() {
    if(badInput) {
      document.getElementById('main-email').classList.remove("bad");
    }
    document.getElementById('main-submit').classList.remove("bad-bg");
    document.getElementById('main-submit').classList.remove("good-bg");
    $('#main-submit').html('Submit');

});

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/*
$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "//formspree.io/usb@cs.purdue.edu",
                type: "POST",
                data: {
                  name: name,
                  _subject: subject,
                  _replyto: email,
                  message: message
                },
                dataType: "json",
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});
*/

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
