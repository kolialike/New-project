$(document).ready(function(){var e={itemSelector:".item",singleMode:!1,isResizable:!0,isAnimated:!0,gutter:30,animationOptions:{queue:!1,duration:300}},i=$(".grid").masonry(e);i.imagesLoaded(function(){i.masonry({itemSelector:".item",singleMode:!1,isResizable:!0,isAnimated:!0,gutter:30,animationOptions:{queue:!1,duration:300}})});var t=$(".portfolio-category");t.on("click","li",function(t){t.preventDefault(),$(this).addClass("active").siblings().removeClass("active"),thisId=$(this).attr("data-web"),$(".item").removeClass("hide"),i.masonry("destroy"),"all"==thisId?i.masonry(e):($(".item:not(."+thisId+")").addClass("hide"),i.masonry({itemSelector:".item."+thisId,singleMode:!1,isResizable:!0,isAnimated:!0,gutter:30,animationOptions:{queue:!1,duration:300}}))})});