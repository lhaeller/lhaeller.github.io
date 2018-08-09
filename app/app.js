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

  let codeProjectElement = document.getElementById('cp-mode');
  let missionElement = document.getElementById('mis-mode');
  let occupationElement = document.getElementById('occ-mode');
  let meElement = document.getElementById('me-mode');
  let sideProjectElement = document.getElementById('sp-mode');


  if(codeProjectElement !== null){
    if(codeProjectElement.classList.contains('is-active')){
    	$('.code-project-box').addClass('visibleBox');
    }else{
    	$('.code-project-box').removeClass('visibleBox');
    }
  }

  if(missionElement !== null){
    if(missionElement.classList.contains('is-active')){
      $('.mission-box').addClass('visibleBox');
    }else{
      $('.mission-box').removeClass('visibleBox');
    }
  }

  if(occupationElement !== null){
    if(occupationElement.classList.contains('is-active')){
      $('.occupation-box').addClass('visibleBox');
    }else{
      $('.occupation-box').removeClass('visibleBox');
    }
  }
 
  if(meElement !== null){
    if(meElement.classList.contains('is-active')){
    	$('.me-box').addClass('visibleBox');
    }else{
    	$('.me-box').removeClass('visibleBox');
    }
  }
  
  if(sideProjectElement !== null){
    if(sideProjectElement.classList.contains('is-active')){
    	$('.side-project-box').addClass('visibleBox');
    }else{
    	$('.side-project-box').removeClass('visibleBox');
    }
  }


}
