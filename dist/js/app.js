document.addEventListener("DOMContentLoaded", (event) => {
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener("scroll", function() {
        const maxHeight = document.body.scrollHeight - window.innerHeight;
        let foo = (window.scrollY * 100) / maxHeight;
        if(foo>10){
            backToTop.classList.add("uk-animation-slide-right");
            backToTop.style.visibility = "visible";
        }else{
            backToTop.classList.remove("uk-animation-slide-right");
            backToTop.style.visibility = "hidden";
        }  
    });
});
