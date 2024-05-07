$( function() {
    $( "#birthday" ).datepicker();
  } );
  var languages = [
      "AppleScript",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python"
  ];

  $( function() {
    $( "#langs" ).autocomplete({
      source:languages
    });
  } );
  