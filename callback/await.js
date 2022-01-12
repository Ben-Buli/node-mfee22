// 從promise 檔案複製內容

// await 是因為大家覺得Promise還是不夠好看
// 希望可以更像「同步」的程式
// await / async
// 是promise 的語法糖
// -> 還是要有 promise
// ->

let doWork = function (job, timer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`完成工作 ${job}`);
        // 如果發生錯誤
        // reject(err)
        // 會把這一個 promise 物件的狀態變成 rejected
      }, timer);
    });    
  };
  
  // 刷牙 --> 吃早餐 --> 寫功課
  
  async function main(){
      let result1 = await doWork("刷牙", 2000);
      let dt = new Date();
      console.log(`${result1} ${dt.toISOString()}`);
      
      let result2 = await doWork("刷牙", 3000);
      let dt = new Date();
      console.log(`${result2} ${dt.toISOString()}`);

      let result3 = await doWork("刷牙", 2000);
      let dt = new Date();
      console.log(`${result3} ${dt.toISOString()}`);
  }
 
  main();

//   IIFE (Immediately Invoked Function Expression) 是一個定義完馬上就執行的JavaScript
// (async () => {
//   實作 await 的功能  
//})();
  