/* Sub Menu - Header */

$(function(){
    $('.parent-menu').on('click', function(){
        $('.parent-menu').removeClass('active');
        $(this).addClass('active');
    });

    $('.show-modal').on('click', function(){
        $('#modalReSignin').show();
    });
    
    
});

$(function(){
    $('.btn-toggle').on('click', function(){
        var current = $(this).attr('id')
        if($(this).hasClass("active")) {
            $(this).removeClass('active')
            $('#tableToggle'+ current).removeClass('active')
        } else {
            $('.table-toggle').removeClass('active');
            $('.btn-toggle').removeClass('active');
            $(this).addClass('active')
            $('#tableToggle'+ current).addClass('active')
        }
        
    });
});

function is_IE() {
    return (window.navigator.userAgent.match(/MSIE|Trident/) !== null);
  }

  $(function(){ 
    if(is_IE()){
        $('#hlBanner').addClass('hide');
        $('.highlight-bg-ie').removeClass('hide');
    }
});

/* MatchHeight */
$(function() {
    if($(".why-gala-wrap").length){
        $('.why-gala-wrap').each(function() {
            $(this).find('.matchHeight').matchHeight({
                byRow: false,
                property: 'height',
                target: null,
                remove: false
            });
        });
    }
});


if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(".credit-condition-wrap").click(function(){
        $(this).children('.content').slideToggle('slow', function() {
            $(this).parent().toggleClass('active');
          });
    });
}


$(function(){ 
    // if($(".annouce-slide").length){
    //     $('.annouce-slide').marquee({
    //         duration: 5000,
    //         gap: 50,
    //         delayBeforeStart: 0,
    //         direction: 'left',
    //     });
    // }
    if($(".ads-slide").length){
        $('.ads-slide').slick({
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 900,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }
    if($(".game-slide").length){
        $('.game-slide').slick({
            arrows: false,
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 900,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 1,
                  }
                },
              ],
        });
    }

    $("#gameSlide1 .arrow-btn.right").click(function(e) {
        $("#gameSlide1 .game-slide").slick("slickNext");
    });
    $("#gameSlide1 .arrow-btn.left").click(function(e) {
        $("#gameSlide1 .game-slide").slick("slickPrev");
    });

    $("#gameSlide2 .arrow-btn.right").click(function(e) {
        $("#gameSlide2 .game-slide").slick("slickNext");
    });
    $("#gameSlide2 .arrow-btn.left").click(function(e) {
        $("#gameSlide2 .game-slide").slick("slickPrev");
    });

    $(".account-menu-btn").click(function(e) {
        if ($(".header-popup .account-menu-wrap").hasClass("show")) {
            $(".header-popup .account-menu-wrap").removeClass("show")
          } else {
            $(".header-popup .account-menu-wrap").addClass("show")
          }
    });

    $(".accordion-heading").click(function(){
        $(this).next().slideToggle('slow', function() {
            $(this).prev().toggleClass('active');
            if($(this).prev().parent().hasClass( "promotion-box" )) {
                $(this).next().toggleClass('active')
            }
          });
    });

    
    
    $('.select-required').on('change', function() {
        $(this).next().hide();
      });

    $(window).scroll(function() {
      
        if(window.scrollY > 0) {
            $('#home.header').removeClass('home');
        } else if(window.scrollY == 0) {
            $('#home.header').addClass('home');
        }

        if ((window.innerHeight + window.scrollY) + 10 >= document.body.offsetHeight) {
            $('#footerMenu').removeClass('scroll')
        } else {
            $('#footerMenu').addClass('scroll')
        }
     });

     if ($('.move').length) {
        var wow = new WOW({
            boxClass: 'move'
        });
        wow.init();
    }
});

let accordionBtn = document.querySelectorAll('.accordion-btn');
for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener('click', function(){
    this.classList.toggle('isOpen');
    let accordionContent = this.nextElementSibling;
    if (accordionContent.style.maxHeight) {
	accordionContent.style.maxHeight = null;
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    }
  });
}

