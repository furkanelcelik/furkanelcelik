$(document).ready(function() {
    // Add custom validation method for the "about" textarea
    $.validator.addMethod("aboutValidation", function(value, element) {
        return value.trim().length >= 10; // Minimum 10 characters required
    }, "<br><h1 class='errors'>Please enter at least 10 characters.</h1>");

    // Validate the form
    $("#rating").rateYo({
        starWidth: "40px",
        fullStar: true
    });
    $("#feedbackForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2 // Minimum length of 2 characters
            },
            email: {
                required: true,
                email: true // Validate email format
            },
            sex:{
                required:true
            }, // Gender selection required
            about: {
                aboutValidation: true // Custom validation rule for "about" textarea
            }
        },
        messages: {
            name: {
                required: "<h2 class='errors'>Please enter your name.</h2>",
                minlength: "<h2 class='errors'>Name must be at least 2 characters.</h2>"
            },
            email: {
                required: "<h2 class='errors'>Please enter your email address.</h2>",
                email: "<h2 class='errors'>Please enter a valid email address.</h2>"
            },
            sex:{
                required: "<h2 class='errors'>Please select your gender.</h2>"

            },
            about: {
                aboutValidation: "<h2 class='errors'>Please enter at least 10 characters.</h2>"
            }
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "sex") {
                // Eğer hata cinsiyet alanı ile ilgiliyse, sonraki kardeş elementin sonuna yerleştir
                error.insertAfter('#gender');
            } else {
                // Diğer hatalar için varsayılan yerleştirme işlemi
                error.insertAfter(element);
            }
        },
        submitHandler: function(form) {
            // Form submission logic here (e.g., AJAX)
            // Show thank you modal on successful form submission
            $("#thankYouModal").modal();
            // Clear form
            form.reset();
        }
    });
});