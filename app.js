//main applicartion name
//Routing
var express=require('express');
var app=express(); //application return
var bodyParser=require('body-parser'); //post 사용위해
app.use(bodyParser.urlencoded({extended:false}))
app.locals.pretty = true; //jade코드 looks pretty
app.set('views','./views'); //jade파일들 view dir에 보관
app.set('view engine','jade');
app.use(express.static('public')); ///정적파일추가 //localhost:1500/~~
app.get('/form',function(req,res){
  res.render('form');
});
/*app.get('/form_receiver',function(req,res){ //url에 정보 표시됨
  var ansone=req.query.ansone;
  var anstwo=req.query.anstwo;
  res.send(ansone+','+anstwo);
});*/
app.post('/form_receiver',function(req,res){ //body-parser이용해 req가 갖고있지않던 body객체 추가
  //url에 정보표시안됨
  var ansone=req.body.ansone;
  var anstwo=req.body.anstwo;
  res.send(ansone+','+anstwo);
})
app.get('/idName',function(req,res){
  res.send(req.query.id+','+req.query.name); //localhost:1500/topic?id=1&name=cl
});
/*app.get('/topic/:id',function(req,res){ //querystring
  var numbers=[
    'First',
    'Second',
    'Third'
  ];
  var show=`
  <a href="/topic?id=0">one</a><br>
  <a href="/topic?id=1">two</a><br>
  <a href="/topic?id=2">three</a><br>
  ${numbers[req.query.id]}
  `
  res.send(show);
})*/
app.get('/topic/:id',function(req,res){ //semantic URL
  var numbers=[
    'First',
    'Second',
    'Third'
  ];
  var show=`
  <a href="/topic?id=0">one</a><br>
  <a href="/topic?id=1">two</a><br>
  <a href="/topic?id=2">three</a><br>
  ${numbers[req.parans.id]} //parameters 줄임
  `
  res.send(show);
})
app.get('/topics/:id/:mode',function(req,res){ //semantic URL
  res.send(req.query.id+','+req.query.mode);
})
app.get('/template',function(req,res){ //temp라는 탬플릿 파일을 랜더링
  res.render('temp', {time:Date(),titlename:'Jade'});
})
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
