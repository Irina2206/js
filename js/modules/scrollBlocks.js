/*
	ScrollBlocks.js module
*/

'use strict';

var ScrollBlocks = function() {

// window.addEventListener('scroll', function() {

	// var pageYOffset;

	// console.log(pageYOffset);

	// function mainFunc() {

		// if(pageYOffset == undefined) {
		// 	pageYOffset = window.pageYOffset + 10;
		// }

		
		

		// window.addEventListener('scroll', function() {

		// 	var valueOffset = window.pageYOffset;

		// 	var elContent = document.querySelector('.contentWrap');



			// if(window.scroll) {
			// 	// var valueOffset = window.pageYOffset;
			// 	var valueOffset2 = window.pageYOffset;
			// 	console.log(valueOffset + 'and' + valueOffset2);

			// }

			// if(pageYOffset <= 185) {

			// 	function heightBlock() {
			// 		var elHeader = document.querySelector('.menuWrap'),
			// 			heightHeader = elHeader.offsetHeight;

			// 	};

			// 	var res = heightBlock();

			// 	// heightBlock();
			// };

			// function value() {

			// 	var pageYOffset = 0;

			// 	console.log(pageYOffset);
			// 	console.log(valueOffset);
				

			// 	// if(valueOffset !== pageYOffset) {

			// 	// 	pageYOffset = valueOffset;
			// 	// }

			// 	// console.log(pageYOffset);
			// 	// return pageYOffset;
			// };

			// var res = value();

			// console.log('Функция вернула - ' + res);
			// console.log(window.pageYOffset);


			// mainFunc();

			// return pageYOffset;
			// console.log(value());

		// });

		// console.log(value());

		// console.log(pageYOffset);

		// return pageYOffset;

	// };



	// var mainRes = mainFunc();

	// console.log('Функция вернула - ' + pageYOffset);
	// console.log(pageYOffset);



// });
// 
// 

	var valueOffset;


	window.addEventListener('scroll', function() {

		console.log('It is valueOffset - ' + valueOffset);
		console.log('It is window.pageYOffset - ' + window.pageYOffset);


		var elHeader = document.querySelector('.menuWrap'),
			elContent = document.querySelector('.contentWrap'),
			heightHeader = elHeader.offsetHeight;



		// if(valueOffset <= 64 && valueOffset !== undefined) {


				

		// 		var sum = Math.abs(window.pageYOffset - valueOffset);
		// 		elHeader.style.height = (heightHeader - sum) + 'px';
		// 		console.log('It is sum - ' + sum);


		// };

		// if( valueOffset >= 0 && valueOffset <= 64) {
		// 	var sum = Math.abs(window.pageYOffset - valueOffset);
		// 	elHeader.style.height = (heightHeader + sum) + 'px';
		// 	// console.log(heightHeader);

		// };


		// console.log(elContent.style.marginTop);







		valueOffset = window.pageYOffset;

		return valueOffset;



	});


};

ScrollBlocks.prototype = Object.create(App.prototype);
ScrollBlocks.prototype.constructor = ScrollBlocks;