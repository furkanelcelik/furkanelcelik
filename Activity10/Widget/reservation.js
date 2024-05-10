$(function() {
	$("#tabs").tabs();
  
	// Datepicker for arrival date
	$("#arrival_date").datepicker({
	  dateFormat: 'yy-mm-dd',
	  minDate: 0, // Minimum date is today
	  maxDate: '+90d', // Maximum date is 90 days from today
	  onSelect: function(dateText) {
		// Automatically calculate the departure date based on the selected arrival date
		var arrival = $(this).datepicker('getDate');
		var nights = $("#nights").val();
		if (nights && !isNaN(nights)) {
		  var departure = new Date(arrival.getTime());
		  departure.setDate(arrival.getDate() + parseInt(nights));
		  $("#departure_date").val($.datepicker.formatDate('yy-mm-dd', departure));
		}
	  }
	});
  
	// Handler for View Cancellation Policies button
	$("#policies").click(function() {
	  $("#dialog").dialog({
		modal: true,
		width: 500
	  });
	});
  });
  