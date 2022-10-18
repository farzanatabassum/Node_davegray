const fs=require('fs');
//for larger files
const rs=fs.createReadStream('./files/lorem.txt',{encoding:'utf8'});
const ws=fs.createWriteStream('./files/add.txt');
// rs.on('data',(dataChunks)=>{
//     ws.write(dataChunks);
// })
//more efficient
rs.pipe(ws)
