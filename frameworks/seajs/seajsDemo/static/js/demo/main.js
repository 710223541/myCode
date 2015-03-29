define(function(require,exports,module)
{
	require("../jquery-1.8.3.min.js"); //加载jQuery
	
	//获取对象元素
	var y2TagNav = $(".y2-tagNav");
	var y2TagCont = $(".y2-tagCont");
	var y2DropToggle = $(".y2-dropToggle");
	var y2DropCont = $(".y2-dropCont");
	var y2DropContList = $(".y2-dropCont li")
	
	//tab
	require("./tab.js").tab(y2TagNav,y2TagCont);
	
	//drop
	require("./drop.js").drop(y2DropToggle,y2DropCont,y2DropContList);
})