console.log ("hello world");

/* listen for form submit
** find value id="city-type"
***store in variable cityName
*** if cityName equals NYC then add class.nyc to body
*** if cityName equals SF remove class then add class.sf to body
**** finally remove class if anything else

*/

$( document ).ready(function() {

$("form").on("submit", function(event){
	event.preventDefault();
	var cityName = $("#city-type").val();
	if (cityName === "NYC" || cityName === "New York" || cityName === "New York City") {
		$("body").removeClass().addClass("nyc");
	} else if (cityName === "SF" || cityName === "San Francisco" || cityName === "Bay Area") {
		$("body").removeClass().addClass("sf");
	} else if (cityName === "LA" || cityName === "Los Angeles" || cityName === "LAX") {
		$("body").removeClass().addClass("la");
	} else if (cityName === "Austin" || cityName === "ATX") {
		$("body").removeClass().addClass("austin");
	} else if (cityName === "Sydney" || cityName === "SYD") {
		$("body").removeClass().addClass("sydney");
	} else {
		$("body").removeClass();
	}

}) 

});


