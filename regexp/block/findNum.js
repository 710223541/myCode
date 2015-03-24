function findNum(str)
{
	var arr = [];
	
	var tmp = "";
	
	for(var i=0;i<str.length;i++)
	{
		if(str.charAt(i)<="9" && str.charAt(i)>="0")
		{
			tmp += str.charAt(i);
		}else{
	
			if(tmp)
			{
				arr.push(tmp);	
				tmp = "";
			}			
		}
	}
	
	if(tmp)
	{
		arr.push(tmp);	
		tmp = "";
	}	
	
	return arr;		
}