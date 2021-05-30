const fs = require('fs').promises;

// 파일읽기
fs.readFile('./text.txt', 'utf8') //
  .then(data => console.log(data))
  .catch(console.error);

// 파일쓰기 writeFile -> 여러번 하면 덮어쓰기됨
fs.writeFile('./file.txt', 'Hello, Dream Coders! :)') //
  .catch(console.log.error);

// appendFile는 내용 추가
fs.appendFile('./file.txt', 'Yo, Dream Coders! :)') //
  .catch(console.log.error);

// 복사
// 비동기적으로 처리되기 때문에 데이터를 쓰기도 전에 복사가 될 수 있어 내용이 복사가 안될 수도 있다.
// 순서가 중요하다면 then안에서, 데이터가 써지고 난 후에 실행을 해주도록 한다.
fs.copyFile('./file.txt', './file2.txt') //
  .catch(console.error);

// 폴더
fs.mkdir('sub-folder').catch(console.error);

// 해당하는 경로의 모든 파일이름과 폴더를 가져올 수 있다. ls
fs.readdir('./') //
  .then(console.log)
  .catch(console.error);
