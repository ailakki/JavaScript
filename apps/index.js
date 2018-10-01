const express = require('express');
const request = require('request');
const app = express()

// can be changed
let apiKey = process.argv[2];
let city = 'oslo';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
      let weather = JSON.parse(body)
      let message = `It's ${weather.main.temp} farenheit in ${weather.name}!`;
      app.get('/',(req,res) => res.send(message));
  }
});

app.listen(8000, () => console.log('listen to 8000'));
// open webbrwser go to http://localhost:8000
