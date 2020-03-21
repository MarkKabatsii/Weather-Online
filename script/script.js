function dateTemp (date){
    let names = new Date((date) * 1000).toUTCString();
    let nameList = names.split(/\s* \s*/);
    let time = nameList[4].split(/\s*:\s*/);
    return `${nameList[0]} ${nameList[1]} ${nameList[2]} ${time[0]}:${time[1]}`;
}

let promise1 = new Promise((resolve, reject) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=293397&APPID=5b14d038e46448d6d9bf9eb09ad833a3`)
        .then(data => resolve(data.json()))
});

let promise2 = new Promise((resolve, reject) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=294801&APPID=5b14d038e46448d6d9bf9eb09ad833a3`)
        .then(data => resolve(data.json()))
});

Promise.all([promise1, promise2]).then(value => {
    document.querySelectorAll('.date-time').forEach((element, key) => element.innerHTML = dateTemp(value[key].list[0]['dt']));
    document.querySelectorAll('.city-name').forEach((element, key) => element.innerHTML = value[key].city['name']);
    document.querySelectorAll('.weather-icon').forEach((element, key) => element.innerHTML = `<img src = "https://openweathermap.org/img/wn/${value[key].list[0].weather[0].icon}@2x.png">`);
    document.querySelectorAll('.degree').forEach((element, key) => element.innerHTML = Math.round(value[key].list[0].main.temp -273) + '&deg;');
    document.querySelectorAll('.temp_min').forEach((element, key) => element.innerHTML = `min <span>${Math.round(value[key].list[0].main.temp_min -273)} &deg;</span>`);
    document.querySelectorAll('.temp_max').forEach((element, key) => element.innerHTML = `max <span>${Math.round(value[key].list[0].main.temp_max -273)} &deg;</span>`);
    document.querySelectorAll('.weather-cloudy').forEach((element, key) => element.innerHTML = `Description <span>${value[key].list[0].weather[0].description}</span>`);
    document.querySelectorAll('.wind_speed').forEach((element, key) => element.innerHTML = `Wind speed <span>${value[key].list[0].wind.speed} mps</span>`);
    document.querySelectorAll('.degree-feels_like').forEach((element, key) => element.innerHTML = `Feels like <span>${Math.round(value[key].list[0].main.feels_like -273)} &deg;</span>`);
    document.querySelectorAll('.pressure').forEach((element, key) => element.innerHTML = `Pressure <span>${value[key].list[0].main.pressure} hpa</span>`);
    document.querySelectorAll('.humidity').forEach((element, key) => element.innerHTML = `Humidity <span>${value[key].list[0].main.humidity} &deg;</span>`);
    document.querySelectorAll('.wd05').forEach((element, key) => element.innerHTML =  dateTemp(value[key].list[4]['dt']));
    document.querySelectorAll('.ti05').forEach((element, key) => element.innerHTML = `<img src = "https://openweathermap.org/img/wn/${value[key].list[4].weather[0].icon}@2x.png">`);
    document.querySelectorAll('.clock-degree-05').forEach((element, key) => element.innerHTML = `${Math.round(value[key].list[4].main.temp -273)} &deg;`);
    document.querySelectorAll('.ti12').forEach((element, key) => element.innerHTML = `<img src = "https://openweathermap.org/img/wn/${value[key].list[12].weather[0].icon}@2x.png">`);
    document.querySelectorAll('.clock-degree-12').forEach((element, key) => element.innerHTML = `${Math.round(value[key].list[12].main.temp -273)} &deg;`);
    document.querySelectorAll('.wd12').forEach((element, key) => element.innerHTML =  dateTemp(value[key].list[12]['dt']));
    document.querySelectorAll('.ti20').forEach((element, key) => element.innerHTML = `<img src = "https://openweathermap.org/img/wn/${value[key].list[20].weather[0].icon}@2x.png">`);
    document.querySelectorAll('.clock-degree-20').forEach((element, key) => element.innerHTML = `${Math.round(value[key].list[20].main.temp -273)} &deg;`);
    document.querySelectorAll('.wd20').forEach((element, key) => element.innerHTML =  dateTemp(value[key].list[20]['dt']));
    document.querySelectorAll('.ti28').forEach((element, key) => element.innerHTML = `<img src="https://openweathermap.org/img/wn/${value[key].list[28].weather[0].icon}@2x.png">`);
    document.querySelectorAll('.clock-degree-28').forEach((element, key) => element.innerHTML = `${Math.round(value[key].list[28].main.temp -273)} &deg;`);
    document.querySelectorAll('.wd28').forEach((element, key) => element.innerHTML = dateTemp(value[key].list[28]['dt']));
    document.querySelectorAll('.ti36').forEach((element, key) => element.innerHTML = `<img src="https://openweathermap.org/img/wn/${value[key].list[36].weather[0].icon}@2x.png">`);
    document.querySelectorAll('.clock-degree-36').forEach((element, key) => element.innerHTML = `${Math.round(value[key].list[36].main.temp -273)} &deg;`);
    document.querySelectorAll('.wd36').forEach((element, key) => element.innerHTML =  dateTemp(value[key].list[36]['dt']));
});