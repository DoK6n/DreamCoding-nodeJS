const os = require('os');

// console.table(os.EOL);
console.log('totalmem', os.totalmem());
console.table(os.cpus());
console.log('endianness', os.endianness());
console.log('freemem', os.freemem());
console.log('getPriority', os.getPriority());
console.log('homedir', os.homedir());
console.log('hostname', os.hostname());
console.log('loadavg', os.loadavg());
console.log('platform', os.platform());
console.log('release', os.release());
console.log('tmpdir', os.tmpdir());
console.log('type', os.type());
console.log('userInfo', os.userInfo());
console.log('uptime', os.uptime());
console.log('version', os.version());