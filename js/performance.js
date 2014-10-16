//무작위 배경 설정
function randombg(){
var randomn_number = Math.floor((Math.random() * 4) + 1);
    switch(randomn_number){
        case 1:
             document.getElementById("background-area").style.backgroundImage="url(../img/code.png)";
            console.log("배경 - code.png");
            break;
        case 2:
             document.getElementById("background-area").style.backgroundImage="url(../img/polygon.jpg)";
            console.log("배경 - polygon.jpg");
            break;
        case 3:
             document.getElementById("background-area").style.backgroundImage="url(../img/fireworks.jpg)";
            console.log("배경 - fireworks.jpg");
            break;
        case 4:
             document.getElementById("background-area").style.backgroundImage="url(../img/performance.jpg)";
            console.log("배경 - performance.jpg");
            break;
    }
   
}

//Json 파일 읽기
$.ajax({
  dataType: "json",
  url: 'schedule.json',
  dataType: "json",
  success: function (data) {
      console.log("Done Loading JSON File");
      console.log("JSON 파일 로드 완료");
            // JSON 파일 읽어드리기 성공한 경우.
      }
});
