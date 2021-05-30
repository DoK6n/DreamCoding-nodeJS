const path = require('path');

// POSIX Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname); // 경로
console.log(__filename); // 경로 + 파일명까지

console.log(path.sep); // 경로 구분자
console.log(path.delimiter); // 환경변수 구분자

console.log(path.basename(__filename)); // 파일 정보만 읽어옴
console.log(path.basename(__filename, '.js')); // 확장자 빼고 파일명만

console.log(path.dirname(__filename)); // 디렉토리 이름만

console.log(path.extname(__filename)); // 확장자만

const parsed = path.parse(__filename); // 경로 정보들 분리되서 오브젝트형태로 가져옴
console.log(parsed);

const str = path.format(parsed); // 경로를 string으로 변환
console.log(str);

console.log('isAbsolute?', path.isAbsolute(__dirname)); // 절대경로일 경우 true
console.log('isAbsolute?', path.isAbsolute('../')); // 상대경로일 경우 false

console.log(path.normalize('./folder///////sub')); // 이상한 경로를 알아서 맞게 고쳐줌

console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));
