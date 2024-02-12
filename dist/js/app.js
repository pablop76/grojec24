document.addEventListener("DOMContentLoaded", (event) => {
  const backToTop = document.querySelector(".back-to-top");
  window.addEventListener("scroll", function () {
    if (backToTop) {
      const maxHeight = document.body.scrollHeight - window.innerHeight;
      let foo = (window.scrollY * 100) / maxHeight;
      if (foo > 10) {
        backToTop.classList.add("uk-animation-slide-right");
        backToTop.style.visibility = "visible";
      } else {
        backToTop.classList.remove("uk-animation-slide-right");
        backToTop.style.visibility = "hidden";
      }
    }
  });
// poup wyskakujacy raz dziennie
const modal = UIkit.modal("#modal-media-image");
function hasOneDayPassed(){

const date = new Date().toLocaleDateString();

if( localStorage.yourapp_date == date ) 
    return false;

localStorage.yourapp_date = date;
return true;
}

function runOncePerDay(){
if( !hasOneDayPassed() ) return false;
setTimeout(() => {
  modal.show();
}, "7000");
}
runOncePerDay();

});
