$ (document).ready(function(){
    
    $("#owl-demo").owlCarousel({
        
        autoplay:3000, //Set Autoplay to 3 seconds
        loop:true,
    	margin:10,
    	responsiveClass:true,
    	responsive:{

        	320:{
            	items:1,
            	nav:true
        		},

        	551:{
            	items:3,
            	nav:false
        		},

        	800:{
            	items:6,
            	nav:true,
            	loop:false
        		}
    		}

    	});
});