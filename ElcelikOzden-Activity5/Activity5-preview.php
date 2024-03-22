<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Review</title>
</head>
<body>
    <h1>Review</h1>
    <?php
    // Function to display field value or "Not provided" message
    function displayFieldValue($field) {
        return !empty($field) ? $field : "Not provided";
    }

    // Check if the form is submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve form data
        $name = displayFieldValue($_POST['name']);
        $username = displayFieldValue($_POST['username']);
        $password = displayFieldValue($_POST['password']);
        $address = displayFieldValue($_POST['address']);
        $zipcode = displayFieldValue($_POST['zipcode']);
        $email = displayFieldValue($_POST['email']);
        $country = isset($_POST['country']) ? $_POST['country'] : "Not provided";
        $sex = isset($_POST['sex']) ? $_POST['sex'] : "Not provided";
        $languages = isset($_POST['languages']) ? implode(", ", $_POST['languages']) : "Not provided";
        $about = displayFieldValue($_POST['about']);

        // Display the submitted data
        echo "<p><strong>Name:</strong> $name</p>";
        echo "<p><strong>Username:</strong> $username</p>";
        echo "<p><strong>Password:</strong> $password</p>";
        echo "<p><strong>Address:</strong> $address</p>";
        echo "<p><strong>Zipcode:</strong> $zipcode</p>";
        echo "<p><strong>Email:</strong> $email</p>";
        echo "<p><strong>Country:</strong> $country</p>";
        echo "<p><strong>Sex:</strong> $sex</p>";
        echo "<p><strong>Languages:</strong> $languages</p>";
        echo "<p><strong>About:</strong> $about</p>";
    } else {
        // If form is not submitted, display an error message
        echo "<p>Error: Form not submitted.</p>";
    }
    ?>
</body>
</html>
