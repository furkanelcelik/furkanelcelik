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

    // AJAX request to an external file (feedback.json)
    $.ajax({
        url: 'data/feedback.json',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            var feedbackList = $('#feedback-list');
            data.forEach(function(feedback) {
                feedbackList.append('<li>' + feedback.name + ': ' + feedback.comment + '</li>');
            });
        },
        error: function() {
            alert('Failed to load feedback.');
        }
    });

    // AJAX request to another website (example: JSONPlaceholder)
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            var feedbackList = $('#feedback-list');
            for (var i = 0; i < 5; i++) { // Displaying only the first 5 posts
                feedbackList.append('<li>' + data[i].title + '</li>');
            }
        },
        error: function() {
            alert('Failed to load external data.');
        }
    });
});
