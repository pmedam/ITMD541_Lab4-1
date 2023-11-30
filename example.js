// Function to fetch data from the API
function getData() {
    // Coordinates for New York
    const latitude = 40.7128;
    const longitude = -74.0060;
    const url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}/&date=tomorrow`;

    return fetch(url)
        .then(response => {
         
            return response.json();
        })
        .then(data => {
         
            console.log(data);
           
            return data.results;
        })
        .catch(error => {
         
            console.error('Error:', error); 
        });
}
// Calling the getData function and handling the promise it returns
getData()
    .then(results => {

        for (const key in results) {
         
            if (results.hasOwnProperty(key)) {
           
                console.log(`${key}: ${results[key]}`);
                document.querySelector(`#tdsrtime`).innerHTML = results.sunrise;
            }
        }
    })
    .catch(error => {
   
        console.error("Error handling data", error);
    });