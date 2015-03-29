define(function(require,exports,module)
{
	require("./public/jquery-1.8.3.min.js"); //加载jQuery
	
	//获取对象元素
	var y2TagNav = $(".y2-tagNav");
	var y2TagCont = $(".y2-tagCont");
	var y2DropToggle = $(".y2-dropToggle");
	var y2DropCont = $(".y2-dropCont");
	var y2DropContList = $(".y2-dropCont li")
	var y2ScrollCont = $(".y2-scrollCont");
	var y2ScrollNav = $(".y2-scrollNav");
	//tab
	require("./tab.js").tab(y2TagNav,y2TagCont);
	
	//drop
	require("./drop.js").drop(y2DropToggle,y2DropCont,y2DropContList);
	
	//scrollSpy
	require("./scrollSpy.js").scrollSpy(y2ScrollCont,y2ScrollNav,'active');
	
	//modals
	var y2OpenBtn = $(".y2-openBtn");       //打开按钮
	var y2CloseBtn = $(".y2-closeBtn");	    //关闭按钮
	var y2Content = $("#myModal");		    //弹出内容层
	var y2ModalBg = $(".y2-modalBg");		//弹出背景遮罩层
	var y2CommitBtn = $(".y2-commitBtn");	//提交按钮

	require("./modals.js").modals(
		y2OpenBtn,
		y2CloseBtn,
		y2CommitBtn,
		y2Content,
		y2ModalBg,
		"../views/test.php",		//数据提交的链接
		{name:"Ghost",sex:"man"}	//json格式数据
	)
	
	//验证
	var userName = $("#userName");
	var name = $("#name");
	var qq = $("#qq");
	var phone = $("#phone");
	var email = $("#email");
	var validate = require("./validate.js")
	validate.validate.userName(userName);
	validate.validate.name(name);
	validate.validate.qq(qq);
	validate.validate.phone(phone);
	validate.validate.email(email);
	
	//ajax提交 
	//注释：只用传你需要的参数就行了
	var data = {
		url:"",
		type:"POST",
		dataType:"json",
		data:{},
		async:false,
		callBack:function(dt)
		{
			alert(d);		
		}
	};
	
	require("./ajax.js").ajax(data);	
})