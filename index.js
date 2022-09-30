const api = {
	key: "96c6106dcd7d57b4029187de42af7fc6",
	baseurl: "http://api.openweathermap.org/data/2.5/",
};

let search = document.querySelector('.searchy');
let searchInput = document.querySelector('.search-box');

search.addEventListener('click', function pressKey(e) {
	if (searchInput.value === '') {
		alert('Please Input City Name')
	} else {
		console.log(searchInput.value);
		getApi(searchInput.value);
		searchInput.value = '';
	}	
	
});

let getApi = async function(outCome) {

	try{
	let res = await fetch(`${api.baseurl}weather?q=${outCome}&units=metric&APPID=${api.key}`);
	if (!res.ok) throw new Error('Comrade Can You Please Input Valid City Name');
	let resApi = await res.json();
	console.log(resApi);
	let city = document.querySelector('.city');
  city.innerText = `${resApi.name}, ${resApi.sys.country}`;
  let insertDate = document.querySelector('.date');
  let date = new Date();
  insertDate.innerText = createDate(date);
  let temp = document.querySelector('.tempy');
  temp.innerText = `${Math.round(resApi.main.temp)}`

  let weather = document.querySelector('.weather');
  weather.innerText = `${resApi.weather[0].main}`
  
let max = document.querySelector('.max');
max.innerText = `${Math.round(resApi.main.temp_max)}`;
let min = document.querySelector('.min');
min.innerText = `${Math.round(resApi.main.temp_min)}`;
} catch(err) {
	//alert(err.message);
};
};
let createDate = function(time) {
	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decmeber'];
	let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	let realDay = week[time.getDay()];
	let realDate = time.getDate();
	let realMonth = months[time.getMonth()];
	let realYear = time.getFullYear();

	return `${realDay} ${realDate} ${realMonth} ${realYear}`;
}; 

document.addEventListener('load', getApi('enugu')
);


