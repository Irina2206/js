/**
 * Modal window
 */



'use strict';

var ModalModule = function() {


	this.on('#container','input.press','click',function(e) {


		alert('hello');






	})
















}


ModalModule.prototype = Object.create(App.prototype);
ModalModule.prototype.constructor = ModalModule;