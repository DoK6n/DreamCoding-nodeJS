const fs = require('fs');

// ð©
const beforeMen = process.memoryUsage().rss; // ì§ê¸ ì¬ì©íê³  ìë ë©ëª¨ë¦¬ì ìíë¥¼ ì ì¥
fs.readFile('./file.txt', (_, data) => {
  // íì¼ì ì½ì´ì´
  fs.writeFile('./file2.txt', data, () => {}); // ì½ì íì¼ë´ì©ì ìë¡ì´ íì¼ìë¤ê° ì ì¥
  // calculate -> ì¤ì ë¡ ë©ëª¨ë¦¬ ì¬ì©ì ì¼ë§ë ì°¨ì´ê° ìëì§ MBë¡ ì¶ë ¥
  const afterMen = process.memoryUsage().rss;
  const diff = afterMen - beforeMen;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`);
});

// 5582848
// Consumed Memory: 5.32421875MB

// ì´ë ê² ëª¨ë ë°ì´í°ë¥¼ ë¤ ì½ì´ ì¤ê³  ì°ëê²ì ë¹í¨ì¨ì ì´ë¤.