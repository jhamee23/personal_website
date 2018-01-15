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
        $("#aboutme").hide();
    $(".show_hide").on("click", function () {
        var txt = $("#aboutme").is(':visible') ? 'Read More' : 'Read Less';
        $(".show_hide").text(txt);
        $(this).next('#aboutme').slideToggle(200);
});