var BulkAdd = require('./bulkadd');
var Count = require('./count');

var myArgs = process.argv.slice(2);

switch (myArgs[0]) {
  case 'deposit':
    BulkAdd();
    break;
  case 'count':
    Count();
    break;
  default:
    Count();
}