import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Disclaimer from '../Disclaimer/Disclaimer';
import { freeze, unfreeze, PUBLIC_URL } from '../common';
import { fullscreen } from '../utility/commonFunctions';


const ball = new Image();
ball.src = `${PUBLIC_URL}/images/ball.png`;
const brick = new Image();
brick.src = `${PUBLIC_URL}/images/brick.png`;
const paddle = new Image();
paddle.src = `${PUBLIC_URL}/images/paddle.png`;

const BrickGameComponent = (props) =>{

  useEffect(()=>{
    let canvas;
    let pauseGame = false;
    if(props.gameOn){
      canvas = document.getElementById('game');
      let ctx = canvas.getContext('2d');
      let x = canvas.width/2;
      let y = canvas.height -30;
      let score = 0;
      let dx = 2.5;
      let dy = -2.5;
      let ballRadius = 11;
      let paddleWidth = 55;
      let paddleHeight = 4;
      let paddleX = (canvas.width-paddleWidth)/2;
      let rightPress = false;
      let leftPress = false;
      let firstTimeLoad = true;
      let brickRows = 3;
      let brickColums = 5;
      let brickWidth = 48;
      let brickHeight = 10;
      let brickPadding = 7;
      let brickOffsetTop = 15;
      let brickOffsetLeft = 13;

      let bricks = [];

      for (let c=0;c<brickColums;c++){
        bricks[c] = [];
        for(let r=0;r<brickRows;r++){
          bricks[c][r] = {x:0,y:0,active:true}
        }
      }
      function collisionDetection(){
        for (let c=0;c<brickColums;c++){
          for(let r=0;r<brickRows;r++){
              let b = bricks[c][r];
              if(x > b.x && x < b.x+brickWidth && y > b.y && y  < b.y + brickHeight && b.active ){
                dy = -dy;
                score = score + 10;
                b.active = false;
              }
          }
        }
      }
      function drawBricks(){
        for (let c=0;c<brickColums;c++){
          for(let r=0;r<brickRows;r++){
            if(bricks[c][r].active){
            let brickX = (c*(brickWidth + brickPadding))+brickOffsetLeft;
            let brickY = (r*(brickHeight + brickPadding))+brickOffsetTop;
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
          ctx.fillText(' 3, 2, 1... Go!',90,(canvas.height/2)+30);
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
      <div className='text'>
        { props.gameOn ?
          <div style={{width:'60vw',height:'60vh',margin:'30px auto 0 auto',border:'1px solid black'}}>
            <canvas id ='game' style={{width:'100%',height:'100%',background:'black'}}></canvas>
              <button style={{marginRight: "10px"}} className="btn btn-secondary" onClick={fullscreen}>FULLSCREEN</button>
            <button className="btn btn-danger" onClick={()=>{ props.stopGame()}}>STOP GAME</button>
          </div>
          : <div style={{width:'60vw',height:'60vh',margin:'30px auto 0 auto',border:'1px solid black'}}>
              <div style={{width:'100%',height:'100%', padding:"5px", marginBottom:"15px",background:'black', boxShadow: "0 0 10px #62cdff", borderRadius: "5px"}}>
                <h1 style={{'marginTop':"100px"}} >THE BRICK GAME</h1>
                <p>Please click on "start game" to play !</p>
              </div>
            <button className="btn btn-primary" onClick={()=>props.startGame()}>START GAME</button>
            </div> 
          }
        <Disclaimer displayControls="brick"/>
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
    startGame : () => { freeze(); dispatch({type:'START_BRICK_GAME'}) },
    stopGame : () => { unfreeze(); dispatch({type:'STOP_BRICK_GAME'})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BrickGameComponent);
