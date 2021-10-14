var mass = document.getElementById('slide-wrapper');
mass.insertAdjacentHTML('afterend', '<ul id="index-ul"></ul>');

var ulElement = document.getElementById('slides');
var childElementCount = ulElement.childElementCount;

//imgのlist数
console.log(childElementCount);

//要素つくる
for (var i = 0; i < childElementCount; i++) {
  var createUl = document.getElementById('index-ul');
  var newLi = document.createElement('li');
  newLi.className = "index-btn";
  createUl.appendChild(newLi);
  newLi.innerHTML = i + 1;
}

//最初のactive付与
var random = Math.floor(Math.random() * childElementCount);
console.log(random);
var firstMove = (-300) * random;
console.log(firstMove);
var imgLi = document.getElementsByClassName('slide');
var createLi = document.getElementsByClassName('index-btn');

imgLi[random].classList.add('js-active');
ulElement.style.left = firstMove + 'px';
createLi[random].classList.add('js-active-btn');

if (random == 0) {
  document.getElementsByClassName('prev-btn')[0].style.display = "none";
} else if (random == childElementCount - 1) {
  document.getElementsByClassName('next-btn')[0].style.display = "none";
}

//配列とindex取得
//クラス名slideがついているタグを取得
var slides = document.getElementsByClassName("slide");
console.log(slides);
// タグの集合を配列に変換
var arraySlides = Array.prototype.slice.call(slides);
console.log(arraySlides);

//二種のボタン共通のもの
//この中のどこかがおかしい→moveのところ？ or 読み込み順？
var changeBtn = (index) => {
  //左右のボタン表示・非表示
  document.getElementsByClassName('change-btn')[0].style.display = "block";
  document.getElementsByClassName('change-btn')[1].style.display = "block";

  if (index == 0) {
    document.getElementsByClassName('prev-btn')[0].style.display = "none";
  } else if (index == childElementCount - 1) {
    document.getElementsByClassName('next-btn')[0].style.display = "none";
  }

  //移動→表示画像変更
  var move = (-300) * index;
  console.log(move);

  document.getElementById('slides').animate({
    "left": move + "px"
  }, 500);

  //下のクラス移動
  document.getElementsByClassName('js-active-btn')[0].classList.remove('js-active-btn');
  document.getElementsByClassName('index-btn')[index].classList.add('js-active-btn');
};

//左右のボタン
var changeButton = (index) => {
  var twoButton = document.getElementsByClassName('change-btn')[index];
  // 指定したclass名の最初の要素を取得
  var displayIndex = document.getElementsByClassName("js-active")[0];
  console.log(displayIndex);
  // 配列から指定した要素の順序を取得
  var activeIndex = arraySlides.indexOf(displayIndex);
  console.log(activeIndex);

  twoButton.addEventListener('click', () => {

    document.getElementsByClassName('js-active')[0].classList.remove('js-active');

    if (twoButton.classList.contains('next-btn')) {
      imgLi[activeIndex + 1].classList.add('js-active');
      changeBtn(activeIndex + 1);
    } else if (twoButton.classList.contains('prev-btn')) {
      imgLi[activeIndex - 1].classList.add('js-active');
      changeBtn(activeIndex - 1);
    }
  });
}

for (i = 0; i <= 1; i++) {
  changeButton(i);
}

//下のボタン
var indexBtn = (index) => {
  var indexButton = document.getElementsByClassName('index-btn')[index];
  // 指定したclass名の最初の要素を取得
  var displayIndex = document.getElementsByClassName("js-active")[0];
  console.log(displayIndex);
  // 配列から指定した要素の順序を取得
  var activeIndex = arraySlides.indexOf(displayIndex);
  console.log(activeIndex);

  indexButton.addEventListener('click', () => {
    displayIndex.classList.remove('js-active');
    slides[index].classList.add('js-active');

    changeBtn(index);
  });
}

for (i = 0; i <= childElementCount - 1; i++) {
  indexBtn(i);
}
