const axios = require('axios');

var foobar = () => {
  return new Promise((resolve, reject) => {
    // setTimeout(function() {
    //   resolve('FOO')
    // }, 1000)
    setTimeout(() => {
      resolve('FOO')
    }, 1000)
  })
}


foobar().then(result => {
  console.log(result + 'BAR');
})

var mySecondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise');
  }, 500)
})

let x = mySecondPromise.then((result) => {
  const answer = 'mySecond' + result;
  console.log('answer: ', answer);
  // return 'mySecond' + result;
})

console.log(x); // x is jus ta pending promise

let rootURL = 'https://app.ticketmaster.com';
let queryURL = '/discovery/v2/attractions.json?apikey=0rsH4lBVKM2OtCeWX791mt7zGcY0LYc0&size=1&keyword=logic'
let ex = '/discovery/v2/attractions/K8vZ9175BhV.json?apikey=0rsH4lBVKM2OtCeWX791mt7zGcY0LYc0'
// axios.get(rootURL + ex).then((res) => {
axios.get(rootURL + queryURL).then((res) => {
  console.log('res.data._embedded: ', res.data._embedded.attractions);
})
// Find some Logic Tickets
