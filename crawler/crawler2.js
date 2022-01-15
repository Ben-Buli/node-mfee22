const axios = require("axios");

//立即執行函式，跟箭頭函式沒有關係，不一定要憶起使用
(async()=>{})
let stockNo=2330;
let queryDate="20220115";

// 寫法一
// let response = await axios.get(
//     `https://www.twse.com.tw/exchangeReport/STOCKDAY?response=json&date=${queryDate}&stockNo=${stockNo}&_=1641716312720`,
//     // handle success
//     console.log(response.data)
//     )

        // 
        let response = await axios.get("https://www.twse.com.tw/exchangeReport/STOCKDAY",{
            // 這邊可以放一些設定
            // param: 放query string 的參數
            params:{
                response: "json",
                date: queryDate,
                stockNo, //當屬性和屬性值一樣值可合併簡寫
            }
            
        })

    console.log(response.data)
