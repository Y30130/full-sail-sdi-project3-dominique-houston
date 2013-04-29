// alert("JavaScript works!");

// Dominique Houston
// SDI 1304
// Project 3
// Objects and Flowchart
/*
A performing artist var performingArist = "Britney Spears" will be performing a show four nights a week, every week for a year. showsPerWeek = 4. weeksPerYear = 52. daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]. We will need to determine how many shows there will be function = countShows(weeksPerYear,showsPerWeek). 
*/

// JSON
var performingArtists = {
	"artists": [
		{
			"artistFirstName": "Britney",
			"artistLastName" : "Spears"
		},
		{
			"artistFirstName": "Lady",
			"artistLastName" : "Gaga"
		}	
	]
};

// Global Variables
var performingArtist = ["Britney Spears","Lady Gaga"];
var showsPerWeek = 4;
var weeksPerYear = 52;
var daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday"]
var showsBooked = true;
var showSoldOut = true;
var showDurationMins = 60;
var encoreLength = 5;


// Determine How Many Shows Total (Procedure)
var countShows = function (weeksPerYear,showsPerWeek) {
	var showTotal = weeksPerYear*showsPerWeek;
	
}

// Determine If Encore Song Will Be Performed (Boolean Function)
if (showSoldOut == true) {
	minsPerShow = function (showDurationMins) {
		var showDuration = showDurationMins+encoreLength;
		console.log("Since the show was sold out, there will be an encore performance.");
		return showDuration;
	} 
} 
else {
	minsPerShow = function (showDurationMins) {
		var showDuration = showDurationMins;
		console.log("Since the show was not sold out, there will not be an encore performance.");
		return showDuration;
	}
}

// My Functions
var returnShowTotal = countShows(52,4);
var returnShowDuration = minsPerShow(60);


// Console Logs

console.log(performingArtist[0] + " will perform for a total of " + returnShowDuration + " minutes.");