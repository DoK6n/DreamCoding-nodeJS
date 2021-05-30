const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => console.log('setTimeout1'), 0);
setTimeout(() => console.log('setTimeout2'), 0);

process.nextTick(() => console.log('nextTick'));
// nextTick : 태스크큐에 이미 다른 콜백함수가 있어도 순서를 무시하고 우선순위를 높여서 태스크큐 제일 앞부분에 넣어준다.

for (let i = 0; i < 100; i++) {
  console.log('for loop');
}
