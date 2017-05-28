          // 1st lesson

// const express = require('express');
// const app = express();
// const body_parser = require('body-parser');
// app.listen(3000);
// app.use(body_parser.json());
// var markers = [
//   {
//     id: 111,
//     name: 'red marker',
//     expires: 7
//   }
// ];
// app.get('/', (req, res)=>{
//   res.send({
//     result: 'Hello',
//     target: 'world',
//     people: 10
//   })
// });
// app.get('/api/markers', (req, res)=>{
//   res.send(markers);
// });
//
// app.post('/api/markers', (req, res)=>{
//   console.log('req.body ===', req.body);
//   res.send('todo');
// });



            //2nd lesson
            // 1st task


// function isPrime(num) {
//   if(isNaN(num)){
//     return false;
// }
//   if ( isPrime.cache){
//     isPrime.cache = {};
//   }
//   if(num < 2){
//     return false;
//   }
//   for(var i = 2; i < num; ++i){
//     if(num % i == 0){
//       return false;
//     }
//     isPrime.cache = num;
//   }
//   return num;
// }
//
// console.log(isPrime("f"));


          // 2nd task

var arr = [2, 4 ,7, 9 ,10];

function binarySearch(arr, val) {
    var mid = Math.floor(arr.length / 2);
    if (arr[mid] === val) {
        console.log(val, 'founded');
    } else if (arr[mid] < val ) {
        console.log('search right', arr[mid], val);
        return binarySearch(arr.splice(mid, arr.length - 1), val);
    } else if (arr[mid] > val ) {
        console.log('search left', arr[mid], val);
        return binarySearch(arr.splice(0, mid), val);
    } else {
        console.log(val, 'not found');
    }
};
binarySearch(arr, 11);
