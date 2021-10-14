let ulElement = document.getElementById('slides');
let childElementCount = ulElement.childElementCount;
console.log(childElementCount);

// window.onload = function () {
console.log(childElementCount);

let mass = document.getElementById("slide-wrapper");
mass.insertAdjacentHTML('afterend', '<ul id="index-ul"></ul>');


for (let i = 0; i < childElementCount; i++) {
  let createUl = document.getElementById("index-ul");
  let newLi = document.createElement('li');
  newLi.className = "index-btn";
  createUl.appendChild(newLi);
  newLi.innerHTML = i + 1;
}

//ここまでが要素つくるもの

window.onload = function () {
  let random = Math.floor(Math.random() * childElementCount);
  let firstMove = (-300) * random;
  let createUl = document.getElementById('index-ul');
  let imgLi = document.getElementsByClassName('slide');
  let createLi = document.getElementsByClassName('index-btn');

  console.log(random);
  console.log(firstMove);
  console.log(ulElement);

  imgLi[random].classList.add('js-active');
  ulElement.style.left = firstMove + "px";
  createLi[random].classList.add('js-active-btn');

  if (random == 0) {
    document.getElementsByClassName("prev-btn")[0].style.display = "none";
  } else if (random == childElementCount - 1) {
    document.getElementsByClassName("next-btn")[0].style.display = "none";
  }

  //ここまで最初のランダムクラス付与
}

const changeBtn = () => {
  //クラス名slideがついているタグを取得
  var slides = document.getElementsByClassName("slide");
  console.log(slides);
  // タグの集合を配列に変換
  var arraySlides = Array.prototype.slice.call(slides);
  console.log(arraySlides);
  // 指定したclass名の最初の要素を取得
  var displayIndex = document.getElementsByClassName("js-active")[0];
  console.log(displayIndex);
  // 配列から指定した要素の順序を取得
  var index = arraySlides.indexOf(displayIndex);
  console.log(index);

  document.getElementsByClassName("change-btn")[0].style.display = "block";
  document.getElementsByClassName("change-btn")[1].style.display = "block";
  // let slideIndex = ulElement.indexOf('.js-active');
  if (index === 0) {
    document.getElementsByClassName("prev-btn")[0].style.display = "none";
  } else if (index === childElementCount - 1) {
    document.getElementsByClassName("next-btn")[0].style.display = "none";
  }

  let move = (-300) * index;
  console.log(move);

  document.getElementById("slides").animate({
    left: move + 'px'
  }, 500);
  // ulElement.style.left = move + "px";


  document.getElementsByClassName('js-active-btn')[0].classList.remove('js-active-btn');
  document.getElementsByClassName('index-btn')[index].classList.add('js-active-btn');

};

const changeButton = (index) => {
  let twoButton = document.getElementsByClassName('change-btn')[index];
  let imgLi = document.getElementsByClassName('slide');

  twoButton.addEventListener('click', () => {
    // const slides = document.getElementsByClassName("slide");
    // const displaySlide = document.getElementsByClassName("js-active")[0];
    // activeIndex = slides.indexOf(displaySlide);


    //クラス名slideがついているタグを取得
    var slides = document.getElementsByClassName("slide");
    console.log(slides);
    // タグの集合を配列に変換
    var arraySlides = Array.prototype.slice.call(slides);
    console.log(arraySlides);
    // 指定したclass名の最初の要素を取得
    var displayIndex = document.getElementsByClassName("js-active")[0];
    console.log(displayIndex);
    // 配列から指定した要素の順序を取得
    var index = arraySlides.indexOf(displayIndex);
    console.log(index);


    document.getElementsByClassName("js-active")[0].classList.remove('js-active');

    if (twoButton.classList.contains('next-btn')) {
      console.log(slides);
      imgLi[index + 1].classList.add('js-active');
    } else if (twoButton.classList.contains('prev-btn')) {
      console.log(slides);
      imgLi[index - 1].classList.add('js-active');
    }

    changeBtn();
  });

}

for (i = 0; i <= 1; i++) {
  changeButton(i);
}

//ここまで矢印のボタン

const indexBtn = (index) => {
  var slides = document.getElementsByClassName("slide");
  var displayIndex = document.getElementsByClassName("js-active")[0];

  var indexButton = document.getElementsByClassName('index-btn')[index];

  indexButton.addEventListener('click', () => {
    displayIndex.classList.remove('js-active');
    slides[index].classList.remove('js-actve')

    changeBtn();
  });
}

for (i = 0; i <= childElementCount; i++) {
  indexBtn(i);
}


var position = document.getElementById('slides').css('left');

console.log(position);
