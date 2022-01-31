// 全域變數
const sm = 576;
const md = 768;
const lg = 992;
const xl = 1200;
const xxl = 1400;
const winW = window.innerWidth;
const winH = window.innerHeight;

// 初始化
function init() {
  // 引入 AOS
  AOS.init({
    duration: 600,
    delay: 300,
    once: false
  });

  // 置頂
  // window.scrollTo({
  //   top: 0
  // });
}
init();

// load
window.onload = function() {
  // 引入 gsap plugin 
  // gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
}

// resize
function reportWindowSize() {
  // 刷新頁面
  // location.reload(true);
}
window.onresize = reportWindowSize;