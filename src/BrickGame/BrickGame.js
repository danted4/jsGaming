import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Disclaimer from '../Disclaimer/Disclaimer';

const BrickGameComponent = (props) =>{

  useEffect(()=>{
    var canvas;
    var pauseGame = false;
    if(props.gameOn){
      canvas = document.getElementById('game');
      var ctx = canvas.getContext('2d');
      var x = canvas.width/2;
      var y = canvas.height -30;
      var score = 0;
      var dx = 2.5;
      var dy = -2.5;
      var ballRadius = 11;
      var paddleWidth = 55;
      var paddleHeight = 4;
      var paddleX = (canvas.width-paddleWidth)/2;
      var rightPress = false;
      var leftPress = false;
      var firstTimeLoad = true;
      var brickRows = 3;
      var brickColums = 5;
      var brickWidth = 48;
      var brickHeight = 10;
      var brickPadding = 7;
      var brickOffsetTop = 15;
      var brickOffsetLeft = 13;
      var ball = new Image();
      ball.src = 'jsGaming/images/ball.png';
      var brick = new Image();
      brick.src = 'jsGaming/images/brick.png';
      var paddle = new Image();
      paddle.src = 'jsGaming/images/paddle.png';

      var bricks = [];

      for (var c=0;c<brickColums;c++){
        bricks[c] = [];
        for(var r=0;r<brickRows;r++){
          bricks[c][r] = {x:0,y:0,active:true}
        }
      }
      function collisionDetection(){
        for (var c=0;c<brickColums;c++){
          for(var r=0;r<brickRows;r++){
              var b = bricks[c][r];
              if(x > b.x && x < b.x+brickWidth && y > b.y && y  < b.y + brickHeight && b.active ){
                dy = -dy;
                score = score + 10;
                b.active = false;
              }
          }
        }
      }
      function drawBricks(){
        for (var c=0;c<brickColums;c++){
          for(var r=0;r<brickRows;r++){
            if(bricks[c][r].active){
            var brickX = (c*(brickWidth + brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight + brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            // ctx.rect(brickX,brickY,brickWidth,brickHeight);
            ctx.drawImage(brick,brickX,brickY,brickWidth,brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
          }
          else{
            if(score === 10*brickRows*brickColums){
              gameWon();
            }
          }
          }
        }
      }

      function keyUpHandler(e){
        if(e.keyCode === 39){
          rightPress = false;
        }
        else if(e.keyCode === 37){
          leftPress = false;
        }
      }
      function keyDownHandler(e){
        if(e.keyCode === 39){
          rightPress = true;
        }
        else if(e.keyCode === 37){
          leftPress = true;
        }
      }
      document.addEventListener('keyup',keyUpHandler);
      document.addEventListener('keydown',keyDownHandler);
      function drawPaddle(){
        ctx.beginPath();
        // ctx.rect(paddleX,canvas.height - paddleHeight, paddleWidth, paddleHeight);
        ctx.drawImage(paddle,paddleX,canvas.height - paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = '#0095DD';
        ctx.fill();
        ctx.closePath();
      }
      function drawBall(){
        ctx.beginPath();
        // ctx.arc(x,y, ballRadius, 0 , Math.PI*2);
        ctx.drawImage(ball,x,y,ballRadius,ballRadius);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
      }
      function drawScore(){
        ctx.beginPath();
        ctx.font= '12px sans-serif';
        ctx.fillStyle ='yellow'
        ctx.fillText('score : ' + score ,10,15 );
        ctx.closePath();
      }
      function endGame(){
        // ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.font = '20px Arial';
        ctx.fillText('GAME OVER !',80,50);
        ctx.font = '15px Arial';
        ctx.fillStyle = 'yellow'
        ctx.fillText('(Your Score = '+score+')',90,70);
        ctx.closePath();
        pauseGame = true;
      }
      function gameWon(){
        // ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.font = '20px Arial';
        ctx.fillText('CONGRATS YOU WIN!',80,50);
        ctx.font = '15px Arial';
        ctx.fillStyle = 'yellow'
        ctx.fillText('(Your Score = '+score+')',90,70);
        ctx.closePath();
        pauseGame = true;
      }
      function draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        drawBricks();
        drawBall();
        drawPaddle();
        drawScore();
        collisionDetection();
        if(firstTimeLoad){
          ctx.beginPath();
          ctx.font = '17px Arial';
          ctx.fillText('Starting game...',80,(canvas.height/2));
          ctx.font = '13px Arial';
          ctx.fillStyle = 'yellow'
          ctx.fillText('( Please Wait )',90,(canvas.height/2)+30);
          ctx.closePath();
        }
        if(x + dx - ballRadius < 0 || x + dx + ballRadius > canvas.width){
          dx = -dx;
        }
        if(y + dy - ballRadius< 0){
          dy = -dy;
        }
        if(y + dy + ballRadius + paddleHeight > canvas.height){
          if(x > paddleX && x < paddleX + paddleWidth){
            dy = -dy;
          }
          else{
          endGame();
        }
        }
        x += dx;
        y += dy;

        if(rightPress && paddleX < canvas.width - paddleWidth){
          paddleX += 4;
        }
        else if(leftPress && paddleX > 0){
          paddleX -= 4;
        }
        if(!pauseGame){
        if(firstTimeLoad){
          firstTimeLoad = false;
          setTimeout(()=>{ requestAnimationFrame(draw) },3000);
        }
        else{
            requestAnimationFrame(draw);
        }
      }
      }
    // ball.onload = () => {
    //   brick.onload = () => {
    //     paddle.onload = () =>{
          draw();
    //     }
    //   }
    // }

    }
  }
  ,[props.gameOn])

    return (
        <div>
        { props.gameOn ?

          <div style={{width:'60vw',height:'60vh',margin:'30px auto 0 auto',border:'1px solid black'}}>
            <canvas id ='game' style={{width:'100%',height:'100%',background:'black'}}></canvas>
            <button className="btn btn-danger" onClick={()=>{ props.stopGame()}}>STOP GAME</button>
          </div>
          : <div><h1 style={{'margin-top':"100px"}} >THE BRICK GAME</h1>
          <p>Please click on "start game" to play !</p>
          <button className="btn btn-primary" onClick={()=>props.startGame()}>START GAME</button></div> }
          <Disclaimer />
        </div>
    )
}

const mapStateToProps = (state) =>{
  return{
    gameOn : state.gameStart
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    startGame : () => { dispatch({type:'START_BRICK_GAME'}) },
    stopGame : () => {dispatch({type:'STOP_BRICK_GAME'})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BrickGameComponent);
