/*--------------------------------------------------
​
処理手順
ボタン生成
スライドの現在の表示indexを取得
→11枚
左右のボタンにイベントを適応
if文で分岐する
右なら1
左なら-1
js-activeを削除
js-activeを付与
​
indexボタンが押されたときイベント適応
js-active-btnのindex番号を取得
そのindex番号スライドにjs-activeを付与
​
プラス
ランダム付与
​
ボタン生成
右左ボタン
したのボタン
--------------------------------------------------*/
/*------------------------- 初期設定 -------------------------*/
var ulElement = document.getElementById("slides");
var childElementCount = ulElement.childElementCount;


/*------------------------- ボタン生成 -------------------------*/
var mass = document.getElementById("slide-wrapper");
mass.insertAdjacentHTML("afterend", '<ul id="index-ul"></ul>');
for (var i = 0; i < childElementCount; i++) {
  var createUl = document.getElementById("index-ul");
  var newLi = document.createElement("li");
  newLi.className = "index-btn";
  createUl.appendChild(newLi);
  newLi.innerHTML = i + 1;
}


/*------------------------- ランダム付与 -------------------------*/
var random = Math.floor(Math.random() * childElementCount);
var firstMove = -300 * random;
var imgLi = document.getElementsByClassName("slide");
var createLi = document.getElementsByClassName("index-btn");
//最初のactive付与
imgLi[random].classList.add("js-active");
ulElement.style.left = firstMove + "px";
createLi[random].classList.add("js-active-btn");

if (random == 0) {
  document.getElementsByClassName("prev-btn")[0].style.display = "none";
} else if (random == childElementCount - 1) {
  document.getElementsByClassName("next-btn")[0].style.display = "none";
}

//HTMLcollection
var slides = document.getElementsByClassName("slide");
//配列
var arraySlide = Array.prototype.slice.call(slides);
console.log(arraySlide);
var dispSlide = document.getElementsByClassName("js-active");
console.log(dispSlide);
var indexSlide = arraySlide.indexOf(dispSlide);

function changeBtn() {
  // HTMLcollection
  var Btns = document.getElementsByClassName("change-btn");
  // Btn[0]=prev-btn
  // Btn[1]=next-btn
  if (Btns[0]) {
    indexSlide--;
  } else {
    indexSlide++;
  }
  var dispSlide = document.getElementsByClassName("js-active");
  console.log(dispSlide);
  dispSlide[0].classList.remove("js-active");
  slides[indexSlide].classList.add("js-active");

  // changeButton(indexSlide);
}

// const prevBtn = document.getElementById("prev-btn");
// const nextBtn = document.getElementById("next-btn");
// prevBtn.onclick = function () {
//   indexSlide--;
//   dispSlide.classList.remove("js-active");
//   slides[indexSlide].classList.add("js-active");
// };
// nextBtn.onclick = function () {
//   indexSlide++;
//   dispSlide.classList.remove("js-active");
//   slides[indexSlide].classList.add("js-active");
// };
// prevBtn.addEventListener("onclick", function () {

// });

//配列とindex取得
//クラス名slideがついているタグを取得
/*------------------------- スライドの取得と配列変換 -------------------------*/
// var slides = document.getElementsByClassName("slide");
// // タグの集合を配列に変換
// var arraySlides = Array.prototype.slice.call(slides);

//二種のボタン共通のもの
//この中のどこかがおかしい→moveのところ？ or 読み込み順？

/*------------------------- 左右ボタンの関数定義 -------------------------*/
var changeButton = function (index) {
  //左右のボタン表示・非表示
  document.getElementsByClassName("change-btn")[0].style.display = "block";
  document.getElementsByClassName("change-btn")[1].style.display = "block";

  if (index == 0) {
    document.getElementsByClassName("prev-btn")[0].style.display = "none";
  } else if (index == childElementCount - 1) {
    document.getElementsByClassName("next-btn")[0].style.display = "none";
  }

  //移動→表示画像変更
  var move = -300 * index;
  console.log(move);

  document.getElementById("slides").animate(
    {
      left: move + "px",
    },
    500
  );

  //下のクラス移動
  document
    .getElementsByClassName("js-active-btn")[0]
    .classList.remove("js-active-btn");
  document
    .getElementsByClassName("index-btn")
  [index].classList.add("js-active-btn");
};

//左右のボタン
// var changeButton = (index) => {
//   var twoButton = document.getElementsByClassName("change-btn")[index];
//   // 指定したclass名の最初の要素を取得
//   var displayIndex = document.getElementsByClassName("js-active")[0];
//   console.log(displayIndex);
//   // 配列から指定した要素の順序を取得
//   var activeIndex = arraySlides.indexOf(displayIndex);
//   console.log(activeIndex);

//   twoButton.addEventListener("click", () => {
//     document
//       .getElementsByClassName("js-active")[0]
//       .classList.remove("js-active");

//     if (twoButton.classList.contains("next-btn")) {
//       imgLi[activeIndex + 1].classList.add("js-active");
//       changeBtn(activeIndex + 1);
//     } else if (twoButton.classList.contains("prev-btn")) {
//       imgLi[activeIndex - 1].classList.add("js-active");
//       changeBtn(activeIndex - 1);
//     }
//   });
// };

// for (i = 0; i <= 1; i++) {
//   changeButton(i);
// }

// //下のボタン
// var indexBtn = (index) => {
//   var indexButton = document.getElementsByClassName("index-btn")[index];
//   // 指定したclass名の最初の要素を取得
//   var displayIndex = document.getElementsByClassName("js-active")[0];
//   console.log(displayIndex);
//   // 配列から指定した要素の順序を取得
//   var activeIndex = arraySlides.indexOf(displayIndex);
//   console.log(activeIndex);

//   indexButton.addEventListener("click", () => {
//     displayIndex.classList.remove("js-active");
//     slides[index].classList.add("js-active");

//     changeBtn(index);
//   });
// };

// for (i = 0; i <= childElementCount - 1; i++) {
//   indexBtn(i);
// }
