///////////////////////////////////////////////////////////////////////////////
//////    Navigation
///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////
//////    Formulary
///////////////////////////////////////////////////////////////////////////////



function validateForm(evObject) {
    evObject.preventDefault();

    var formulary = document.formgroup;
    var caracterEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var caracterText = /^\s*$/;
    var caracterNum = /^([0-9]+){9}$/;
    var allready = true;

    for ( var n = 0; n < formulary.length; n++ ) {
        if( formulary[n].type == 'text' ) {
            if ( formulary[n].value == null ) {
                $('#req-1').css('display', 'block');
                allready = false; 
            } else if ( formulary[n].value.length == 0 || caracterText.test(formulary[n].value) ) {
                $('#val-1').css('display', 'block');
                allready = false; 
            } else {
                $('#val-1').css('display', 'none');
                $('#req-1').css('display', 'none');
            }
        }
    }

    for ( var e = 0; e < formulary.length; e++ ) {

         if ( formulary[e].type == 'email' ){

            if ( formulary[e].value == null ) {

               $('#req-2').css('display', 'block');
                allready = false; 

            } else if ( formulary[e].value.length == 0 || caracterEmail.test(formulary[e].value) ) {

                $('#val-2').css('display', 'block');
                allready = false; 

            } else {

                $('#val-2').css('display', 'none');
                $('#req-2').css('display', 'none');

            }
        }
    }

    for ( var p = 0; p < formulary.length; p++ ) {
         if ( formulary[p].type == 'phone' ){

            if ( formulary[p].value == null ) {

               $('#req-3').css('display', 'block');
                allready = false; 

            } else if ( formulary[p].value.length == 0 || caracterNum.test(formulary[p].value) ) {

                $('#val-3').css('display', 'block');
                allready = false; 

            } else {

                $('#val-3').css('display', 'none');
                $('#req-3').css('display', 'none');

            }
        }
    }

    for ( var m = 0; m < formulary.length; m++ ) {
         if ( formulary[m].name == 'write' ){

            if ( formulary[m].value == null ) {

               $('#req-4').css('display', 'block');
                allready = false; 

            } else if ( formulary[m].value.length <= 30 ) {

                $('#val-4').css('display', 'block');
                allready = false; 

            } else {

                $('#val-4').css('display', 'none');
                $('#req-4').css('display', 'none');

            }
        }
    }

    console.log(allready);
    if ( allready == true ) {
        formulary.submit();
    }
}

window.onload =  function(){
    document.formgroup.addEventListener('submit', validateForm);
}

///////////////////////////////////////////////////////////////////////////////
//////    Google Maps API
///////////////////////////////////////////////////////////////////////////////

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

