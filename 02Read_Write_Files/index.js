// const fs=require('fs');
const fsPromises=require('fs').promises;
const path=require('path');
// fs.readFile('./files/starter.txt',(err, data)=>{
//     if(err) throw err;
//     console.log(data.toString())
// })
//file operator
const fileOps=async()=>{
    try{
        const data= await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8');
        console.log(data);
        //delete file
        await fsPromises.unlink(path.join(__dirname,'files','starter.txt'))
        await fsPromises.writeFile(path.join(__dirname,'files','promises.txt'),data);
        await fsPromises.appendFile(path.join(__dirname,'files','promises.txt'),' \n\nYes,I will. ','utf-8')
        await fsPromises.rename(path.join(__dirname,'files','promises.txt'),path.join(__dirname,'files','promiseWrite.txt'))
        const newData= await fsPromises.readFile(path.join(__dirname,'files','promiseWrite.txt'),'utf8');
        console.log(newData);
    }catch(err){
        console.error(err);
    }
}
fileOps();
// fs.readFile(path.join(__dirname,'files','starter.txt'),"utf8",(err, data)=>{
//     if(err) throw err;
//     console.log(data)

// })
// console.log("Hello...");
//writeFile
// fs.writeFile(path.join(__dirname,'files','reply.txt'),'Nice to meet you!!', (err)=>{
//     if(err)throw err
//     console.log('Write complete')
//     //append File
//     fs.appendFile(path.join(__dirname,'files','reply.txt'),' Yes it is', (err)=>{
//         if(err)throw err
//         console.log('Append complete')
//     })
//     //rename file
//     fs.rename(path.join(__dirname,'files','reply.txt'),path.join(__dirname,'files','test.txt'), (err)=>{
//         if(err)throw err
//         console.log('Rename complete')
//     })
// })

//read file
// fs.readFile(path.join(__dirname,'files','reply.txt'),'utf8',(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })
//exit on uncaught error
process.on("uncaughtException",err=>{
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})