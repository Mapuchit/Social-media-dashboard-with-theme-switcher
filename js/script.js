$(document).ready(function(){
    $('input:checkbox').change(function(){
        if($(this).is(':checked')){
            $("body").addClass("dark_body");
            $(".bg_pattern").addClass("dark_bg_pattern");
            $(".big_card, .small_card").addClass("dark_card_bg");
            $(".secondary_text_colour, hr").addClass("dark_secondary_text_colour");
            $(".slider").addClass("dark_slider");
        } else {
            $("body").removeClass("dark_body");
            $(".bg_pattern").removeClass("dark_bg_pattern");
            $(".big_card, .small_card").removeClass("dark_card_bg");
            $(".secondary_text_colour, hr").removeClass("dark_secondary_text_colour");
            $(".slider").removeClass("dark_slider");
        }
    });
});