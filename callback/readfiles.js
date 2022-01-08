const { readFile } = require("fs");

readFile("test.txt", "utf-8",(err,data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

readFile("test.txt", "utf-8",(err,data) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            reject(`${err}`)
        })
    })
});

