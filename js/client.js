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
		$(this).hide();
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
	})
});
$(window).resize(function(){
	alert("Haaa Resizing");
});
$(window).scroll(function(){
	console.log("scrolling");
});
