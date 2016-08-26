$(document).ready(function(){
	$("p").click(function(){
		$("p").hide();
	});
	$("#test").click(function(){
		$("#test").hide();
	});
	$(".test").click(function(){
		$(".test").hide();
	})
	$(".all").click(function(){
		$("*").hide();
	});
	$("button").click(function(){
		//$(this).hide();
	});
	$("button.intro").click(function(){
		$(this).hide();
	});
	$(".dblclick").dblclick(function(){
		$(this).hide();
	});
	$(".mouseenter").mouseenter(function(){
		alert("You entered mouseenter");
	});
	$(".mouseenter").mouseleave(function(){
		alert("You now leave mouseenter");
	});
	$(".mousedown").mousedown(function(){
		alert("you pressed mouse button");
	});
	$(".mousedown").mouseup(function(){
		alert("you released mouse button");
	});
	$(".hover").hover(function(){
		alert("You entered");
	},
	function(){
		alert("You left");
	});
	$("input").focus(function(){
		$(this).css("background-color", "#cccccc");
	});
	$("input").blur(function(){
		$(this).css("background-color","#ffffff" );
	});
	$(".on").on({
		mouseenter: function(){
		alert("Mouseenter");
	},
		dblclick: function(){
		$(this).hide();
	}
	});
	$(".slowhide").click(function(){
		$(this).hide(1000);
	});
	$(".toggle").click(function(){
		$(".text").toggle();
	});
	$(".fade").click(function(){
		$(".fadetext1").fadeIn();
		$(".fadetext2").fadeIn("slow");
		$(".fadetext3").fadeIn(3000);
	});
	$(".fadeout").click(function(){
		$(".fadetext1").fadeOut();
		$(".fadetext2").fadeOut("slow");
		$(".fadetext3").fadeOut(3000);
	});
	$(".fadetoggle").click(function(){
		$(".fadetext1").fadeToggle();
		$(".fadetext2").fadeToggle("slow");
		$(".fadetext3").fadeToggle(3000);
	});
	$(".fadeto").click(function(){
		$(".fadetext1").fadeTo("fast",0.15);
		$(".fadetext2").fadeTo("fast",0.4);
		$(".fadetext3").fadeTo("fast",0.7);
	});
	$(".slidedown").click(function(){
		$(".slidetext").slideDown("slow");
	});
	$(".slideup").click(function(){
		$(".slidetext").slideUp("slow");
	});
	$(".slidetoggle").click(function(){
		$(".slidetext").slideToggle("slow");
	});
	$(".animate").click(function(){
    	var jq = $(".animatetext");
    	jq.animate({height: '300px', opacity: '0.4'}, 5000);
    	jq.animate({width: '300px', opacity: '0.8'}, 5000);
    	jq.animate({height: '100px', opacity: '0.4'}, 5000);
    	jq.animate({fontSize: '3em'}, 5000);
    	jq.animate({width: '100px', opacity: '0.8'}, 5000);
    	jq.animate({fontSize: '1em'}, 5000);
	});
	$(".stop").click(function(){
		$(".animatetext").stop();
		console.log("Stopped");
	})
	$(".chain").click(function(){
		$(".chaintext").css("color","red")
			.slideDown(2000)
			.slideUp(2000);
	})
});

$(window).resize(function(){
	alert("Haaa Resizing");
});
$(window).scroll(function(){
	console.log("scrolling");
});
