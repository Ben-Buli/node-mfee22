// async 版本

// Promise 物件代表一個即將完成、或失敗的非同步操作，以及它所產生的值。

const { readFile } = require("fs/promises");//內建promise版

// await只能放在async func裡面才有效
// 做一個暫停的範圍
// 用立即執行
(async () => {
    try{
    let result = await readFile("test.txt", "utf-8");
    console.log(`這是內建的 promise 版本 ${result}`);
    }catch(err){
        console.error(err);
    }
})();

// await版本不會出現then()