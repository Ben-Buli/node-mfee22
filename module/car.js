//會在底層執行一行 
// exprots = module exports = {};
// exports 本身是一個物件

exports.color = "red";

let name = "default";

exports.setName = function (firstName, lastName) {
  name = `${firstName} ${lastName}`;
};

exports.showName = function () {
  console.log(`Hi, ${name}`);
};


// 再執行 
// return module.exports;