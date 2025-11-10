document.getElementById('search').addEventListener('click', () => {
    const city = document.getElementById('city').value.trim();
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    const apiKey = '13c44865a7a4404386155632251510';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = `
            <h2>${data.location.name}, ${data.location.country}</h2>
            <p><img src="https:${data.current.condition.icon}" alt="icon"> ${data.current.temp_f}°F - ${data.current.condition.text}</p>
        `;

        })
        .catch(error => {
            document.getElementById('results').innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
        });
});


/*
.then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = `
            <h2>${data.location.name}, ${data.location.country}</h2>
            <p><img src="https:${data.current.condition.icon}" alt="icon"> ${data.current.temp_f}°F - ${data.current.condition.text}</p>
        `;
*/

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}