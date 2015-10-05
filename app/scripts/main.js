$(document).ready(function() {




var url= window.location.href.split('/')

 if( $.inArray('western', url) > -1){

$(".navbar-brand").html('Western Canada and Territories ISB') 

$(".esp,.local").css('display','none')
 }


    
   $('.tile').mouseenter(function() {
   	$(this).fadeTo('fast',0.75)
});
   	$('.tile').mouseleave(function() {
   	$(this).fadeTo('fast',1);

   	});


  });

