var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
	var key = Object.keys(menu);
	var value = Object.values(menu);
	var new_menu = new Object();
	for (key in menu) 
		{  
			value = menu[key]
			new_menu[value] = { [key]: value}
		};
	console.log(new_menu);