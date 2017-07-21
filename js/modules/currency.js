/**
 * Exchange Rates app
 */



'use strict';

var CurrencyModule = function() {

	// function one() {

		function Currencies(obj) {

	  		this.url = obj.url,
	  		this.classTag = obj.classTag,
	  		this.method = function () {

	  			$.get(obj.url, function(arr) {

  					var par = document.querySelector(obj.classTag),
  						elem = document.createElement('span'),
						children = document.querySelector(obj.classTag + ' > p').children;

  					if(children.length === 0) {

	  					elem.innerHTML = arr.rates.USD + ' USD';

	  					document.querySelector(obj.classTag + ' > p').appendChild(elem);
	  					
  					}

  					var value = parseFloat(document.querySelector(obj.classTag + ' span').innerHTML);


  					if(children.length === 1 && value !== arr.rates.USD) {

  						elem.innerHTML = arr.rates.USD + ' USD';

  					}


				});

	  		};

	  	};


		var newCurrency = new Currencies({
			classTag: '.eur',
			url: 'http://api.fixer.io/latest?base=EUR'
		}),
			newCurrency2 = new Currencies({
			classTag: '.gbp',
			url: 'http://api.fixer.io/latest?base=GBP'
		}),
			newCurrency3 = new Currencies({
			classTag: '.jpy',
			url: 'http://api.fixer.io/latest?base=JPY'
		}),
			newCurrency4 = new Currencies({
			classTag: '.dkk',
			url: 'http://api.fixer.io/latest?base=DKK'
		});


			

		newCurrency.method();
		newCurrency2.method();
		newCurrency3.method();
		newCurrency4.method();


		setInterval(function() {

			newCurrency.method();
			newCurrency2.method();
			newCurrency3.method();
			newCurrency4.method();

			function date(time) {

				function valid(val) {

					if(val === 0) val = '00';
					if(val < 10 && val > 0) val = '0' + val;
					return val;
				}

				var hours = new Date().getHours(),
					min = new Date().getMinutes(),
					sec = new Date().getSeconds(),
					hrs = valid(hours),
					mins = valid(min),
					secs = valid(sec);

				return hrs + ':' + mins + ':' + secs;

			}

	  		document.querySelector('.update').innerHTML = 'Обновлено сегодня в ' + date();

	  	}, 10000);

	// };

	// one();

}


// CurrencyModule.prototype = Object.create(App.prototype);
// CurrencyModule.prototype.constructor = CurrencyModule;

















