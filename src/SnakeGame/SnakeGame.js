import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Disclaimer from '../Disclaimer/Disclaimer';
import { freeze, unfreeze } from '../common';
import { fullscreen } from '../utility/commonFunctions';


const SnakeGameComponent = (props) =>{
  useEffect(()=>{
    let fps;
    let canvas; let foodX; let foodY;
    if(props.gameOn){
    canvas = document.getElementById('game');
    let ctx = canvas.getContext('2d');
    //Initial Snake stuff
    let x = canvas.width/2;
    let y = canvas.height -30;
    let score = 0;
    let dx = 5;
    let dy = 0;
    let didSnakeEatFood = false;
    let changingDirection;
    let snakeDirection = 'R';
    let snakeParts = [{x: x, y: y},  {x: x-5, y: y},  {x: x-10, y: y},  {x: x-15, y: y},  {x: x-20, y: y}];
    document.addEventListener('keyup',keyUpHandler);
    function keyUpHandler(e){
      if(changingDirection){
        return;
      }
      if(e.keyCode === 37 && (['U','D'].indexOf(snakeDirection) > -1)) { // LEFT
        snakeDirection = 'L';
        dx = -5 ;dy=0;
      }
      if(e.keyCode === 38 && (['L','R'].indexOf(snakeDirection) > -1) ){ // UP
        snakeDirection = 'U';
        dy = -5; dx=0;
      }
      if(e.keyCode === 39 && (['U','D'].indexOf(snakeDirection) > -1)) { // RIGHT
        snakeDirection = 'R';
        dx = 5;dy=0;
      }
      if(e.keyCode === 40 && (['L','R'].indexOf(snakeDirection) > -1)) { // DOWN
        snakeDirection = 'D';
        dy = 5;dx=0;
      }
      changingDirection = true;
    }
    function randomTen(min, max) {  return Math.round((Math.random() * (max-min) + min) / 10) * 10;}
    function createFood() {  foodX = randomTen(0, canvas.width - 5);  foodY = randomTen(0, canvas.height - 5)};
    createFood();
    function drawFood() {
      ctx.beginPath();
      ctx.fillStyle = 'red';
      ctx.strokestyle = 'darkred';
      ctx.rect(foodX, foodY, 5, 5);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }
    function foodOnSnakeCheck(){
    snakeParts.forEach(
      function isFoodOnSnake(part){
      const foodIsOnSnake = part.x === foodX && part.y === foodY;
      if (foodIsOnSnake) {
        createFood();
        // increase snake length
        didSnakeEatFood = true;
      }
    })
    }
    function wallHitCheck(){
      if(snakeParts[0].x > canvas.width || snakeParts[0].x < 0 || snakeParts[0].y > canvas.height || snakeParts[0].y < 0){
        gameOver();
      }
    }
    function gameOver(){
      clearInterval(fps);
      ctx.beginPath();
      ctx.font = "20px Arial"
      ctx.fillStyle = 'yellow'
      ctx.fillText('G A M E   O V E R!',60,(canvas.height/2));
      ctx.closePath();
    }
    function selfEatChack(){
      for(let i =1; i < snakeParts.length;i++){
        if(snakeParts[0].x === snakeParts[i].x && snakeParts[0].y === snakeParts[i].y ){
          gameOver();
        }
      }
    }
    function drawScore(){
      ctx.beginPath();
      ctx.font = "8px Arial";
      ctx.fillStyle = 'red';
      ctx.fillText('S C O R E : '+score.toString().split('').join('  '),10,10);
      ctx.closePath();
    }
    function drawSnake(){
      snakeParts.forEach(drawSnakePart);
    }
    function drawSnakePart(snakePart,index){
      ctx.beginPath();
      ctx.rect(snakePart.x,snakePart.y,5,5);
      if(index===0){
        ctx.fillStyle ="red";
      }
      else{
      ctx.fillStyle = "yellow";
      }
      ctx.strokeStyle = "#000000";
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
    }
    function advanceSnake() {  const head = {x: snakeParts[0].x + dx, y: snakeParts[0].y +dy};
      snakeParts.unshift(head);
      if(didSnakeEatFood){
        score = score + 10;
        didSnakeEatFood = false;
      }
      else{
      snakeParts.pop();
      }
    }

    function draw(){
      changingDirection = false;
      ctx.clearRect(0,0,canvas.width,canvas.height);
      drawSnake();
      drawScore();
      advanceSnake();
      drawFood();
      foodOnSnakeCheck();
      wallHitCheck();
      selfEatChack();
    }
    fps = setInterval(()=>draw(),100);
  }

  },[props.gameOn])

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
            <h1 style={{'marginTop':"100px"}} >THE SNAKE GAME</h1>
            <p>Please click on "start game" to play !</p>
          </div>
        <button className="btn btn-primary" onClick={()=>props.startGame()}>START GAME</button></div>
      }
      <Disclaimer displayControls="snake"/>
      </div>
  )

}

const mapStateToProps = (state) =>{
  return{
    gameOn : state.gameStartSnake
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    startGame : () => { freeze();dispatch({type:'START_SNAKE_GAME'}) },
    stopGame : () => { unfreeze();dispatch({type:'STOP_SNAKE_GAME'})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SnakeGameComponent);
