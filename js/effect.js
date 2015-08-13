$(function(){
    $(".breaking_desc li").hide();
    $(".breaking_desc li:first").show();
    $(".breaking_title li:eq(0) a").addClass("bkn_selected");
    $(".breaking_title li a").bind("click focusin", function(){
        $(".breaking_title li a").removeClass("bkn_selected");
        $(this).addClass("bkn_selected");
        $(".breaking_desc > li").hide();
        $($(this).attr("href")).show();
        return false;
    });
    
    $("body").append('<div id="whiteLayer"></div><div id="showLayer"></div>');
    $("#whiteLayer, #showLayer").hide();

    $("a.modal_galley").click(function(e){
        e.preventDefault();
        $("#whiteLayer").fadeIn();
        $("#showLayer").fadeIn().html('<img src="'+ $(this).attr("href") +'" alt="'+ $(this).children("img").attr("alt") +'">'+'<div class="close"></div>');
        $("#showLayer").children("img").css("width","100%");
        $(".close").click(function(){
            $("#whiteLayer, #showLayer").hide();
        });
    });
    $("#whiteLayer").click(function(){
        $("#whiteLayer, #showLayer").hide();
    });
});