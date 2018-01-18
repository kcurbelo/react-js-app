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

class Application extends React.Component {
  callApi(){
    // Github fetch library : https://github.com/github/fetch
    // Call the API page
    fetch('https://blockchain.info/ticker')
    .then((result) => {
      // Get the result
      // If we want text, call result.text()
      return result.json();
    }).then((jsonResult) => {
      // Do something with the result
      console.log(jsonResult);
      let usd = jsonResult.USD
      console.log(usd);
    })
  }
  
  render() {
    return <div>
      <button onClick={() => this.callApi()}>
        Click here to call API
      </button>
    </div>;
  }
}

  ReactDOM.render(
    <Application />,
    document.getElementById('root')
  );

