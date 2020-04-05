//$(document).ready(function() {


	var duration;
	chrome.storage.sync.get(['stored_medi_duration'], function(data) {
	          console.log('stored_medi_duration is ' + data.stored_medi_duration);
	          duration = data.stored_medi_duration;
	});

	$('#medi_duration_9809403065').attr('value',duration);




// });




	
