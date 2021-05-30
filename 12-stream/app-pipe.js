const fs = require('fs');
const zlib = require('zlib');

// pipe 읽어온것을 새로운 파일에 쓴다. ( 파이프로 연결하는 느낌 )

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip(); // 압축
const writeStream = fs.createWriteStream('./file4.zip');
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on('finish', () => {
  console.log('done!');
});

const http = require('http');
const server = http.createServer((req, res) => {
  // 서버는 파일을 다 읽은 다음에 메모리에 들어온 data를 반응해서 보내준다.
  fs.readFile('file.txt', (err, data) => {
    res.end(data);
  });
  //
  const stream = fs.createReadStream('./file.txt');
  stream.pipe(res);
});
server.listen(3000);

// nodejs는 자바스크립트 런타임 환경