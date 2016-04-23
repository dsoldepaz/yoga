var nav;

$.ajax({
    dataType: 'text',
    success: function(string) {
        nav = $.parseJSON(string);		
    },
    url: 'navigation.json'
});

$(function () {      
    function parseMenu(ul, menu) {
		for (var i=0;i<menu.length;i++) {
			var li=$(ul).append('<li><a href="'+menu[i].link+'">'+menu[i].name+'</a></li>');
			if (menu[i].sub!=null) {
				var subul=$('<ul id="submenu'+menu[i].link+'"></ul>');
				$(li).append(subul);
				parseMenu($(subul), menu[i].sub);
			}
		}
	}
	var menu=$('#menu');
	parseMenu(menu, nav.menu);
});
