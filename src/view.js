const peekBox = document.querySelector('.wp-block-hjude-peak-a-boo');
const peekContent = document.querySelector('.peek-content');

function peekTop(e){
    // console.log(e.getBoundingClientRect())
    console.log(e)
}

let options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 1.0,
  };

const observer = new IntersectionObserver(options, entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('peekIn')
        }else{
            entry.target.classList.remove('peekIn')
        }
    })
})
  
observer.observe(peekBox)

