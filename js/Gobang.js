/**
 * Created by 高文林 on 2017/3/31.
 */

var chess = document.getElementById("Gobang").getContext("2d");
chess.strokeStyle = "rgba(0,0,0,0.4)";

var back = [];      //记录棋盘是否被落子
var tag = true;     //黑白交替
for(var i=0;i<16;i++){
    back[i] = [];
    for(var j=0;j<16;j++)
        back[i][j] = 0;
}

drawChess();
function  drawChess() {
    for(var i=0;i<16;i++){
        chess.moveTo(0,35*i);
        chess.lineTo(525,35*i);
        chess.stroke();
        chess.moveTo(35*i,0);
        chess.lineTo(35*i,525);
        chess.stroke();
    }
}

function  drawCircle(i,j,color) {
    chess.beginPath();
    chess.arc(35*i,35*j,15,0,2*Math.PI);
    chess.closePath();
    if(color){
        chess.fillStyle="#3A3A3A";
    }
    else{
        chess.fillStyle="#F1F1F1";
    }
    chess.fill();
}

document.getElementById("Gobang").onclick = function (e) {
    var x = e.offsetX;      //获得点击点的坐标
    var y = e.offsetY;
    var i = Math.round(x/35);   //四舍五入
    var j = Math.round(y/35);
    if(back[i][j]===0){
            if(tag){
                back[i][j] = 1;     //黑棋
            }
            else{
                back[i][j] = 2;     //白棋
            }
        drawCircle(i,j,tag);
        tag = !tag;
    }
}



