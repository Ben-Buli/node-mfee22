let car = require("./car");

console.log(car.color);
car.color = "blue";
console.log(car.color);
car.setName("AAAA");
car.showName();

// 引用其中一個函式 就用大括號就好
// 方法一
showName();

// 方法二
// 引用物件再引用函式的寫法->比較清楚是自己寫的
// car.setName("AAA");
// car.showName();

// 模組來源:
// 1. 內建的, fs
// require("fs")
// 2. 第三方: mysql2, moment, axios, dotenv,...
// require("mysql2")
// 3. 自己開發的*
// 給路徑