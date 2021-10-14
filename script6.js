//const
const slides    = document.getElementById("slides");
const slideNum  = slides.childElementCount;
const slideWrap = document.getElementById('slide-wrapper');
const imgWidth  = document.getElementsByClassName("slide")[0].clientWidth;
const prevBtn   = document.getElementById('prev-btn');
const nextBtn   = document.getElementById('next-btn');
const changeBtn = document.getElementsByClassName('change-btn');
const slide     = document.getElementsByClassName("slide");
const random    = Math.floor(Math.random() * slideNum);

//let
let dispSlide, indexSlide;

//ボタンの表示非表示
function toggleBtn(indexSlide) {
  prevBtn.style.display = "block";
  nextBtn.style.display = "block";
  if (indexSlide === 0) {
    prevBtn.style.display = "none";
  } else if (indexSlide === slideNum - 1) {
    nextBtn.style.display = "none";
  }
}

//スライドの移動
function moveSlide(indexSlide) {
  var move = -300 * indexSlide;
  slides.style.left = move + "px";
}

//ボタンにスタイル適応
function styleBtn(indexSlide) {
  document.getElementsByClassName('js-active-btn')[0].classList.remove('js-active-btn');
  document.getElementsByClassName('index-btn')[indexSlide].classList.add('js-active-btn');
}

//表示リストとインデックス取得
function getIndex() {
  var arraySlide = Array.prototype.slice.call(slides.children);
  dispSlide      = document.getElementsByClassName("js-active")[0];
  indexSlide     = arraySlide.indexOf(dispSlide);
  //varを省略しないとそのスコープは定義した場所（これは関数内のみ）になります
  //varを省略するとグローバルスコープになります
  //var → 再宣言可能　簡単に書き換えられるので、意図しないバグが発生しやすい。なるべくlet, constを使おう！
}

/*------------------------- ボタン生成 -------------------------*/
slideWrap.insertAdjacentHTML("afterend", '<ol id="index-ul"></ol>');
const createUl = document.getElementById("index-ul");
for (let i = 0; i < slideNum; i++) {
  var newLi = document.createElement("li");
  newLi.className = "index-btn";
  createUl.appendChild(newLi);
  newLi.innerHTML = i + 1;

  //dispSlideがないのでは？
}

/*------------------------- ランダム付与 -------------------------*/
const createLi = document.getElementsByClassName("index-btn");
//最初のactive付与
slide[random].classList.add("js-active");
createLi[random].classList.add("js-active-btn");

toggleBtn(random);
moveSlide(random);

/*------------------------- change-btnのときのクラス移動 -------------------------*/
prevBtn.onclick = function () {
  getIndex();
  indexSlide--;
  dispSlide.classList.remove("js-active");
  slide[indexSlide].classList.add("js-active");
  toggleBtn(indexSlide);
  moveSlide(indexSlide);
  styleBtn(indexSlide);
}

nextBtn.onclick = function () {
  getIndex();
  indexSlide++;
  dispSlide.classList.remove("js-active");
  slide[indexSlide].classList.add("js-active");
  toggleBtn(indexSlide);
  moveSlide(indexSlide);
  styleBtn(indexSlide);
}

/*------------------------- index-btnのときのクラス移動 -------------------------*/
for (let i = 0; i < slideNum; i++) {
  createLi[i].onclick = function () {
    var dispSlide = document.getElementsByClassName("js-active")[0];
    dispSlide.classList.remove("js-active");
    // var slide = document.getElementsByClassName("slide");
    slide[i].classList.add("js-active");

    toggleBtn(i);
    moveSlide(i);
    styleBtn(i);
  }
}
