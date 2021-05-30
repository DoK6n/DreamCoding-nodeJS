const fs = require('fs');

const buf = Buffer.from('Hi');
console.log(buf); // <Buffer 48 69> 유니코드로 출력된다.
console.log(buf.length);
console.log(buf[0]); // 배열로 접근하면 아스키코드로 출력된다.
console.log(buf[1]);
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(2); // size가 2개인 버퍼를 만든다.
// alloc함수를 사용하면 메모리에서 사용가능한 메모리 덩어리를 찾아서 그 덩어리를 초기화 시켜준다.
const buf3 = Buffer.allocUnsafe(2);
// 덩어리를 찾긴 찾지만 초기화 시키지 않는 api인 allocUnsafe
// 기존에 다른 데이터가 들어 있으나, 사용되지 않는 메모리라면 공간은 확보하지만 초기화하지 않기 때문에 빠르다.
// 하지만 데이터가 들어있을 수도 있으므로 초기화 해주는것이 좋다.

buf2[0] = 72;
buf2[1] = 105;
// <Buffer 48 69>

buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
// HiHiHi