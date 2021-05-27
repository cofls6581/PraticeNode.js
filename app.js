//main applicartion name
//Routing
var express=require('express');
var app=express(); //application return
app.use(express.static('public')); ///정적파일추가 //localhost:1500/~~
app.get('/img',function(req,res){
  res.send('Hi icebear! <img src="/bear.jpg">')
});
app.get('/page',function(req,res){
  var lis='';
  var time=Date();
  for(var i=0; i<10;i++){
    lis=lis+'<li> list</li>';
  }
 var print=`<!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8">
     <title></title>
   </head>
   <body>
     This is html page.<br>
     It's ${time} now.
     <ul>${lis}</ul>
   </body>
 </html>`;
  res.send(print);
})
app.get('/',function(req,res){ //localhost:1500
  res.send('came from home!');
}); //get방식 .사이트 home에 접근 사용자
app.get('/login',function(req,res){ //localhost:1500/login
  res.send('came from login!');
})
app.listen(1500,function(){
  console.log('1500 port is connectd.');
});
