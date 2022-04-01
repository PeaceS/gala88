$(function() {

	/******************************
	* STATIC VARIABLES
	******************************/
	var THUMBNAIL_WIDTH = 140,
		GALLERY = $('#slideshow'),
		GALLERY2 = $('#slideshow.slide-show2');


	/******************************
	* EVENT LISTENERS
	******************************/
	GALLERY2.find('.thumb').on('click', function() {
		loadClickedImage($(this).data('thumb-id'));
	});
	$('#prev-btn2').on('click', function() {
		slidePrev();
	});
	$('#next-btn2').on('click', function() {
		slideNext();
	});
	$(document).keydown(function(e){
		switch(e.keyCode) {
			// Left arrow press
			case 37:
				slidePrev();
				break;
			// Right arrow press
			case 39:
				slideNext();
				break;
			default:
				break;
		}
	});


	/******************************
	* GALLERY FUNCTIONS
	******************************/
	var slideNext = function() {
		console.log('next');
		var active = GALLERY2.find('.img-wrapper.active');
		console.log(active);
		

		if (active.length === 0) { 
			active = GALLERY2.find('.img-wrapper:last');
		}

	    // Setting next image & thumb properties
	    loadNextImage(active);
	};

	var loadNextImage = function(active) {
		var next =  active.next(".img-wrapper").length ? active.next(".img-wrapper") : GALLERY2.find('.img-wrapper:first'),
			nextThumb = GALLERY2.find('[data-thumb-id="' + next.data('img-id') + '"]');

		// Setting next image & thumb properties
		GALLERY2.find('.thumb').removeClass('active');
		$('.img-wrapper').css("opacity", 0); 
		nextThumb.addClass('active');
		active.addClass('last-active');

		// Transitioning to next image & thumbnail
		scrollThumbnails(nextThumb);
		next.css({opacity: 0.0})
			.addClass('active')
			.animate({opacity: 1.0}, 100, function() {
				active.removeClass('active last-active');
			});
	};

	var slidePrev = function() {
		
		var active = GALLERY2.find('.img-wrapper.active');
		console.log(active);
		

		if (active.length === 0) {
			active = GALLERY2.find('.img-wrapper:last');
		}

		// Setting next image & thumb properties
		loadPrevImage(active);
	};

	var loadPrevImage = function(active) {
		var prev =  active.prev(".img-wrapper").length ? active.prev(".img-wrapper") : GALLERY2.find('.img-wrapper:last'),
			prevThumb = GALLERY2.find('[data-thumb-id="' + prev.data('img-id') + '"]');

		// Setting next image & thumb properties
		GALLERY2.find('.thumb').removeClass('active');
		$('.img-wrapper').css("opacity", 0); 
		prevThumb.addClass('active');
		active.addClass('last-active');

		// Transitioning to next image & thumbnail
		scrollThumbnails(prevThumb);
		prev.css({opacity: 0.0})
			.addClass('active')
			.animate({opacity: 1.0}, 100, function() {
				active.removeClass('active last-active');
			});
	};

	var loadClickedImage = function(id) {
		var image =  GALLERY2.find('[data-img-id="' + id + '"]'),
			imgThumb = GALLERY2.find('[data-thumb-id="' + id + '"]'),
			currActive = GALLERY2.find('.img-wrapper.active');

		// Setting image & thumb properties
		GALLERY2.find('.thumb').removeClass('active');
		currActive.addClass('last-active').removeClass('active');
		$('.img-wrapper').css("opacity", 0); 
		imgThumb.addClass('active');
	    
		// Transitioning to image & thumbnail
		scrollThumbnails(imgThumb);
		image.css({opacity: 0.0})
			.addClass('active')
			.animate({opacity: 1.0}, 100, function() {
				currActive.removeClass('last-active');
			});
	};

	var scrollThumbnails = function(thumb) {
		var offset, // used for thumbnail offset
			first,  // stores first thumbnail object
			x = thumb.position().left + parseInt(thumb.css('margin-left'), 10);

		// Checking current thumbnail offset
		if(x < 0) {
			first = GALLERY.find('.thumb:first');
			offset = parseInt(first.css('margin-left'), 10) - x;
			first.animate({
				marginLeft: offset
			}, 1000);
		} else {
			x = thumb.position().left;
			var currOffset = ( x + THUMBNAIL_WIDTH ) - thumb.parent().width();
			if(currOffset > 0) {
				first = GALLERY.find('.thumb:first');
				offset = parseInt(first.css('margin-left'), 10) - currOffset;
				first.animate({
					marginLeft: offset
				}, 100);
			}
		}
	};
}());