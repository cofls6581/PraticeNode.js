var fs=require ('fs');
//sync
console.log(1);
var sync=fs.readFileSync('data.txt',{encoding:'utf8'});
console.log(sync);

//async
console.log(2);
fs.readFile('data.txt', {encoding:'utf8'},function(err,data){
  console.log(3);
  console.log(sync);
})
console.log(4);
