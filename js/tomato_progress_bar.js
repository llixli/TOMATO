
!function($) {
	"use strict";


	//Class definition
	var Progressbar = function(element) {
		this.$element = $(element);		
	}

	Progressbar.prototype.update = function(value) {
		var $div = this.$element.find('div');
		var $span = $div.find('span');
		$div.attr('aria-valuenow', value);
		$div.css('width', value + '%');
		$span.text(value + '% Complete');
	}

	Progressbar.prototype.finish = function() {
		this.update(100);
	}

	Progressbar.prototype.reset = function() {
		this.update(0);
	}


	// Plugin definition
	$.fn.progressbar = function(option){
		return this.each(function() {
			var $this = $(this),
				data = $this.data('jbl.progressbar');

			if (!data) $this.data('jbl.progressbar', (data = new Progressbar(this)));
			if (typeof option == 'string') data[option]();
			
			if (typeof option == 'number') data.update(option); 	
		})
	};



	//Progressbar data-api
	$(document).on("click", "#work", function(e) {
		var $this = $(this);
		var $target = $($this.data('target'));
		var value = $this.data('value');

		e.preventDefault();

		$target.progressbar(value);
	});
}(window.jQuery);