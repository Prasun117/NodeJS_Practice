const fs=require('fs');
const path=require('path');
console.log('doing some operations');

fs.writeFile('added.txt','hi node js application is writing','utf-8',(err)=>{
  if(err)throw err;
  console.log('successfully executed');
});
fs.writeFileSync(path.join(__dirname,'newFile.txt'),'new data has been writtened');
console.log('seeing a synchronous function works');
console.log('checking async or not');
