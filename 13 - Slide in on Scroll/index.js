let images = document.querySelectorAll(".animated")

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

let isAnimation = function isAnimation(e){
  images.forEach(function(image){
    let slideInStart = window.scrollY + (window.innerHeight / 0.75) - image.offsetHeight;
    let isVisible = slideInStart > image.offsetTop;

    if(isVisible){
      image.classList.remove("inactive");
    }else{
      image.classList.add("inactive");
    }
  })
}

window.addEventListener("scroll", debounce(isAnimation, 5))