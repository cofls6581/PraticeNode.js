/*웹서버만들 */
const http = require('http'); //require-nodejs의 http 부품이 필요함
//cont=constant 변수지만 상수

const hostname = '127.0.0.1';
const port = 1334; //listening

http.createServer((req, res) => { //createServer=http.Server 객체 리턴함
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello World\n'); //응답결과
}).listen(port, hostname, () => { //http.Server의 하위 메소드 listen
 console.log(`Server running at http://${hostname}:${port}/`);
});
