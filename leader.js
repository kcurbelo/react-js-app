
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
      // selects the currency
      let selectUSD = jsonResult.USD;
      let selectEUR = jsonResult.EUR;
      let selectSEK = jsonResult.SEK;
      let selectGBP = jsonResult.GBP;
      let selectAUD = jsonResult.AUD;
      let selectJPY = jsonResult.JPY;
      console.log(selectJPY)
      let selectCNY = jsonResult.CNY;

      // Selects the price
      let usdPrice = selectUSD.last
      let eurPrice = selectEUR.last
      let sekPrice = selectSEK.last
      let gbpPrice = selectGBP.last
      let audPrice = selectAUD.last
      let jpyPrice = selectJPY.last
      console.log(jpyPrice)
      let cnyPrice = selectCNY.last



      // Stringify json to get it to be able to be put on screen
      usdPrice = JSON.stringify(usdPrice);
      eurPrice = JSON.stringify(eurPrice);
      sekPrice = JSON.stringify(sekPrice);
      gbpPrice = JSON.stringify(gbpPrice);
      audPrice = JSON.stringify(audPrice);
      jpyPrice = JSON.stringify(jpyPrice);
      console.log(jpyPrice)
      cnyPrice = JSON.stringify(cnyPrice);      



      // Set variable to element
      // let usdText = document.getElementById('usd-cont');

      // Change inner html
      // usdText.innerHTML = usd;
      
      // Run function to change innerhtml
      document.getElementById("usd-btn").addEventListener("click", usdFunction);
      document.getElementById("eur-btn").addEventListener("click", eurFunction);
      document.getElementById("sek-btn").addEventListener("click", sekFunction);
      document.getElementById("gbp-btn").addEventListener("click", gbpFunction);
      document.getElementById("aud-btn").addEventListener("click", audFunction);
      document.getElementById("jpy-btn").addEventListener("click", jpyFunction);
      document.getElementById("cny-btn").addEventListener("click", cnyFunction);

      function usdFunction() {
          document.getElementById("cur-main").innerHTML = usdPrice;
      } 
      function eurFunction() {
          document.getElementById("cur-main").innerHTML = eurPrice;
      }
      function sekFunction() {
          document.getElementById("cur-main").innerHTML = sekPrice;
      } 
      function gbpFunction() {
          document.getElementById("cur-main").innerHTML = gbpPrice;
      } 
      function audFunction() {
          document.getElementById("cur-main").innerHTML = audPrice;
      } 
      function jpyFunction() {
          document.getElementById("cur-main").innerHTML = jpyPrice;
      }  
      function cnyFunction() {
          document.getElementById("cur-main").innerHTML = cnyPrice;
      }                               

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
