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

function showBoothInfo(code){
    $.getJSON( "booth.json", function( data ) {
        var DataObj = eval("data."+code.toString());
        document.getElementById("booth_title").innerHTML = DataObj.title;
        console.log("부스 이름 - "+DataObj.title);
        var MailToString = "mailto:"+DataObj.email+"?subject=다음에 대한 피드백"+DataObj.title+
                        "&body=제목:"+DataObj.title+"<br>순서:"+DataObj.location+"<br>자세한 내용:"+DataObj.desc+"피드백 내용";
        
        var code1 = '<b>위치</b> '+DataObj.location+'<br>';
        var code2 = '<b>부스 운영하는 사람/단체</b> '+DataObj.members+'<br>';
        var code3 = DataObj.desc+'<br><a href="'+MailToString+'">피드백 보내기<a/>';
        var codes = code1 + code2 + code3;
        document.getElementById("booth_desc").innerHTML = codes;
 
});
}

function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}
