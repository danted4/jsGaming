import React, { useEffect } from 'react';
import {connect } from 'react-redux';
import BrickLayout from './maps/levels/level_0';
import Stages from './maps/stages/stage_02';

const Tank90GameComponent = (props) =>{
  window['_int'] = [];
  window['_int2'] = 0;
  useEffect(()=>{
      var canvas;
      var stage2 = false;
      var myAudio = new Audio('jsGaming/music/start.mp3');
      var missFire = new Audio('jsGaming/music/miss.mp3');
      var fireAudio = new Audio('jsGaming/music/fire.mp3');
      // var movingAudio = new Audio('jsGaming/music/moving.mp3');
      var blast = new Audio('jsGaming/music/blast.mp3');
      var home = new Image();
      var tanker = new Image();
      var enemyTankImage = new Image();
      var brickImage = new Image();
      var powerUp = new Image();
      powerUp.src = 'jsGaming/images/star.gif';
      brickImage.src = 'jsGaming/images/t_brick.jpg';
      enemyTankImage.src='jsGaming/images/etank.png';
      tanker.src = 'jsGaming/images/tank.png';
      home.src = 'jsGaming/images/t90_home.png';

      // movingAudio.addEventListener('timeupdate', function(){
      //                 var buffer = .44
      //                 if(this.currentTime > this.duration - buffer){
      //                     this.currentTime = 0
      //                     this.play()
      //                 }}, false);


      var movingAudioInterval;
      if(props.gameOn){
        canvas = document.getElementById("game");
        var ctx = canvas.getContext('2d');
        myAudio.play();
        //initialState
        var score = 0;
        var left_pressed = false;
        var right_pressed = false;
        var up_pressed = false;
        var down_pressed = false;
        var tank_dx =0;
        var tank_dy = 0;
        var tspeed = 0.6;
        var espeed = 0.5;
        var gspeed = 2;
        var t_gspeed = 1.5;
        var gspeed_y ; var gspeed_x;
        var p_blink=true;
        var blinker;
        var tank_dir = 'T';
        var main = true;
        var x = Math.round(canvas.width/2) -40;
        var y = canvas.height -8;
        var enemyPositions = [{x:0,y:0,dir:'D',destroyed:false,dx:0,dy:espeed,gun_x:0,gun_y:0,gspeed_x:0,gspeed_y:0,canFireAgain:true},{x:Math.round(canvas.width/2)-4,y:0,dir:'D',destroyed:false,dx:0,dy:espeed,gun_x:0,gun_y:0,gspeed_x:0,gspeed_y:0,canFireAgain:true},{x:Math.round(canvas.width)-8,y:0,dir:'D',destroyed:false,dx:0,dy:espeed,gun_x:0,gun_y:0,gspeed_x:0,gspeed_y:0,canFireAgain:true}];
        var enemyPositions2 = [{x:0,y:0,dir:'D',destroyed:false,dx:0,dy:espeed+0.5,gun_x:0,gun_y:0,gspeed_x:0,gspeed_y:0,canFireAgain:true},{x:Math.round(canvas.width/2)-4,y:0,dir:'D',destroyed:false,dx:0,dy:espeed+0.5,gun_x:0,gun_y:0,gspeed_x:0,gspeed_y:0,canFireAgain:true},{x:Math.round(canvas.width)-8,y:0,dir:'D',destroyed:false,dx:0,dy:espeed+0.5,gun_x:0,gun_y:0,gspeed_x:0,gspeed_y:0,canFireAgain:true}];
        var gun_x ;
        var gun_y ;
        var canFireAgain = true;
        var firePressed = false;
        var homeAlive = true;
        var brickPositions = BrickLayout.getPositions(Math.round(canvas.width),Math.round(canvas.height));
        // for(let ix =30;ix<=Math.round(canvas.width)-30;ix+=30){
        //   for(let iy=30;iy<=Math.round(canvas.height)-50;iy+=5){
        //     brickPositions.push({x:ix,y:iy,visible:true});
        //   }
        // }
        document.addEventListener('keyup',keyUpHandler);
        document.addEventListener('keydown',keyDownHandler);

        function keyDownHandler(e){
          if(e.keyCode===37){
              tank_dx = -tspeed; tank_dy = 0;
              tank_dir='L';
              // requestAnimationFrame(()=>{movingAudio.pause();movingAudio.play()})
          }
          if(e.keyCode === 38){
              tank_dx = 0; tank_dy = -tspeed;
              tank_dir='T';
          }
          if(e.keyCode ===39){
              tank_dx = tspeed; tank_dy = 0;
              tank_dir='R';
          }
          if(e.keyCode === 40){
              tank_dx = 0; tank_dy = tspeed;
              tank_dir='D';
          }
          if(e.keyCode === 17){
            firePressed = true;
            trackFires();
          }
        }
        function keyUpHandler(e){
          switch(e.keyCode){
            case 37:
              tank_dx = 0;
              break;
            case 38:
              tank_dy = 0;
              break;
            case 39:
              tank_dx = 0;
              break;
            case 40:
              tank_dy = 0;
              break;
            case 17:
              firePressed = false;
          }
        }
        function drawHome(){
          if(homeAlive){
          ctx.beginPath();
          ctx.drawImage(home,canvas.width/2-20,canvas.height-20,20,20);
          ctx.closePath();
        }

        }
        function drawMap(){
            brickPositions.forEach((item, i) => {
              if(item.visible){
                ctx.beginPath();
                ctx.fillStyle = 'red';
                ctx.drawImage(brickImage,item.x,item.y,10,4);
                // ctx.fill();
                ctx.closePath();
              }
            });
          }
        function destroyBrickCheck(gx,gy,sx,sy){
          var destoyed = false;
          brickPositions.forEach((brick, i) => {
              if(brick.visible && gx + sx < brick.x + 10 && gx+sx+2 > brick.x && gy+sy < brick.y+4 && gy+sy+2 > brick.y){
                destoyed = true;
                brick.visible = false;
              }
          });
          return destoyed;
        }
        function powerTaken(gx,gy,pow){
          if(gx < x+ 8 && gx+19 > x && gy < y+8 && gy+19 > y){
            return true;
          }
          return false;
        }
        function drawBlinkingPower(x_pos, y_pos,pow){
          if(powerTaken(x_pos,y_pos,pow)){
            gspeed +=1;
            return;
          }
          if(p_blink){
          ctx.beginPath();
          ctx.drawImage(powerUp,x_pos,y_pos,19,19);
          ctx.closePath();
          }
          requestAnimationFrame(()=>{drawBlinkingPower(x_pos,y_pos,pow)})
          // switch(pow){
          //   case 1:
          //   break;
          //   case 2:
          //   break;
          //   case 3:
          //   break;
          //   case 4:
          //   break;
          // }

        }
        function homeDestroyedCheck(gx,gy,sx,sy){
          var destoyed = false;
              if(gx + sx < canvas.width/2 && gx+sx+2 > canvas.width/2-20 && gy+sy < canvas.height && gy+sy+2 > canvas.height-20){
                destoyed = true;
              }
          return destoyed;
        }
        function destroyTankCheck(gx,gy,sx,sy){
          var destoyed = false;
          enemyPositions.forEach((tank, i) => {
              if(!tank.destoyed && gx + sx < tank.x + 8 && gx+sx+2 > tank.x && gy+sy < tank.y+8 && gy+sy+2 > tank.y){
                destoyed = true;
                tank.destoyed = true;
                clearInterval(blinker);
                blinker = setInterval(()=>{p_blink=!p_blink},500);
                score+=10;
                // drawBlinkingPower(canvas.width/2,canvas.height/2,2);
                drawBlinkingPower(Math.round((Math.random()*(canvas.width-30))),Math.round((Math.random()*(canvas.height-30))),Math.floor((Math.random()*4)+1));
                blast.play();
              }
          });
          return destoyed;
        }
        function mainTankDestroyed(gx,gy,sx,sy){
          var destoyed = false;
              if(gx + sx < x + 8 && gx+sx+2 > x && gy+sy < y+8 && gy+sy+2 > y){
                destoyed = true;
              }
          return destoyed;
        }
        function gameOver(){
          for(let i=0; i<window._int.length;i++){
            if(i==0){
            clearInterval(window._int[i]);
          }
          else{
            clearTimeout(window._int[i])
          }
          }
          myAudio.pause();
          document.removeEventListener('keyup',keyUpHandler);
          document.removeEventListener('keydown',keyDownHandler);
        }
        function trackFires(){
          if(tank_dir === 'T'){
            gun_x = x+3;
            gun_y = y-3;
            gspeed_y = -gspeed; gspeed_x=0;
          }
          else if(tank_dir === 'L'){
            gun_x = x;
            gun_y = y+3;
            gspeed_y = 0; gspeed_x=-gspeed;
          }
          else if(tank_dir === 'R'){
            gun_x = x+8;
            gun_y = y+3;
            gspeed_y = 0; gspeed_x=gspeed;
          }
          else if(tank_dir === 'D'){
            gun_x = x+3;
            gun_y = y+3;
            gspeed_y = gspeed; gspeed_x=0;
          }
          if(canFireAgain){
            fireAudio.pause();
            fireAudio.play();
          fire(gun_x,gun_y,gspeed_x,gspeed_y,{isEnemy:false});
          canFireAgain=false;
          window._int[7]=setTimeout(()=>{ canFireAgain =true },1000);
          }
          if(firePressed){
            requestAnimationFrame(trackFires);
          }
        }

        function fire(gx,gy,sx,sy,object){
          if(destroyBrickCheck(gx,gy,sx,sy)){
            return;
          }
          if(!object.isEnemy){
          if(destroyTankCheck(gx,gy,sx,sy)){
            return;
          }
          if(homeDestroyedCheck(gx,gy,sx,sy)){
            main=false; homeAlive = false;
            blast.play();
            gameOver();
            return;
          }
          }
          if(object.isEnemy){
            if(mainTankDestroyed(gx,gy,sx,sy)){
              main=false;
              blast.play();
              gameOver();
              return;
            }
          }
          ctx.beginPath();
          ctx.fillStyle = 'white';
          ctx.rect(gx,gy,2,2);
          ctx.fill();
          ctx.closePath();
          gy = gy + sy;
          gx = gx + sx;

          if(gy > 0 && gy < canvas.height && gx > 0 && gx < canvas.width){
            requestAnimationFrame(()=>{fire(gx,gy,sx,sy,object)});
          }
          else{
            if(!object.isEnemy){
            missFire.pause();
            missFire.play();
          }
          }
        }
        function drawTank(){
          if(main){
          ctx.beginPath();
          ctx.fillStyle = 'yellow';
          if(tank_dir==='T'){
          ctx.drawImage(tanker,x,y,8,8);
          }
          if(['L','R','D'].indexOf(tank_dir) > -1 ){
            ctx.save();
            ctx.translate(x+4, y+4);
            if(tank_dir==='L'){
            ctx.rotate(270 * Math.PI/180);
            }
            if(tank_dir==='R'){
            ctx.rotate(90 * Math.PI/180);
            }
            if(tank_dir==='D'){
            ctx.rotate(180 * Math.PI/180);
            }
            ctx.translate(-(x+4),-(y+4));
            ctx.drawImage(tanker, x,y,8,8);
            ctx.restore();
          }

          // ctx.fill();
          ctx.closePath();
        }
        }
        function drawEnemyTanks(){
          enemyPositions.forEach((tank, i) => {
            if(!tank.destoyed){
            ctx.beginPath();
            ctx.fillStyle = 'blue';
            if(tank.dir=='T'){
            ctx.drawImage(enemyTankImage,tank.x,tank.y,8,8);
            }
            if(['D','L','R'].indexOf(tank.dir) > -1){
              ctx.save();
              ctx.translate(tank.x+4, tank.y+4);
              if(tank.dir==='L'){
              ctx.rotate(270 * Math.PI/180);
              }
              if(tank.dir==='R'){
              ctx.rotate(90 * Math.PI/180);
              }
              if(tank.dir==='D'){
              ctx.rotate(180 * Math.PI/180);
              }
              ctx.translate(-(tank.x+4),-(tank.y+4));
              ctx.drawImage(enemyTankImage, tank.x,tank.y,8,8);
              ctx.restore();
            }
            // ctx.fill();
            ctx.closePath();
          }
          });
        }
        function enemyTankAI(){
          for(let i =0 ; i<enemyPositions.length;i++){
            if(brickTankCollisionCheck(enemyPositions[i].x+enemyPositions[i].dx , enemyPositions[i].y+enemyPositions[i].dy)){
              enemyPositions[i].dx = 0; enemyPositions[i].dy = 0;
              break;
            }
            if( enemyPositions[i].x+enemyPositions[i].dx> 0 && enemyPositions[i].x+enemyPositions[i].dx < canvas.width-8)
            {
            enemyPositions[i].x = enemyPositions[i].x + enemyPositions[i].dx; }
            if( enemyPositions[i].y+enemyPositions[i].dy > 0 && enemyPositions[i].y+enemyPositions[i].dy < canvas.height-8 )
            {
            enemyPositions[i].y = enemyPositions[i].y + enemyPositions[i].dy; }
          };
        }
        function trackEnemyFire(){
          enemyPositions.forEach((tank, i) => {
            if(!tank.canFireAgain || tank.destoyed){
              return;
            }
            switch (tank.dir) {
              case 'T':
                tank.gun_x = tank.x+3;
                tank.gun_y = tank.y-3;
                tank.gspeed_y = -t_gspeed; tank.gspeed_x=0;
                break;
              case 'L':
              tank.gun_x = tank.x;
              tank.gun_y = tank.y+3;
              tank.gspeed_y =0; tank.gspeed_x=-t_gspeed;
                break;
              case 'R':
              tank.gun_x = tank.x+8;
              tank.gun_y = tank.y+3;
              tank.gspeed_y = 0; tank.gspeed_x=t_gspeed;
                break;
              case 'D':
              tank.gun_x = tank.x+3;
              tank.gun_y = tank.y+3;
              tank.gspeed_y = t_gspeed; tank.gspeed_x=0;
                break;
            }
            if(main){
            if(tank.canFireAgain){
            fire(tank.gun_x,tank.gun_y,tank.gspeed_x,tank.gspeed_y,{isEnemy:true});
            tank.canFireAgain=false;
            window._int[5]=setTimeout(()=>{ tank.canFireAgain =true },1000);
            }
            window._int[6]=setTimeout(()=>trackEnemyFire(),1000);
          }

          });
        }

        function advanceTank(){
          if(brickTankCollisionCheck(x+tank_dx, y+tank_dy)){
            tank_dx = 0; tank_dy=0;
            return;
          }
          if (tankTankCollisionCheck(x+tank_dx, y+tank_dy)){
            tank_dx = 0; tank_dy=0;
            return;
          }
          if( x+tank_dx > 0 && x+tank_dx < canvas.width-8)
          {
          x = x + tank_dx; }
          if( y+tank_dy > 0 && y+tank_dy < canvas.height-8 )
          {
          y = y + tank_dy; }
        }
        function brickTankCollisionCheck(x_with_speed,y_with_speed){
          let result =false;
          brickPositions.forEach((brick, i) => {
            if(brick.visible && x_with_speed < brick.x + 10 && y_with_speed < brick.y+4 && x_with_speed+8 > brick.x && y_with_speed+8 > brick.y ){
              result=true;
            }
          });
          return result

        }
        function tankTankCollisionCheck(x_with_speed,y_with_speed){
          let result =false;
          enemyPositions.forEach((tank, i) => {
            if(!tank.destoyed && x_with_speed < tank.x +tank.dx+ 8 && y_with_speed < tank.y+tank.dy+8 && x_with_speed+8 > tank.x+tank.dx && y_with_speed+8 > tank.y+tank.dy ){
              tank.dx=0;tank.dy=0;
              result=true;
            }
          });
          return result

        }
        function loadStage(stageCode){
          switch (stageCode) {
            case 2:
                espeed = 0.7;
                t_gspeed = 1.6;
                enemyPositions = enemyPositions2;
                trackEnemyFire();
              break;
            default:

          }

        }
        function draw(){
          ctx.clearRect(0,0,canvas.width,canvas.height);
          drawTank();
          drawMap();
          drawHome();
          advanceTank();
          if(score == 30){
          if(!stage2){
          clearInterval(window._int[6]);
          loadStage(2);
          stage2 = true;
          }
          }
          drawEnemyTanks();
          enemyTankAI();
          if(main){
          requestAnimationFrame(draw);
        }
          else{
            ctx.beginPath();
            ctx.font= '15px sans-serif';
            ctx.fillStyle = 'yellow';
            ctx.fillText('G A M E   O V E R',canvas.width/2-60,canvas.height/2);
            ctx.closePath();
          }

        }
        draw();
        trackEnemyFire();
        window._int.push(window.setInterval(()=>{
          enemyPositions.forEach((tank, i) => {
            var rnd = Math.floor(Math.random()*4)+1;
            var timeout = (Math.floor(Math.random()*4)+1)*1000;
            switch(rnd){
              case 1:
              window._int[1] = setTimeout(()=>{
                tank.dx = 0;
                tank.dy = -espeed;
                tank.dir = 'T';
              },timeout)
              break;
              case 2:
              window._int[2] =setTimeout(()=>{
                tank.dx = 0;
                tank.dy = espeed;
                tank.dir = 'D';
              },timeout)
              break;
              case 3:
              window._int[3]=setTimeout(()=>{
                tank.dx = espeed;
                tank.dy = 0;
                tank.dir = 'R';
              },timeout)
              break;
              case 4:
              window._int[4]=setTimeout(()=>{
                tank.dx = -espeed;
                tank.dy = 0;
                tank.dir = 'L';
              },timeout)
              break;
            }
          });
        },1000));
      }
      else{
        for(let i=0; i<window._int.length;i++){
          clearInterval(window._int[i]);
        }
        myAudio.pause();
      }

  },[props.gameOn])

  return(      <div>
        { props.gameOn ?

          <div style={{width:'60vw',height:'60vh',margin:'30px auto 0 auto',border:'1px solid black'}}>
            <canvas id ='game' style={{width:'100%',height:'100%',background:'black'}}></canvas>
            <button className="btn btn-danger" onClick={()=>{ props.stopGame()}}>STOP GAME</button>
          </div>
          : <div><h1 style={{'margin-top':"100px"}} >THE T90 GAME</h1>
          <p>Please click on "start game" to play !</p>
          <button className="btn btn-primary" onClick={()=>props.startGame()}>START GAME</button></div>
        }
        </div>)

}


const mapStateToProps = (state) =>{
  return {gameOn : state.gameStartT90};
}
const mapDispatchToProps = (dispatch) =>{
  return{
    startGame : () =>{ dispatch({type:"START_TANK_GAME"}) },
    stopGame : () =>{ dispatch({type:"STOP_TANK_GAME"}) }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Tank90GameComponent);
