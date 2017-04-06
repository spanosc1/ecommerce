$(document).ready(function() {
	var currentURL = window.location.origin;
	$("#searchTerm").change(function(event) {
		var term = $(this).val().replace(/\s+/g, '+').toLowerCase();
		$("#myForm").attr('action', '/search/' + term);
	});
});