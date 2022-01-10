const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://www.twse.com.tw/exchangeReport/STOCKDAY?response=json&date=20220109&stockNo=2330&_=1641716312720')
  .then(function ('http://34.221.173.92:300/data') {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });