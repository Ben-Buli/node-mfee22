// Prommise 物件代表一個即將完持、或失敗的非同步操作，以及它所產生的值。

// 1.  Promise 是一個物件
// new Promise()
// Promise() 是一個建構式，他需要一個參數 executor
// 這個executor 也是一個函式function() 也有兩個參數 resolve reject
// 2.即將完成、或失敗
// resolve 是成功的時候要呼叫
// reject 式失敗的時候要呼叫
// 3. 非同步

// 本身是個物件 要new它


// Promise 
let doWork = function (job, timer) {
  return new Promise((resolve, reject)=>{
      setTimeout(() => {
    // callback 的設計上
    // 通常第一個參數會是錯誤
    // 通常第二個參數會是結果
    callback(null, `完成工作 ${job}`);
  }, timer);
  });
};

// 刷牙 --> 吃早餐 --> 寫功課
let dt = new Date();
console.log(`Start ${dt.toISOString()}`);

doWork("刷牙", 2000)
  .then((result) => {
    let dt = new Date();
    console.log(`${result} at ${dt.toISOString()}`);

    return doWork("吃早餐", 3000);
  })
  .then((result) => {
    let dt = new Date();
    console.log(`${result} at ${dt.toISOString()}`);
    return doWork("寫功課", 2000);
  })
  .then((result) => {
    let dt = new Date();
    console.log(`${result} at ${dt.toISOString()}`);
  })
  .catch((err) => {
    // 處理錯誤
    console.error(err);
  });