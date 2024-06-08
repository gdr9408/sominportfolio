const menuOpen = document.querySelector('.menu_btn');
const menu = document.querySelector('body');

const skills = document.querySelectorAll('.skill_line > div > p')
const fade = document.querySelector('.fade')

const menuItems = document.querySelectorAll('.menu > li > a');
let num = 0;

const upBtn = document.querySelector('.up')

//원스크롤
menuItems.forEach(function(item,idx){
  item.onclick = function(e){
    e.preventDefault();
    let targetName = item.dataset.target;
    document.querySelector(targetName).scrollIntoView({
      behavior:"smooth"
    })
    menu.classList.remove('menu_open'); 
  }
})



//메뉴 토글
menuOpen.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle('menu_open');

})


// skill 클릭시 올라오게
skills.forEach(skillP => {
  skillP.addEventListener("mouseenter", () => {
    skillP.classList.add('fade')
  });

  skillP.addEventListener("mouseleave", () => {
    skillP.classList.remove('fade')
  });
});


//슬라이드
var swiper = new Swiper(".slide", {
  loop:true,
  speed: 400, // 슬라이드 간 전환시간
  centeredSlides:true, 
  //중간 슬라이드를 강조해서 먼저 보여주도록 설정 / true일 경우 활성 슬라이드는 항상 왼쪽이 아닌 가운데에 배치
  initialSlide: 0,
  //초기 슬라이드의 색인 번호 / 브라우저 열었을때 먼저 보여야하는 객체를 설정시켜줌(0이 1번)
  slidesPerView: 'auto', //coverflow 진행시 loop:true 와 꼭 같이 auto 적용
  slideToClickedSlide: true, // 해당 슬라이드 클릭시 슬라이드 위치로 이동
  effect: 'coverflow',
  coverflowEffect: {
      rotate:10,//슬라이더 회전각 : 클수록 슬라이딩시 회전이 커짐
      slideShadows:true,  //false
      //슬라이더 그림자 : 3d 효과를 강조하기 위한 회전시 흐릿한 효과
      stretch: 30, //슬라이더 간 거리(픽셀) : 클수록 슬라이더가 서로 많이 겹침
      depth: 700, //깊이 효과값 : 클수록 멀리있는 느낌이 강해짐
      modifier: 1, //효과 배수 : 위 숫자값들에 이 값을 곱하기 처리하여 효과를 강하게 처리함
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChange: function () {
      var slides = this.slides;
      for (var i = 0; i < slides.length; i++) {
        if (i !== this.activeIndex) {
          slides[i].classList.add('blur');
        } else {
          slides[i].classList.remove('blur');
        }
      }
    },
  },
});

