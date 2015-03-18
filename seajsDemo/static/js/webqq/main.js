define(function(require,exports,module){
	//获取元素
	var aBtn = document.getElementById("btn1");
	var aDiv1 = document.getElementById("div1");
	var aDiv2 = document.getElementById("div2");
	var aDiv3 = document.getElementById("div3");	
	var aDiv3_2 = document.getElementById("div3_2");
	//引入drag模块
	require("./drag.js").drag(aDiv3);
	require("./drag.js").drag(aDiv3_2);
	//显示
	aBtn.onclick = function()
	{
		aDiv1.style.display = "block";	
	}
	
	//引入scale模块
	require("./scale.js").scale(aDiv1,aDiv2);
})