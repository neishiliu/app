$(function(){
	$('.yiji').click(function(){
		var that = $(this),
			thisClass = $(this).attr("class");
		if (thisClass == "yiji") {
			$(that).addClass("active").siblings().removeClass("active");
			$(that).find("ul").slideDown();
		}else{
			$(that).removeClass("active");
			$(that).find("ul").slideUp();
		}
		
	});
});