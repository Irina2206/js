/*
	Accordion.js module
*/

'use strict';

var AccordionModule = function() {

	var openedText = null;

	// console.log(this);

	//h1 отслеживаем нажатие на h1
	this.on('.module', 'h1', 'click', function(e) {


		// e.target.setAttribute('id','accordion');
		// e.target.classList.toggle('accordion');
		// e.style.display = 'block!important';

		// $('.module > div').slideDown();
		// console.log(e.target);

		if (openedText) {
			openedText.style.display = 'none';
		}

		if(this.nextElementSibling.style.display = 'none' || this.nextElementSibling.style.display = '') {
			this.nextElementSibling.style.display = 'block';
		} else {
			this.nextElementSibling.style.display = 'none';
		};

		// $('.text_block').classToggle('display');

		// if(this.)

		
	});


/* ----------------------------------- */


this.on("#accordion", "p.control", "click", function(e) {

  if (openedText && openedText != this.nextElementSibling) {

   openedText.style.display = 'none';
  }

  if (this.nextElementSibling.style.display == 'none' ||
   this.nextElementSibling.style.display == '') {

   this.nextElementSibling.style.display = "block";
   openedText = this.nextElementSibling;
  } else {

   this.nextElementSibling.style.display = "none";
   openedText = null;
  }
 });









}


AccordionModule.prototype = Object.create(App.prototype);
AccordionModule.prototype.constructor = AccordionModule;























