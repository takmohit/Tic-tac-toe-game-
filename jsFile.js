var painted;
var content;
var winningCombinations;
var turn=0;
var theCanvas;
var cxt;
var c;
var cxt;0
var squareFilled=0;
var w;
var y;

window.onload=function(){
  painted= new Array();
  content= new Array();
  winningCombinations=[[0,1,2],[2,5,8],[8,7,6],[0,3,6],[3,4,5],[1,4,7],[0,4,8],[2,4,6]];
  for(var l=0;l<9;l++){
    painted[l]=false;
    content[l]='';
  }
}

function canvasClicked(canvasNumber){
  theCanvas="canvas"+canvasNumber;
  c=document.getElementById(theCanvas);
  cxt=c.getContext("2d");
  if(painted[canvasNumber-1]==false){
    if(turn%2==0){
      cxt.beginPath();
      cxt.moveTo(10,10);
      cxt.lineTo(90,90);
      cxt.moveTo(90,10);
      cxt.lineTo(10,90);
      cxt.lineWidth=15;
      cxt.stroke();
      cxt.closePath();
      content[canvasNumber-1]='x';
    }
    else{
      cxt.beginPath();
      cxt.arc(50,50,40,0,Math.PI*2,true);
      cxt.lineWidth=15;
      cxt.stroke();
      cxt.closePath();
      content[canvasNumber-1]='0';
    }
    turn++;
    painted[canvasNumber-1]=true;
    squareFilled++;
    checkForWinners(content[canvasNumber-1]);
    if(squareFilled==9){
      alert("Game Over!!!");
      location.reload(true);
    }
  }
  else{
    alert("That space is already occupied!!");
  }
}

function checkForWinners(symbol){
  for(var a=0;a<winningCombinations.length;a++){
    if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]==symbol&&content[winningCombinations[a][2]]==symbol){
      if(symbol==0)
      alert("Player2 Won!!");
      else {
        alert("Player1 Won!!");
      }
      restart();
    }
  }
}
function restart(){
  location.reload(true);
}
