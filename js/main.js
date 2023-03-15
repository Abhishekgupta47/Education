$(document).ready(function(){
    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times'); 
      $('.navbar').toggleClass('nav-toggle') 
    })
 $(window).on('scroll load',function(){
    $('.fa-bars').removeClass('fa-times');

    $('.navbar').removeClass('nav-toggle');

    if($(window).scroll()>30){
        $('header').addClass('header');
    }else{
        $('header').removeClass('header');

    }
 })
})