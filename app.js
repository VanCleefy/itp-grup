const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const shopRoutes = require('./routes/shop');

//1. Import coingecko-api
const CoinGecko = require('coingecko-api');
 
//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();
 
// //3. Make calls
// var func2 = async() => {
//   let data = await CoinGeckoClient.ping();
//     console.log('Hello, the response is:' + data.message)
// };

//var c = {};
// var func = async() => {
//   let data = await CoinGeckoClient.exchanges.fetchTickers('bitfinex', {coin_ids: ['bitcoin']});
//   var _coinList = {};
//   //var c = {};
//   const name = data.data.name;
//   console.log('Data provided by: ' + name);
//   //console.log(name);
//   //console.log(data.data);
//   //const base = data.data.tickers.base;
//   //console.log(base);
//   //console.log(data.data.tickers.filter(t => t.target == 'USD'));
//   var _datacc = data.data.tickers.filter(t => t.target == 'USD');
//   //var base = _datacc.base;
//   //console.log(_datacc);
//   [
//     'BTC'
//   ].forEach((i) => {
//     var _temp = _datacc.filter(t => t.base == i);
//     //console.log(_temp);
//     //console.log('-----------------------------------------');
//     var _res = _temp.length == 0 ? [] : _temp[0];
//     //console.log(_res);
//     // console.log('-----------------------------------------');
//     _coinList['name'] = _res.coin_id;
//     _coinList['price'] = _res.last;
//     _coinList['eth_ratio'] = _res.converted_last.eth;
//     c = _coinList;
//     console.log(_coinList);
//     //console.log('-----------------------------------------');
//     // _trustList[i] = _res.coin_id;
//     // d = JSON.stringify(_coinList);
//     // s = d.split(':');
//     //console.log(); 

//     // const name = s[0].replace(/[^a-z0-9]/gi, '');
//     // const price = s[1].replace(/[^a-z0-9]/gi, '');
//     // const prod = [];
//     // const prod2 = prod.push(name, price);
//     // console.log(prod); 
//     //c['name'] = JSON.stringify(prod).split('');
//     //console.log(c);
//   })
//    //console.log(_coinList);
// };


// function splitStr(str) {
      
//   // Function to split string
//   var string = str.split("*");
    
//   console.log(string);
// }

// // Initialize string
// var str = "Welcome*to*GeeksforGeeks";

// // Function call
// return splitStr(str); 


//4. Make a post
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://m001-student:m001-student@sandbox.vmxtn.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hospital");
  // dbo.collection("pacients").insertOne(c, function(err, res) {
  //   if (err) throw err;
  //   console.log("1 pacient added.");
  //   db.close();
  // });
});

//func();


// app.use((req, res, next) => {
//   // User.findById(1)
//   //   .then(user => {
//   //     req.user = user;
//   //     next();
//   //   })
//   //   .catch(err => console.log(err));
//   func();
//   next();
// });

app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3000);
});
