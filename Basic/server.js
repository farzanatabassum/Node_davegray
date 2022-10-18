console.log(global)
const os=require('os');
const path=require('path');
// const math=require("./math");
// console.log(math.add(2,3));
const {add,sub,mul,div}=require('../Basic/math')
console.log(add(3,5));
console.log(mul(3,5));
console.log(sub(5,3));
console.log(div(15,3));
console.log(os.type())
console.log(os.version());
console.log(os.homedir());
console.log(__dirname);
console.log(__filename);
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))
