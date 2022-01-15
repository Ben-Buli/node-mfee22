const axios = require("axios");
const { readFile } = require("fs/promises");
const moment = require("moment");//引用



(async () => {
try{
    let  stockNo = await readFile("stock.txt","utf-8")
    let queryDate = moment().format("YYYYMMDD"); // 自動用今天的日期//"now";///TODO:改成自動用今天的日期

    // DONE: 從 stock.txt 中讀出檔案代碼

    let response = await axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
      {
        // 這裡可以放一些設定
        // params: 放 query string 的參數
        params: {
          response: "json",
          date: queryDate,
          stockNo,
        },
      }
    );

    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
})();