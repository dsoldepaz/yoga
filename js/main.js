$.ajax({
    dataType: 'text',
    success: function(string) {
        var nav = $.parseJSON(string);
		function parseMenu(ul, menu) {				
			for (var i=0;i<menu.length;i++) {
				
				var li=$('<li><a href="'+menu[i].link+'">'+menu[i].name+'</a></li>');
				$(ul).append(li);
				if (menu[i].sub!=null) {
					var subul=$('<ul></ul>');
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

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}
