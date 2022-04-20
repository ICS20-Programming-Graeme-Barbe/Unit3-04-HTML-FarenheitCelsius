// Created by Graeme
// Created on: April 19
// JS functions for index.html


// This function calculates temp into celsius
'use strict';
function calculate() {
	// Declares variables 
	let fahrenheit = parseFloat(document.getElementById('fahrenheit').value)
	//Calculate temp
	let celsius = 5 / 9 * (fahrenheit - 32)
	//Answers
	document.getElementById('celsius-temp').innerHTML = 'The temperature is ' + celsius.toFixed(2) + "°C"
}