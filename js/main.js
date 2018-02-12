"use strict";
$(document).ready(function(){

	$(".input").on("focus", function() {
		$(".login-form").addClass("focused");
	})
	$(".input-btn").on("click", function(e) {
		e.preventDefault();
		$(".login-form").removeClass("focused").addClass("loading");
	})
    
//change theme color for list
        $(".gear-check").click(function(){
        $(".color-option").fadeToggle(1000);
    });
	var colorLi = $(".option-box .color-option ul li");
	colorLi 
    .eq(0).css("backgroundColor" , "crimson" ).end()
	.eq(1).css("backgroundColor" , "#3f18d8" ).end()
	.eq(2).css("backgroundColor" , "#10bae0" ).end()
    .eq(3).css("backgroundColor" , "#0ecc40" ).end()
    .eq(4).css("backgroundColor" , "#dc6612" ).end()

	colorLi.click(function(){
		$("link[href*='theme']").attr("href" , $(this).attr("data-name"));
	});
///////////////////////////////////////////////////

});