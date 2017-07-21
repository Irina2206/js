/*
	MenuScroll.js module
*/

'use strict';

var MenuScrollModule = function() {


	window.onscroll = function() {
	  var scrolled = window.pageYOffset;

		if(scrolled > 65) {
			document.querySelector('.menuWrap').classList.add('menuRules');
		}

		if(scrolled < 65) {
			document.querySelector('.menuWrap').classList.remove('menuRules');
		}

	}


};

MenuScrollModule.prototype = Object.create(App.prototype);
MenuScrollModule.prototype.constructor = MenuScrollModule;


