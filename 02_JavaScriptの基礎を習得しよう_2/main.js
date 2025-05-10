"use strict";

// 01_関数の宣言
{
  /*
宣言方法は４つ
※引数と戻り値の型を指定する必要はない.（動的型付けであるため）
・function命令：Javaに近い関数宣言方法.使用する箇所より後ろに記述されていても実行可能.
・関数リテラル：関数を変数に入れることができる.const,letなど使用可能.関数の作成 → 関数の使用でないとダメ.
・functionコンストラクタ
⭐︎アロー関数：関数リテラルの省略記法.よく使う.
*/
  // function命令
  // console.log(rec1(4, 5));     これはOK
  function rec1(height, width) {
    return height * width;
  }
  // 関数リテラル
  // console.log(rec2(4, 5));     これはエラー
  const rec2 = function (height, width) {
    return height * width;
  };
  // functionコンストラクタ
  const rec3 = new Function("height", "width", "return height * width");
  // アロー関数
  // console.log(rec4(7, 3));     これはエラー
  const rec4 = (h, w) => {
    return h * w;
  };
  console.log(rec1(5, 3));
  console.log(rec2(4, 5));
  console.log(rec3(6, 5));
  console.log(rec4(7, 3));

  // コールバック関数：何かの処理が終わったタイミングで実行される関数
  // 3秒後にTimeOut!と表示されるコールバック関数
  const displayMessage = () => {
    console.log("TimeOut!");
  };
  setTimeout(displayMessage, 3000);
  // 名前の入力が完了したら「Hello, 〇〇-san.」と表示するコールバック関数.
  const gree = (name) => {
    console.log("Hello," + name + "-san.");
  };
  const input = (func) => {
    let name = prompt("名前を入力してください.");
    func(name);
  };
  input(gree);
}

// 02_配列について
{
  let colors = ["Red", "Green", "Blue"];
  console.log(colors[0]);
  console.log(colors[3]); // undefined.例外にはならない
  // JavaScriptの配列では,データ型が異なってもあ誓うことができる. ← 気持ち悪いし,基本的に別の型を1つの配列で扱うことはない.
  let ex = [1, "2", 3, true, [1, 2, 3]]; // これOK

  // 末尾に追加
  colors.push("Black");
  // 先頭に追加
  colors.unshift("White");
  console.log(colors);
  // 配列の途中に要素追加.splice(追加したい配列の位置(Javaのrepraceのイメージ),削除したい項目の位置,追加したい項目（複数項目を,で列挙可）)
  colors.splice(1, 0, "Brown");
  console.log(colors);
  // 配列の削除.splice(何番目の項目か,第一引数から何個の項目を削除するか)
  colors.splice(2, 1); // 2番目から1個項目を削除する.
  // 結合
  let yellow = ["Yellow"];
  let marge = colors.concat(yellow);
  console.log(marge);
}
// 03_オブジェクト宣言
{
  let user = new Object();
  user.name = "SatoHiroto";
  user.gender = "man";
  user.birthday = 2000;
  console.log(user);
}
// ↓オブジェクト初期化子
{
  let user = {
    name: "tanu",
    gender: "woman",
    biethday: 2000,
  };
  // ドット記法
  console.log(user.name + user.gender + user.biethday);
  // ブラケット記法
  console.log(user["name"]);
  // keyの個数
  console.log(Object.keys(user).length);
  // keyの取得
  console.log(Object.keys(user));

  // オブジェクトの結合
  let obj = { ob1: "1", ob2: "2" };
  let marge = Object.assign(user, obj);
  console.log(marge);
}
// オブジェクトにメソッドを記述可能
{
  let user = {
    name: "Hiroto",
    gender: "man",
    birthday: 2000,
    // ※アロー関数だとthis参照できないので注意.
    calcAge: function (year) {
      return year - this.birthday;
    },
  };
  console.log(user.calcAge(2025));
}

// 繰り返し処理はほとんどJavaと一緒.
// ↓一部見慣れない記法有
{
  let colors = ["red", "green", "blue"];
  // forEach（streamのforEachみたいな感じ）
  colors.forEach(function (x) {
    console.log(x);
  });
  // for...of（拡張forみないな感じ）
  for (const x of colors) {
    console.log(x);
  }
}
// 演習_点数の合計と平均を求める.
const score = [100, 90, 80, 70, 60];
let total = 0;
let ave = 0;

score.forEach(function (score) {
  total += score;
});
console.log(total);
console.log(total / score.length);
