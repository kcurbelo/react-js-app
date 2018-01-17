		$(document).ready(function() {
		    $.get('https://blockchain.info/ticker', function(data) {
		        // $("#data").text(data);
		        console.log(data.USD);
		    });
		});


// Round 2

		var x;
		$.get( 'https://blockchain.info/ticker', function(data){
			x = data;
			console.log(x);
		});
		
		console.log(x)		




// Round 3
		    $.get('https://blockchain.info/ticker', function(data) {
        // $("#data").text(data);
        console.log(data.USD);
        let bubba = data;
        console.log(bubba)
        bubba = JSON.stringify(bubba);

                $("#demoz").html(bubba);

    });