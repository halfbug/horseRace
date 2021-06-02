$(document).ready(function(){

    $('.classCont').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          }
        },
    
    
    
    
     ]
    
    
    
    });
    
    
    $('.distAvfSlider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
    });
    
    
    $(".accountUserTxt").click(function(){
    
        $(".myAccDrop").toggleClass("myAccDropShow");
        $(".accountUserImg").toggleClass("accountUserImgClick");
        
        $(".mainMenuCont").removeClass("mainMenuContShow");
    
    });
    
    
    $(".menuBtn").click(function(){
    
        $(".myAccDrop").removeClass("myAccDropShow");
        $(".accountUserImg").removeClass("accountUserImgClick");
    
        $(".mainMenuCont").toggleClass("mainMenuContShow");
    
    });
    
    
    
    
    
    
    
    
    });
    
    