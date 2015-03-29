/*
	作者：Ghost 
	时间：2015-03-23
	功能块：表单验证
	功能点：
		1、表单失去焦点后进行验证提示
		2、正则验证格式，ajax和后台进行交换验证数据库是否存在改用户名、邮箱、手机号、qq等
		3、全部验证项通过后才可以提交
*/
define(function(require,exports,module){
	
	var validate = {};
	
	 validate = {
		
		"userName":function(obj)
		{
			obj.focus(function(){				
				$(this).next("label").remove("label");		
			})
			
			obj.blur(function(){
				var aVal = $(obj).val();
			
				var re = /^([\u4E00-\u9FA5a-zA-Z0-9_]){6,16}$/; //字母、数字、下划线 6-16			
				
				status(aVal,re,obj);		 
					
			});
		},
		"name":function(obj)
		{
			obj.focus(function()
			{
				$(this).next("label").remove("label");	
			})
			
			obj.blur(function(){
				var aVal = $(obj).val();
				var re = /^[\u4E00-\u9FA5a-zA-Z]{2,16}$/;	
				
				status(aVal,re,obj);
			})	
		},
		"qq":function(obj)
		{
			obj.focus(function()
			{
				$(this).next("label").remove("label");	
			})
			
			obj.blur(function(){
				var aVal = $(obj).val();
				var re = /^[1-9][0-9]{4,10}$/;	
				
				status(aVal,re,obj);
			})				
		},
		"phone":function(obj)
		{
			obj.focus(function()
			{
				$(this).next("label").remove("label");	
			})
			
			obj.blur(function(){
				var aVal = $(obj).val();
				//var re = /^1[358]\d{9}|14[57]\d{8}|17[0678]\d{8}$/;	
				var re = /^1[0-9]{10}$/;
				
				status(aVal,re,obj);
			})		
		},
		"email":function(obj)
		{
			obj.focus(function()
			{
				$(this).next("label").remove("label");	
			})
			
			obj.blur(function(){
				var aVal = $(obj).val();
				var re = /^\w+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;	
				status(aVal,re,obj);
			})	
		}
		 
	 }
	 
	 function status(v,r,o)
	 {
		if(v != "")
		{
			if(r.test(v))
			{
				$("<label style='font-size:12px;color:green;'>*正确</label>").insertAfter(o);	
			}else{
				$("<label style='font-size:12px;color:red;'>*格式错误，请重新输入</label>").insertAfter(o);	
			}

		}else{
		$("<label style='font-size:12px;color:red;'>*必填字段</label>").insertAfter(o);	
		}		 
	}
		
	exports.validate = validate;
	
})