/** 
 * infinitescroll - Lightweight Infinite Scrolling
 * Copyright (c) 2012 DIY Co
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this 
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under 
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF 
 * ANY KIND, either express or implied. See the License for the specific language 
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@diy.org>
 */

;(function($) {
	"use strict";
	
	$.fn.infiniteScroll = function() {
		var $container = $(this);
		var $window    = $(window);
		var $body      = $('body');
		var action     = 'init';
		var waiting    = false;
		var moreExists = true;
		
		// defaults
		var options = {
			threshold : 500,
			onBottom  : null,
			onEnd     : null
		};
		
		// parse arguments
		if (arguments.length) {
			if (typeof arguments[0] === 'string') {
				action = arguments[0];
				if (arguments.length > 1 && typeof arguments[1] === 'object') {
					options = $.extend(options, arguments[1]);
				}
			} else if (typeof arguments[0] === 'object') {
				options = $.extend(options, arguments[0]);
			}
		}
		
		// initialize
		if (action === 'init') {
			$container.data('infinite-scroll', options);
			$window.off('scroll.infinite resize.infinite');
			$window.on('scroll.infinite resize.infinite', function() {
				if (waiting || !moreExists) return;
				
				var dy = $body.outerHeight() - $window.height() - $window.scrollTop();
				if (dy < options.threshold) {
					// load more items
					waiting = true;
					options.onBottom(function(more) {
						if (more === false) {
							moreExists = false;
							if (typeof options.onEnd === 'function') {
								options.onEnd();
							}
						}
						waiting = false;
					});
				}
			});
		} else if (action === 'reset') {
			var options = $container.data('infinite-scroll');
			$container.infiniteScroll(options);
		}
		
		if (action === 'init' || action === 'reset') {
			$(function() {
				$window.trigger('scroll.infinite');
			});
		}
		
		return this;
	};
	
})(jQuery);