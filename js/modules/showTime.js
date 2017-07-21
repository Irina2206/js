/*
	showTime.js module
*/

'use strict';

var ShowTimeModule = function() {


	var hours, 
		minutes, 
		seconds,
		wrapHours = document.querySelector('.hours > span'),
		wrapMinutes = document.querySelector('.minutes > span'),
		wrapSeconds = document.querySelector('.seconds > span');

	var c=document.getElementById('secondsCanvas'),
		contextHours = document.querySelector('#hoursCanvas'),
		contextMinutes = document.querySelector('#minutesCanvas'),
		contextSeconds = document.querySelector('#secondsCanvas');
	// var ctx=c.getContext('2d');
	// ctx.beginPath();
	// ctx.fillStyle = '#ccc';
	// ctx.strokeStyle = '#f00';

	// ctx.lineWidth=5;

	// ctx.arc(100,75,50,0*Math.PI,0*Math.PI);

	// ctx.stroke();


	setInterval(function() {

		var newData = new Date();

		var oldHours = hours,
			oldMinutes = minutes,
			oldSeconds = seconds;
		// console.log(seconds);

		hours = newData.getHours();
		minutes = newData.getMinutes();
		seconds = newData.getSeconds();

		// console.log(seconds);

		function timerFunc(val, oldVal, elem, forCanvas) {

			elem.innerHTML = val;

			console.log(oldVal);
			console.log(val);


			if(oldVal !== val) {

				var value;

				function canvas(num) {

						value = (num * 0.0334).toFixed(3);

						var ctx = forCanvas.getContext('2d');


						function canvasSettings() {


							ctx.beginPath();

							var grd=ctx.createLinearGradient(0,0,190,0);
							grd.addColorStop(0,"green");
							grd.addColorStop(0.4,"yellow");
							grd.addColorStop(0.8,"orange");
							grd.addColorStop(1,"red");

							ctx.strokeStyle = grd;

							ctx.lineWidth=5;

							ctx.arc(95,95,80,0,value*Math.PI);

							ctx.stroke();

						};

						canvasSettings();

						

					if(num == 0) {

						value = 0.0001;

						ctx.clearRect(0, 0, 190, 190);

						canvasSettings();

					};


					return value;

				};

				canvas(val);

				return val;


			};





		};

		timerFunc(hours, oldHours, wrapHours, contextHours);
		timerFunc(minutes, oldMinutes, wrapMinutes, contextMinutes);
		timerFunc(seconds, oldSeconds, wrapSeconds, contextSeconds);

		


		



	}, 1000);






};

ShowTimeModule.prototype = Object.create(App.prototype);
ShowTimeModule.prototype.constructor = ShowTimeModule;