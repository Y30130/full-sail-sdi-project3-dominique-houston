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
var daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", ]
var showsBooked = true;
var showSoldOut = true;
var showDurationMins = 60;
var encoreLength = 5;
var closingSong= "\"...Baby One More Time\"";
var encoreSong= "\"Till The World Ends\"";


// Determine How Many Shows Total (Procedure)
var countShows = function (weeksPerYear,showsPerWeek) {
	var showTotal = weeksPerYear*showsPerWeek;
	
}

// Determine If Encore Song Will Be Performed (Boolean Function)
if (showSoldOut == true) {
	minsPerShow = function (showDurationMins) {
		var showDuration = showDurationMins+encoreLength;
		return showDuration;
		console.log("Since the show was sold out, there will be an encore performance.");

	} 
} 
else {
	minsPerShow = function (showDurationMins) {
		var showDuration = showDurationMins;
		console.log("Since the show was not sold out, there will not be an encore performance.");
		return showDuration;
	}
}


// Count Up (Array Function + For Loop)
var songCountUp = function(daysPerforming,howMany) {
	for (var i = 0; i < daysOfTheWeek.length; i = i + 1 ){
		console.log("She will be performing " + daysPerforming + " days a week.");
		if (i < howMany) {
			console.log("On " + daysOfTheWeek[i] + " there will be a performance.");
		}
		else {
			console.log("On " + daysOfTheWeek[i] + " she will not be performing. The tour is schedule for a break.")
		}
		console.log("");
	}
	return i;
}

// Count Down (Number Function + While Loop)
var songCountDown = function(songs) {
	while (songs > 0) {
		var songs = songs - 1;
		if (songs > 0) {
			console.log("Miss Spears, that was a great.");
			console.log(songs + " left on the setlist.");
			if (songs == 1) {
				console.log("This is the final song.");
			}
		}
		else {
			console.log("There are no more songs to perform.");
		}
		console.log(" ");
	}
	return songs;
}


// Determine Closing and Encore Songs (String Function)
var showClosing = function(encoreSong,closingSong){
	var closingSegment = encoreSong + " and " + closingSong;
	return closingSegment;
}


// My Functions
var returnShowTotal = countShows(52,4);
var returnShowDuration = minsPerShow(60);
var returnDaysTraveling = songCountUp(4,daysOfTheWeek.length-3);
var returnSongTotal = songCountDown(12);
var returnClosingSegment = showClosing(closingSong,encoreSong);


// Console Logs

console.log(performingArtist[0] + " will perform for a total of " + returnShowDuration + " minutes.");
console.log(performingArtist[0] + " will be actively on the road touring and rehearsing for " + (returnDaysTraveling-3) + " days a week.");
console.log("After each show " + performingArtist[0] + " will have " + returnSongTotal + " songs left to perform.");
console.log(performingArtist[0] + " will perform " + returnClosingSegment + " for the closing segment.");