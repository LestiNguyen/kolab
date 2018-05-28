$(document).ready(function(){
    $(window).scroll(function(){
        let scrollTop = $(this).scrollTop();
        if(scrollTop > 100) {
            $(".section-mainMenu").addClass("scroll");
        } else {
            $(".section-mainMenu").removeClass("scroll");
        }
    });

    $(".accordion__header").click(function(){
    	$(this).parent().siblings().removeClass("active");
    	$(this).parent().toggleClass("active");
    });
    $('.toggle-asideMenu').click(function(){
        $('.sidebar').toggleClass('active');
    });
    if( $(".go-top") ) {
        var scrollTrigger = 100;
        var backToTop = function(){
            var scrollTop = $(window).scrollTop();
            if(scrollTop > scrollTrigger) {
                $(".go-top").addClass("go-top-show");
            } else {
                $(".go-top").removeClass("go-top-show");            
            }
        };
        backToTop();
        $(window).on("scroll", function(){
            backToTop();
        });
        $(".go-top").on("click", function(e){
            e.preventDefault();
            $("html, body").animate({
                scrollTop: 0,
            }, 700);
        });
    }
});