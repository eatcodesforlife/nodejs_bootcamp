// OS - Operating System module
const os = require('os');

const user = os.userInfo();// returns an object with user info
const osUptime = os.uptime(); // returns the number of seconds the computer has been running
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
const moduleFn = (  ) => {
    console.log( currentOS );
}

module.exports = moduleFn;