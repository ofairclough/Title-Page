$(document).ready(function() {


;(function(window, document){

        function enterpriseMode(){

 

               //check if spellcheck is supported, if so we are using an emulated version of IE

               if('spellcheck' in document.createElement('textarea')){

                       //check if we are in legacy document mode in IE 10+

                       if (document.all && document.documentMode <= 8 && !document.addEventListener) {

                          alert('Reminder: disable Enterprise Mode in the Tools menu of Internet Explorer')

                               //we are running in document mode not enterprise mode!

                               return false

                       }else{

                               //Enterprise mode. Yay! - or IE10 if conditional comments are omitted :(

                               return true;

                       }

               }else{

                       //real IE 6,7,8, (9 this shouldn't be here if the conditional comments exist!) 

                       return false;

               }

        }

 

        return window.enterpriseMode = enterpriseMode();

})(window, document, undefined);

//REFRESH BUTTON

$('#refresh').click(function()

{

  
    location.reload(true); 
 
 });


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

//Hide Tiles if Region Not Selected

    if ( localStorage.getItem('Region')==null  ){
$('.til').css('display','none')

    }

    else{
    
      
$('#region').val(localStorage.getItem('Region'))
$('.RG').html(localStorage.getItem('Region'))

}
        

$('#region').change(function(){

localStorage.setItem('Region', $(this).val() )
$('.RG').html(localStorage.getItem('Region'))

$('.til').fadeIn();
});

  });

