// 基本文法
// インクリデクリ,条件分岐,boolean,論理演算子,三項演算子switchはJavaと一緒.

/*
use strictを文頭に指定することで,より厳密なエラーチェックが走るようになるらしい.
詳しい内容は上級者向け
*/
// 01_文字列を囲むにはシングルでもダブルでもいい（推奨は''）（厳密には意味が異なる ← 上級者向け）
"use strict";
console.log("Hello World!");

/*
 コードがミスってる場合,コンソールにエラーが出る.
 ※コンソールのチェックを癖つける
 エディタではエラーがでないっぽい(?)
*/
// konsole.log('Hello!');

// 02_エスケープシーケンス Option + ¥
console.log("Hello I'm Hiroto");
// \t タブ, \n 改行
// クォートを使い分けるとエラーにならない
console.log("Hello I'm Hiroto");

// 03_変数と定数
// 変数
let color = "red";
color = "green";
// varは古い書き方,今後はletを使用する.
var myName = "hiroto";
console.log(color);
// 定数
const PI = 3.141592;
// PI = 2.345;
// 慣習的に変数はキャメルケース,定数はスネークケースらしい.

// 04_データ型
/*
JavaScriptでは変数に値を代入する時に,型推論が行われる.
数値型と小数点型の区別はしない.全て数値型で扱う
intとdoubleの区別をせずに,すべてintで統一している感じ.
*/
let yourName = "etanko";
let num = 123;
let dec = 10.31;
// 変数の型を調べる
console.log(typeof yourName); // string
console.log(typeof num); // number
console.log(typeof dec); // number
// 型宣言をしないので,異なる型も際代入できる（推奨されない）← 動的型付け言語
dec = "Hiroto";
console.log(typeof dec); // string

// 05_演算子
let pow = 2 ** 10; // 冪乗演算子
console.log(pow);

// 06_文字列結合
let lastName = "さとう";
let firstName = "ひろと";
// バッククォートに${変数名}とすることで,変数を結合できる.改行も可能.
console.log(`こんにちは ${lastName} ${firstName}
    やっほーー`);

// 07_型変換
console.log(Number("2000") + 200); // Numberにキャスト
console.log(String(2000) + 200); // Stringにキャスト
console.log(Number("Hiroto")); // 数値以外だとNaN（Not a Number）がreturn.

// 08_==と===
let number = 100;
let str = "100";
if (number == str) {
  // 中身だけを比較するのでtrue
  console.log("等しい");
} else {
  console.log("等しくない");
}

if (number === str) {
  // 中身も型も比較するのでfalse（推奨）
  console.log("等しい");
} else {
  console.log("等しくない");
}

// 09_nullとundefined
/*
undefined：未定義,変数を宣言したが,値を代入していない状態.
null：明示的なnull.
*/
let und; // 特にエラーではない
console.log(und);
let nul = null;
console.log(nul);
if (und === undefined) console.log("比較も可能");