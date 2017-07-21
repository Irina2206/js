/*
	timer.js module
*/

'use strict';

var TimerModule = function() {


	var hours, 
		minutes, 
		seconds,
		wrapHours = document.querySelector('.hours > span'),
		wrapMinutes = document.querySelector('.minutes > span'),
		wrapSeconds = document.querySelector('.seconds > span');

	var contextHours = document.querySelector('#hoursCanvas'),
		contextMinutes = document.querySelector('#minutesCanvas'),
		contextSeconds = document.querySelector('#secondsCanvas');


	var hrs = 0,
		min = 5,
		sec = 5;



		function timer(hours, minutes, seconds) {

			var hours2;
			var minutes2;
			var seconds2;

			setInterval(function() {

				wrapHours.innerHTML = hours;
				wrapMinutes.innerHTML = minutes;
				wrapSeconds.innerHTML = seconds;

				if(!(minutes == 0 && seconds == 0 && hours == 0)) {
					
					if(seconds > -1) {
						seconds = seconds - 1;

						if(seconds == -1) {

							if(minutes == 1) {
								wrapMinutes.innerHTML = minutes;
								minutes = minutes - 1;

									seconds = 0;
									wrapSeconds.innerHTML = seconds;
							};

							seconds = 59;

							if (minutes > 0 && minutes != 1) {

								wrapMinutes.innerHTML = minutes;
								minutes = minutes - 1;


							};


						};


						if(minutes == 0 && hours > 0) {
								

							if(seconds == 0) {

								minutes = 60;
								wrapMinutes.innerHTML = minutes;

								hours = hours - 1;
								wrapMinutes.innerHTML = hours;


							};

						};


					};


				};

					// seconds2 = seconds;
				

				function timerFunc(val, oldVal, elem, forCanvas) {

					// seconds2 = seconds;


					// elem.innerHTML = val;

					console.log(oldVal);
					// console.log(val);


					if(oldVal !== val) {

						var value;

						function canvas(num) {

							value = (num * 0.0334).toFixed(3);

							console.log(value);

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

								

							if(num == 59) {

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

				// timerFunc(hours, oldHours, wrapHours, contextHours);
				// timerFunc(minutes, oldMinutes, wrapMinutes, contextMinutes);
				timerFunc(seconds, seconds2, wrapSeconds, contextSeconds);
				

				return hours2, minutes2, seconds2;


			}, 1000);


		};

		timer(hrs, min, sec);



};

TimerModule.prototype = Object.create(App.prototype);
TimerModule.prototype.constructor = TimerModule;