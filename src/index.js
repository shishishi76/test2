// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//     return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log("func2です");

// //アロー関数の中身が一行の時のみ省略版
// const func2_1 = (str) => str;
// console.log(func2_1("func2_1です"));

// //引数二つバージョン
// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(5, 123));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "しょうご",
//   age: 23,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// //分割代入
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message1);

const myProfile = ["しょうご", 23];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message4);
