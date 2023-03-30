let button = document.getElementById("open_menu");
let links = document.getElementById("menu");
let main = document.getElementById("main");
let counter = 0;

button.addEventListener("click",function(){
    if(counter == 0){
        links.className = ('header__menu two');
        counter=1;
        main.style.display = "none"
    }else{
        links.classList.remove('dos');
        links.className = ('header__menu one');
        counter = 0;
        main.style.display = "block"
    }
})

window.addEventListener('resize', function(){
    if(screen.width > 750){
        counter=0;
        links.classList.remove('two');
        links.className = ('header__menu one');
        main.style.display = "block"
    }
})