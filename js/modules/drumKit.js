/*
	drumKit.js module
*/

'use strict';

var DrumKitModule = function() {

	function eventFunc(el) {
		el.innerHTML = '';
		var createEl = document.createElement('audio');
		createEl.src = el.getAttribute('data-src');
		createEl.autoplay = true;
		el.appendChild(createEl);
	};


	document.querySelector('.container').addEventListener('click', function(e) {
		
		eventFunc(e.target);
	});

	document.querySelector('body').addEventListener('keypress', function(e) {
		var codeKey = e.keyCode;

		var allElem = document.querySelectorAll('.container > div');

		allElem.forEach(function (item) {
			var valueData = item.getAttribute('data-code');

			if(valueData == codeKey) {
				eventFunc(item);
			};

		});

		console.log(codeKey);

	});



}


DrumKitModule.prototype = Object.create(App.prototype);
DrumKitModule.prototype.constructor = DrumKitModule;























