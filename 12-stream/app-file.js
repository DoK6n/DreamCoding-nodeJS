const fs = require('fs');

// 💩
const beforeMen = process.memoryUsage().rss; // 지금 사용하고 있는 메모리의 상태를 저장
fs.readFile('./file.txt', (_, data) => {
  // 파일을 읽어옴
  fs.writeFile('./file2.txt', data, () => {}); // 읽은 파일내용을 새로운 파일에다가 저장
  // calculate -> 실제로 메모리 사용에 얼마나 차이가 있는지 MB로 출력
  const afterMen = process.memoryUsage().rss;
  const diff = afterMen - beforeMen;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`);
});

// 5582848
// Consumed Memory: 5.32421875MB

// 이렇게 모든데이터를 다 읽어 오고 쓰는것은 비효율적이다.