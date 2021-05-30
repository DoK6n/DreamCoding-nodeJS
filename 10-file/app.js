const fs = require('fs');

try {
  // 비추천 방식
  fs.renameSync('./text.txt', './text-new.txt'); // 동기적으로 파일이름을 변경
} catch (error) {
  // 에러가 발생한것을 캐치해서 잡아서
  console.log(error); // 에러를 출력하고 계속 진행
}

fs.rename('./text-new.txt', './text.txt', error => console.log(error));

console.log('hello');

fs.promises //
  .rename('./text2.txt', './text2-new.txt')
  .then(() => console.log('Done!'))
  .catch(console.error);
