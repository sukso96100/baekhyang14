function randombg(){
var randomn_number = Math.floor((Math.random() * 4) + 1);
    switch(randomn_number){
        case 1:
             document.getElementById("background-area").style.backgroundImage="url(img/code.png)";
            break;
        case 2:
             document.getElementById("background-area").style.backgroundImage="url(img/polygon.jpg)";
            break;
        case 3:
             document.getElementById("background-area").style.backgroundImage="url(img/fireworks.jpg)";
            break;
        case 4:
             document.getElementById("background-area").style.backgroundImage="url(img/performance.jpg)";
            break;
    }
   
}