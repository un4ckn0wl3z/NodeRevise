const os = require('os');

const totalMem = os.totalmem();
const freeMem = os.freemem();

console.log('Total memory: ' + totalMem);
console.log(`Free memory ${freeMem}`);

