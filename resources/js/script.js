
function toggleAbout(){
                $("#aboutDesk").fadeToggle(200);
            }
$(document).ready(function(){
    $("#liRegistrationLink").css("color", "black!important");
});
            $(document).ready(function(){
                
                               if($(window).width() > 600){
                    
                    $('body').waypoint(function() {
                      $('#navvy').toggleClass('animated fadeIn');
                    }, { offset: '-100px' });
                }
                else{
                    $('body').waypoint(function() {
                      $('#navvy').toggleClass('animated fadeIn');
                    }, { offset: '-100px' });
                } 
                
            });

            function findLocation(){
                var value1 = document.getElementById("zipInput").value;
                var queryString = value1;
                window.location.href = "https://levelredboxing.com/locations.html#" + queryString;
            }
//DISABLED
//            function showMoreFree(){
//                $("div.newBar").toggleClass("bigBar");
//            }
            
            var input = document.getElementById("zipInput");
            input.addEventListener("keyup", function(event) {
              if (event.keyCode === 13) {
               event.preventDefault();
               document.getElementById("zipSearch").click();
              }
            });

function switchMem(){
    $('#leftTog').toggleClass('locSubmitc');
    $('#leftTog').toggleClass('locSubmitc3');
    $('#rightTog').toggleClass('locSubmitc3');
    $('#rightTog').toggleClass('locSubmitc');
    $('div.tilez').fadeToggle(300);
//    $('div.tiley').toggleClass('tileyShow');
    $('div.tiley').fadeToggle(300);
    $('div.tiley').toggleClass("tiley2");
}
//$(document).ready(function() {
//    
////    
////    /* For the sticky navigation */
////    $('.js--section-features').waypoint(function(direction) {
////        if (direction == "down") {
////            $('nav').addClass('sticky');
////        } else {
////            $('nav').removeClass('sticky');
////        }
////    }, {
////      offset: '60px;'
////    });
////    
////    
////    /* Scroll on buttons */
////    $('.js--scroll-to-plans').click(function () {
////       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
////    });
////    
////    $('.js--scroll-to-start').click(function () {
////       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
////    });
////    
////    
////    /* Navigation scroll */
////    $(function() {
////      $('a[href*=#]:not([href=#])').click(function() {
////        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
////          var target = $(this.hash);
////          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
////          if (target.length) {
////            $('html,body').animate({
////              scrollTop: target.offset().top
////            }, 1000);
////            return false;
////          }
////        }
////      });
////    });
//    
//    
////    /* Animations on scroll */
////    $('.js--wp-1').waypoint(function(direction) {
////        $('.js--wp-1').addClass('animated fadeIn');
////    }, {
////        offset: '50%'
////    });
////    
////    $('.js--wp-2').waypoint(function(direction) {
////        $('.js--wp-2').addClass('animated fadeInUp');
////    }, {
////        offset: '50%'
////    });
////    
////    $('.js--wp-3').waypoint(function(direction) {
////        $('.js--wp-3').addClass('animated fadeIn');
////    }, {
////        offset: '50%'
////    });
////    
////    $('.js--wp-4').waypoint(function(direction) {
////        $('.js--wp-4').addClass('animated pulse');
////    }, {
////        offset: '50%'
////    });
//    
//    
//    /* Mobile navigation */
//    $('.js--nav-icon').click(function() {
//        var nav = $('.js--main-nav');
//        var icon = $('.js--nav-icon i');
//        
//        nav.slideToggle(200);
//        
//       if (icon.hasClass('ion-navicon-round')) {
//            icon.addClass('ion-close-round');
//            icon.removeClass('ion-navicon-round');
//        } else {
//            icon.addClass('ion-navicon-round');
//            icon.removeClass('ion-close-round');
//        }        
//    });
//});