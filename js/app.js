$(function(){
	//导航
	$('.yiji').click(function(){
		var that = $(this),
			thisClass = $(this).attr("class");
		if (thisClass == "yiji") {
			$(that).addClass("active open").siblings().removeClass("active");
			$(that).find("ul").slideDown();
		}else if(thisClass == "yiji active open"){
			$(that).removeClass("active open");
			$(that).find("ul").slideUp();
		}else if(thisClass == "yiji open"){
			$(that).removeClass("open");
			$(that).find("ul").slideUp();
		}
	});
});