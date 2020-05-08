console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');
  addMyEventListeners();

});

//Events
function addMyEventListeners(){
  //mobile menu click event
  $('.mobile-menu').on('click', function() {
    changeMobileMenuToX(); //execute function
    toggleNav();
    
  });

  //window resize event 
  $(window).on('resize', function () {
    showHideDesktopNav();
  });

  //Accordian click event on each heading
  $('.heading').on('click', function() {
    $( this ).each(function( i ){
      toggleContent(this);//execute function
    });
  });
  
  //scroll back top click event
  $('#back-to-top').click(function(){
    console.log('Button has been clicked');
    scrollToTop();
  });

}

//Toggle hide / show Nav
function toggleNav(){
  $('nav').slideToggle();
};

//Toggle mobile menu to X
function changeMobileMenuToX(){
  $(".mobile-menu").toggleClass( "change");
};

//show desktop navigation when window is resized
function showHideDesktopNav() {
  if( $(window).width() >= 990)
  {
      $('nav').show();
  } else 
  {
      $('nav').hide();
      $(".mobile-menu").removeClass( "change");
  }
}

//Accordian toggle content 
function toggleContent(heading){
  $(heading).next().slideToggle();
};

//scroll back to top
function scrollToTop(){
  console.log('scrollToTop() has been invoked');
  $('html').animate({scrollTop:0}, 1500);
};
