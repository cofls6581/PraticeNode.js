//main applicartion name
//Routing
var express=require('express');
var app=express(); //application return
app.get('/',function(req,res){ //localhost:1500
  res.send('came from home!');
}); //get방식 .사이트 home에 접근 사용자
app.get('/login',function(req,res){ //localhost:1500/login
  res.send('came from login!');
})
app.listen(1500,function(){
  console.log('1500 port is connectd.');
});
