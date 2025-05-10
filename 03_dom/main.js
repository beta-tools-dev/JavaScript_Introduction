"use strict";

/* DOM操作 */
// 要素ノードの取得
{
  let btn = document.getElementById("triggerButton");
  btn.addEventListener(
    "click", // ボタンがクリックされたらを表す.他にもいろいろある（カーソルが上に来たらとか）
    function (e) {
      // IDによるノードの取得
      let headerTitle = document.getElementById("headerTitle");
      console.log(headerTitle);
      // テキストのみを取得
      console.log(headerTitle.textContent);
    },
    false
  );

  let judge = true;
  let titleChangeBtn = document.getElementById("titleChangeButton");
  // idがtitleChangeButtonのボタンが押されたら
  titleChangeBtn.addEventListener(
    "click",
    function (e) {
      // idがheaderTitleの要素を取得
      let headerTitle = document.getElementById("headerTitle");
      // テキスト部分を更新する
      if (judge) {
        headerTitle.textContent = "タイトルが変更されました.";
        judge = false;
      } else {
        headerTitle.textContent = "タイトルが戻りました.";
        judge = true;
      }
    },
    false
  );
}

// 属性値の取得
{
  let zokuseiBtn = document.getElementById("zokuseiButton");
  zokuseiBtn.addEventListener(
    "click",
    function (e) {
      // 入力されたinput属性の値を取得
      let inputCN = document.getElementById("inputColorName");
      let colorName = inputCN.value;
      // input属性のname属性を取得
      let inputName = inputCN.getAttribute("name");
      // idがshowTextのp要素を取得
      let showText = document.getElementById("showText"); // ここで.testContentはアカン（DOMそのものを更新していない）
      showText.textContent = `name属性:${inputName}, 入力されたテキスト:${colorName}`;
    },
    false
  );
}

// 属性値の追加・変更
{
  let setRed = document.getElementById("koshinRed");
  setRed.addEventListener(
    "click",
    function (e) {
      let showText = document.getElementById("colorheader");
      // 読み込んだ要素に属性を追加.（第一:属性の種類, 第二:属性の値）
      showText.setAttribute("class", "red");
    },
    false
  );
  let setBlue = document.getElementById("koshinBlue");
  setBlue.addEventListener(
    "click",
    function (e) {
      let showText = document.getElementById("colorheader");
      showText.setAttribute("class", "blue");
    },
    false
  );
  let setNan = document.getElementById("koshinNan");
  setNan.addEventListener(
    "click",
    function (e) {
      let showText = document.getElementById("colorheader");
      // 属性を削除（第一:属性名）
      showText.removeAttribute("class");
    },
    false
  );
}

// 同タグを取得
{
  let getPtagBtn = document.getElementById("getPtagBtn");
  getPtagBtn.addEventListener("click", function (e) {
    // そのボタンがあるHTMLに記述されているpタグを全て配列形式で取得
    let eles = document.getElementsByTagName("p");
    for (let ele of eles) {
      console.log(ele.textContent);
    }
  });
}
