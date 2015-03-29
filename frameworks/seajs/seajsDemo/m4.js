define(function(require)
{
	var a = require("./m2");
	var b = require("./m3");
	a.show("你是小狗");
	a.tag("你是小猫");
	b.show();
})