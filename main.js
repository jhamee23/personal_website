$(document).ready(function() {
    $("#aboutme").click(function() {
        $('html, body').animate({
            scrollTop: $(".second").offset().top
        }, 800);
    })
    $("#education").click(function(){
    	$('html, body').animate({
    		scrollTop: $(".third").offset().top
    	}, 800);
    })
    $("#none").click(function(){
    	$('html, body').animate({
    		scrollTop: $(".banner").offset().top
    	}, 800);
    })
    $("#contact").click(function(){
    	$('html, body').animate({
    		scrollTop: $(".contact").offset().top
    	}, 800);
    });

$(".aboutme , .skills , .me").click(function() {
        var obj = $(this);
        $('.content3').animate({
            width: "50%"
        }, 600);
        $(".information").animate({
            width: "49.8%"
        }, 600, function() {
            $(".aboutme_info").fadeOut();
            $(".skills_info").fadeOut();
            $(".me_info").fadeOut();
            if ($(obj).hasClass('aboutme')) {
                $(".aboutme_info").fadeIn(600);
            } else if ($(obj).hasClass('skills')) {
                $(".skills_info").fadeIn(600);
            } else if ($(obj).hasClass('me')) {
                $(".me_info").fadeIn(600);
            }

        });
    });
});