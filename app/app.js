jQuery(function($) {

  $('.button').click(function() {
    $('.button').not(this).removeClass('is-active');
    $(this).addClass('is-active');
    displayRightBoxes();
  });

});

$( document ).ready(function() {
  displayRightBoxes();
});

function displayRightBoxes(){
  let finElement = document.getElementById('fin-mode');
  let actElement = document.getElementById('act-mode');
  let futElement = document.getElementById('fut-mode');
  let meElement = document.getElementById('me-mode');
  let conElement = document.getElementById('con-mode');

  if(finElement !== null){
    if(finElement.classList.contains('is-active')){
    	$('.fin-box').addClass('visibleBox');
    }else{
    	$('.fin-box').removeClass('visibleBox');
    }
  }

  if(actElement !== null){
    if(actElement.classList.contains('is-active')){
    	$('.act-box').addClass('visibleBox');
    }else{
    	$('.act-box').removeClass('visibleBox');
    }
  }

  if(futElement !== null){
    if(futElement.classList.contains('is-active')){
    	$('.fut-box').addClass('visibleBox');
    }else{
    	$('.fut-box').removeClass('visibleBox');
    }
  }
 
  if(meElement !== null){
    if(meElement.classList.contains('is-active')){
    	$('.me-box').addClass('visibleBox');
    }else{
    	$('.me-box').removeClass('visibleBox');
    }
  }
  
  if(conElement !== null){
    if(conElement.classList.contains('is-active')){
    	$('.con-box').addClass('visibleBox');
    }else{
    	$('.con-box').removeClass('visibleBox');
    }
  }






}