const fs=require('fs')
const http=require('http')

fs.readFile('./sample.json','utf8',(err,data)=>{
    if(err){
        console.log("Cannot Open file!")
        return 
    }
    const jsonData=JSON.parse(data)
    const filterData=jsonData.filter((user)=>user.amount>1500)
    fs.writeFile("./data.json",JSON.stringify(filterData),(err)=>{
        if(err){
            console.log("Error Writing file")
            return;
        }
    })
})
