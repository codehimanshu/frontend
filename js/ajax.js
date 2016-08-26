$(document).ready(function(){
	$("button").click(function(){
		
		function getdata(){
			console.log("1");
			$.ajax({
				type: 'POST',
				url: 'data.php',
				data: "id=1",
				success: function(data){
					$(".msg").html(data);
				}
			});
		}

		setInterval(getdata,500);
	});

});