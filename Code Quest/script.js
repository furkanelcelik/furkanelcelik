$(document).ready(function() {
    // Feedback form validation
    $.validator.addMethod("aboutValidation", function(value, element) {
        return value.trim().length >= 10;
    }, "<br><h1 class='errors'>Please enter at least 10 characters.</h1>");

    $("#rating").rateYo({
        starWidth: "40px",
        fullStar: true
    });

    $("#feedbackForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            sex: {
                required: true
            },
            about: {
                aboutValidation: true
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
            sex: {
                required: "<h2 class='errors'>Please select your gender.</h2>"
            },
            about: {
                aboutValidation: "<h2 class='errors'>Please enter at least 10 characters.</h2>"
            }
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "sex") {
                error.insertAfter('#gender');
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function(form) {
            $("#thankYouModal").modal();
            form.reset();
        }
    });


    function getJoke() {
        $.ajax({
            url: 'https://official-joke-api.appspot.com/jokes/programming/random',
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                var joke = data[0];
                var jokeHtml = '<p>' + joke.setup + '</p>';
                jokeHtml += '<p><strong>' + joke.punchline + '</strong></p>';
                $('#joke-container').html(jokeHtml);
            },
            error: function() {
                $('#joke-container').html('<p>Şaka yüklenemedi.</p>');
            }
        });
    }
    getJoke();
});
