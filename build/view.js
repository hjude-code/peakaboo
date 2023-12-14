/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
const peekBox = document.querySelector('.wp-block-hjude-peak-a-boo');
function peekTop(e) {
  // console.log(e.getBoundingClientRect())
  console.log(e);
}
let options = {
  root: null,
  rootMargin: "0px",
  threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
};
const observer = new IntersectionObserver(callBack, options);

// const observer = new IntersectionObserver(options, entries => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             entry.target.classList.add('peekIn')
//         }else{
//             entry.target.classList.remove('peekIn')
//         }
//     })
// })

function callBack(entries) {
  entries.forEach(entry => {
    let box = entry.target.querySelector('.peek-content');
    let intersection = entry.intersectionRatio * 100;
    let peekAmount = 100 - intersection;
    box.style.transform = `translateY(${peekAmount}%)`;
    console.log(box);
  });
}
observer.observe(peekBox);
/******/ })()
;
//# sourceMappingURL=view.js.map