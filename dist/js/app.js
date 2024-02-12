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
// sprawdza, czy minął jeden dzień.
function hasOneDayPassed(){
// pobierz dzisiejszą datę. np.: „11.02.2024”
const date = new Date().toLocaleDateString();
// jeśli w localstorage znajduje się data i jest ona równa powyższej:
// wniosek, że dzień jeszcze nie minął, ponieważ obie daty są równe.
if( localStorage.yourapp_date == date ) 
    return false;
// ta część logiki ma miejsce po upływie dnia
localStorage.yourapp_date = date;
return true;
}
// jakaś funkcja, która powinna działać raz dziennie
function runOncePerDay(){
if( !hasOneDayPassed() ) return false;
setTimeout(() => {
  modal.show();
}, "7000");
}
runOncePerDay(); // uruchom kod

});
