function checkactivxinstall()
{
	var obj;
	try{
			obj= new ActiveXObject("eClientMonitor.CMObject");
			
	}
	catch(ex)
	{
			return 0;
			//alert(ex.message);
		//	alert("�㻹û�а�װ�ؼ���Ҫ��װ�ؼ�����ܵ�¼ϵͳ")
	}
	return 1;
}
if(!checkactivxinstall())
{

	document.write("ϵͳ��⵽�㻹û�а�װ�ؼ�,ϵͳ��Ҫ��װ�ؼ�����ܷ���!<br>");
	document.write("<a href='/js/client.exe'>�ؼ����ص�ַ</a>");
}