
const ENTER_KEY_CODE = 13;
const THREE_SECONDS = 3000;

var app = angular.module('myApp', []);

var correctAnswer;

var activeKeys = ["C"];
var activeScaleDegreesMap = {};

initCheckBoxesToCorrectState();

app.controller('myCtrl', function($scope, $http) {
	$scope.userSelectedKey = "C";

	$http.get("data.json")
		.then(function(response) {
			console.log(response);
			$scope.data = response.data;
			initActiveScaleDegreesMap();
			console.log(activeScaleDegreesMap);
			displayQuestion($scope);
		});

	$scope.checkAnswer = function(event) {
		if(wasTriggeredByClickOrEnter(event)) {
			// var correctAnswer = $scope.data[selection]["a"].toLowerCase();

			if(answerIsUndefinedOrIncorrect($scope.answer, correctAnswer)) {
				$("#result-icon").stop();
				$("#result-icon").html("&cross;");
				$("#result-icon").css("color", "#FF0000");
				$("#result-icon").css("opacity", "1");
				$("#result-icon").animate({opacity: 0}, THREE_SECONDS);
			} else {
				$("#result-icon").stop();
				$("#result-icon").html("&#x2713;");
				$("#result-icon").css("color", "#00FF00");
				$("#result-icon").css("opacity", "1");
				$("#result-icon").animate({opacity: 0}, THREE_SECONDS);

				displayQuestion($scope);
			}

			$scope.answer = "";
		}
	}

	$scope.alterActiveKeys = function(event) {
		console.log(event);
		var key = event.target.value;
		$scope.userSelectedKey = key;
		var checked = event.target.checked;
		if(checked) {
			if(!activeKeys.includes(key)) {
				activeKeys.push(key);
			}
		} else {
			for(i = 0; i < activeKeys.length; i++) {
				if(activeKeys[i] == key) {
					activeKeys.splice(i, 1);
				}
			}
		}

		displayQuestion($scope);
		console.log(activeKeys);
	}

	$scope.alterActiveScaleDegrees = function(event) {
		console.log(event);
		var scaleDegree = event.target.value;
		var checked = event.target.checked;
		if(checked) {
			activeScaleDegreesMap[$scope.userSelectedKey][scaleDegree] = 1;
		} else {
			activeScaleDegreesMap[$scope.userSelectedKey][scaleDegree] = 0;
		}

		displayQuestion($scope);
	}

	$scope.toggleHelpTable = function() {
		var state = $("#help-btn").prop("value");
		if(state == "Show Help") {
			$("#help-table").show();
			$("#help-btn").prop("value", "Hide Help");
		} else {
			$("#help-table").hide();
			$("#help-btn").prop("value", "Show Help");
		}
	}

});

function answerIsUndefinedOrIncorrect(answer, correctAnswer) {
	return (answer == undefined) || (answer.toLowerCase() != correctAnswer);
}

function wasTriggeredByClickOrEnter(event) {
	return (event == undefined) || (event.keyCode == ENTER_KEY_CODE);
}

function displayQuestion($scope) {
	console.log(activeScaleDegreesMap);
	// activeKeys = ["C", "F", "G"]; // Remove this
	activeKeys = ["C"]; // Remove this

	var rn = Math.floor(Math.random() * activeKeys.length);
	var keySelection = activeKeys[rn];
	console.log("Key Selection: " + keySelection);

	activeScaleDegreesMap["C"][4] = 0;
	activeScaleDegreesMap["C"][5] = 0;
	activeScaleDegreesMap["C"][2] = 0;

	var activeScaleDegrees = fetchActiveScaleDegreesOfKey(keySelection);
	var rn = Math.floor(Math.random() * activeScaleDegrees.length);

	$scope.keySelection = keySelection;
	$scope.scaleDegreeSelection = activeScaleDegrees[rn];
	console.log($scope.scaleDegreeSelection);
	correctAnswer = $scope.data[$scope.keySelection][$scope.scaleDegreeSelection].toLowerCase();
	return;
}

function fetchActiveScaleDegreesOfKey(keySelection) {
	var key = activeScaleDegreesMap[keySelection];

	var activeScaleDegrees = [];
	for(sd in key) {
		if(key[sd] == 1) {
			activeScaleDegrees.push(sd);
		}
	}

	console.log(activeScaleDegrees);
	return activeScaleDegrees;
}

function initActiveScaleDegreesMap() {
	var keys = ["C", "D", "E", "F", "G", "A", "B",
				"Db", "Eb", "Gb", "Ab", "Bb"]

	for(i = 0; i < keys.length; i++) {
		var key = keys[i];
		var sdMap = {};

		for(j = 1; j <= 7; j++) {
			sdMap[j] = 1;
		}

		 activeScaleDegreesMap[key] = sdMap;
	}

	return;
}

function initCheckBoxesToCorrectState() {
	console.log($("div.item3 input").prop("checked", ""));
	$(".item3 input:first").prop("checked", "true");
	$(".item4 input").prop("checked", "true");
	return;
}

