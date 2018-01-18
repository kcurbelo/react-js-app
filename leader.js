
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
      usd = JSON.stringify(usd);
      let usdText = document.getElementById('usd-cont');
      usdText.innerHTML = usd;
    })
  }
  
  render() {
    return <div>
      <p >
        {this.callApi()}
      </p>
    </div>;
  }
}

  ReactDOM.render(
    <Application />,
    document.getElementById('run-app')
  );
