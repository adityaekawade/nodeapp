/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello \n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/



const http = require('http'); 
const fs = require('fs'); 

http.createServer(function(req,res){
	fs.readFile('index.html', function(err, data){
		  res.statusCode = 200;
		  res.setHeader('Content-Type', 'text/html');
		  res.end(data);
	})
}).listen(3000, '127.0.0.1'); 
console.log('Server is runnung'); 
