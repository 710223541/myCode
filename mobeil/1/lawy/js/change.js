//调整字号
$("#font_plus").on("click", function(ev) {
	var size = $("body").css("font-size");
	var defaultFontSize = kget("font-size");
	if(defaultFontSize==undefined || defaultFontSize==null || defaultFontSize==''){
		kset("font-size",size);
	}
	
	var s = size.replace("px","");
	if(s >= 22){
		var defaultFontSize = kget("font-size");
		$("body").css("font-size",defaultFontSize);
	}else {
		var fontsize = window.parseInt(s) + 2 + "px";
		$("body").css("font-size",fontsize);
	}

});
