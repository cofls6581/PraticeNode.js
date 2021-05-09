a=[4,2,7,3,9];console.log(a);
a=[4,2,7,3,9];a.sort();console.log(a);
//아래 두개는 실행 결과 cmd창에서만 제대로 출력됨.
//a=[4,2,7,3,9];function b(v1,v2){return v2-v1}; a.sort();console.log(a);
//a=[4,2,7,3,9];function b(v1,v2){return v1-v2}; a.sort();console.log(a);
a=[4,2,7,3,9];a.sort(function(v1,v2){return v2-v1;});console.log(a);
function sort(callback){callback();};
sort(function(){console.log('callback!')});
