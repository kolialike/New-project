$(document).ready(function(){

	var options = {
		itemSelector: '.item',
		singleMode: false,
		isResizable: true,
		isAnimated: true,
		gutter: 30,
		animationOptions: { 
			queue: false, 
			duration: 300 
		}
	}
	var grid = $('.grid').masonry(options); 

	grid.imagesLoaded( function() {
		  grid.masonry({
			itemSelector: '.item',
			singleMode: false,
			isResizable: true,
			isAnimated: true,
			gutter: 30,
			animationOptions: { 
				queue: false, 
				duration: 300 
			}
		  });
	});

	var portfolioCategory = $(".portfolio-category");
	portfolioCategory.on('click', 'li', function(event) {
		event.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
		thisId = $(this).attr("data-web");
		$(".item").removeClass('hide');
		grid.masonry("destroy");
		if(thisId == "all") {
			grid.masonry(options);
		} else {
			$(".item:not(."+thisId+")").addClass('hide');
			grid.masonry({
				itemSelector: ".item."+thisId,
				singleMode: false,
				isResizable: true,
				isAnimated: true,
				gutter: 30,
				animationOptions: { 
					queue: false, 
					duration: 300 
				}
			});
		}


	});
});


