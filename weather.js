const key = '4fc2d26e9b6897382e2b79c63386c906';
const searchTemperature = () => {
    const city = document.getElementById('city-name').value ;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    // console.log(url);

   fetch(url)
   .then(Response => Response.json())
   .then(data => displayTemperature(data));
}

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}

const displayTemperature = (temperature) => {
    console.log(temperature);
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('lead', temperature.weather[0].main);
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById('icon');
    imageIcon.setAttribute('src', url);
    // setInnerText('icon', temperature.weather[0].main);
}