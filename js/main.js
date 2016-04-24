$.ajax({
    dataType: 'text',
    success: function(string) {
        var nav = $.parseJSON(string);
		
		function parseMenu(ul, menu) {				
			for (var i=0;i<menu.length;i++) {
				var li=$(ul).append('<li><a href="'+menu[i].link+'">'+menu[i].name+'</a></li>');
				if (menu[i].sub!=null) {
					var subul=$('<ul id="submenu_'+menu[i].link+'"></ul>');
					$(li).append(subul);
					parseMenu($(subul), menu[i].sub);
				}
			}				
		}
		var menu=$('#menu');
		menu.append('<ul id="menu-root">');
		var ul=$('#menu-root')
		parseMenu(ul, nav.menu);     
    },
    url: 'navigation.json'
});


