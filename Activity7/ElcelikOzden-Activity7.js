// Arrays for names and scores
var names = ["Ben", "Joel", "Judy", "Anne","Mike"];
var scores = [88, 98, 77, 88,99];

// Function to get element by id
function $(id) {
  return document.getElementById(id);
}

// Add onload event handler
window.onload = function() {
  // Attach functions to button click events
  $("add_button").onclick = addScore;
  $("display_button").onclick = displayScores;
  $("results_button").onclick = displayResults;

  // Move cursor to Name field
  $("name").focus();
};

// Function to display average and highest scores
function displayResults() {
  var sum = 0;
  var highest = scores[0];
  for (var i = 0; i < scores.length; i++) {
    sum += scores[i];
    if (scores[i] > highest) {
      highest = scores[i];
    }
  }
  var average = sum / scores.length;
  $("results").innerHTML = "<h2>Results</h2><p>Average Score: " + average + "</p><p>Highest Score: " + highest + "</p>";
}

// Function to display names and scores in a table
function displayScores() {
  var table = "<table border='1'><tr><th>Name</th><th>Score</th></tr>";
  for (var i = 0; i < names.length; i++) {
    table += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
  }
  table += "</table>";
  $("scores_table").innerHTML = table;
}

// Function to add a name and score to the arrays
function addScore() {
  var name = $("name").value.trim();
  var score = parseInt($("score").value);

  // Data validation
  if (name === "" || isNaN(score) || score < 0 || score > 100) {
    alert("You must enter a name and a valid score.");
    return;
  }

  names.push(name);
  scores.push(score);
  displayScores();

  // Move cursor to Name field
  $("name").value = "";
  $("score").value = "";
  $("name").focus();
}
