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
$.getJSON( "schedule.json", function( data ) {
 var DataArray = data.schedule;
    for(var i=0; i<DataArray.length; i++){
        console.log(DataArray[i].name);
        
    var code1 = '<div class="panel panel-default">\<div class="panel-heading"><h3 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href=';
    var code2 = '"#collapse'+DataArray[i].turn;
    var code3 = '">';
    var code4 = '<span class="label label-default">'+DataArray[i].turn+'</span> ';
    var code5 = DataArray[i].name +" - "+ DataArray[i].time;
    var code6 = '</a></h3></div>';
    var code7 = '<div id="collapse'+DataArray[i].turn+'" class="panel-collapse collapse"><div class="panel-body">';
    var code8 = '<b>'+DataArray[i].performers+'</b><br>'+DataArray[i].desc;
    var code9 = '</div></div></div>'
    
    var element_code = code1 + code2 + code3 + code4 + code5 + code6 + code7 + code8 + code9;
  $('#accordion').append(element_code);
    }
 
});

/*
 <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
          Collapsible Group Item #3
        </a>
      </h4>
    </div>
    <div id="collapseThree" class="panel-collapse collapse">
      <div class="panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  */