$(document).ready(function(){

	//updating timestamp of user
	function update(){
		console.log("3");
		$.ajax({
			type: 'POST',
			url: 'data.php',
			data: "update=1",
			success: function(data){
				console.log("4");
			}
		})
	}
	setInterval(update,5000);

	//getting users and their status
	function getuser(){
		console.log("2");
		$.ajax({
			type: 'POST',
			url: 'data.php',
			data: "users=1",
			success: function(data){
				$(".user").html(data);
			}
		})
	}
	setInterval(getuser,10000);

	//Practice format for ajax
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