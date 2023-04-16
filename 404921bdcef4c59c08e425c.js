"use strict";(self.webpackChunkdec_19=self.webpackChunkdec_19||[]).push([[404],{4404:function(e,t,n){n.r(t);var a=n(7294),l=n(6113),o=n(9211),i=n(271),r=new Image;r.src="".concat(i.fQ,"/images/ball.png");var c=new Image;c.src="".concat(i.fQ,"/images/brick.png");var s=new Image;s.src="".concat(i.fQ,"/images/paddle.png");t.default=(0,l.$j)((function(e){return{gameOn:e.gameStart}}),(function(e){return{startGame:function(){(0,i.vV)(),e({type:"START_BRICK_GAME"})},stopGame:function(){(0,i.th)(),e({type:"STOP_BRICK_GAME"})}}}))((function(e){return(0,a.useEffect)((function(){var t,n=!1;if(e.gameOn){for(var a=function(){l.beginPath(),l.font="20px Arial",l.fillText("CONGRATS YOU WIN!",80,50),l.font="15px Arial",l.fillStyle="yellow",l.fillText("(Your Score = "+m+")",90,70),l.closePath(),n=!0},l=(t=document.getElementById("game")).getContext("2d"),o=t.width/2,i=t.height-30,m=0,u=2.5,f=-2.5,d=11,h=55,g=4,p=(t.width-h)/2,y=!1,E=!1,v=!0,b=3,w=5,T=48,x=10,k=7,A=15,C=13,P=[],S=0;S<w;S++){P[S]=[];for(var I=0;I<b;I++)P[S][I]={x:0,y:0,active:!0}}document.addEventListener("keyup",(function(e){39===e.keyCode?y=!1:37===e.keyCode&&(E=!1)})),document.addEventListener("keydown",(function(e){39===e.keyCode?y=!0:37===e.keyCode&&(E=!0)})),function e(){l.clearRect(0,0,t.width,t.height),function(){for(var e=0;e<w;e++)for(var t=0;t<b;t++)if(P[e][t].active){var n=e*(T+k)+C,o=t*(x+k)+A;P[e][t].x=n,P[e][t].y=o,l.beginPath(),l.drawImage(c,n,o,T,x),l.fillStyle="#0095DD",l.fill(),l.closePath()}else m===10*b*w&&a()}(),l.beginPath(),l.drawImage(r,o,i,d,d),l.fillStyle="red",l.fill(),l.closePath(),l.beginPath(),l.drawImage(s,p,t.height-g,h,g),l.fillStyle="#0095DD",l.fill(),l.closePath(),l.beginPath(),l.font="12px sans-serif",l.fillStyle="yellow",l.fillText("score : "+m,10,15),l.closePath(),function(){for(var e=0;e<w;e++)for(var t=0;t<b;t++){var n=P[e][t];o>n.x&&o<n.x+T&&i>n.y&&i<n.y+x&&n.active&&(f=-f,m+=10,n.active=!1)}}(),v&&(l.beginPath(),l.font="17px Arial",l.fillText("Starting game...",80,t.height/2),l.font="13px Arial",l.fillStyle="yellow",l.fillText("( Please Wait )",90,t.height/2+30),l.closePath()),(o+u-d<0||o+u+d>t.width)&&(u=-u),i+f-d<0&&(f=-f),i+f+d+g>t.height&&(o>p&&o<p+h?f=-f:(l.beginPath(),l.font="20px Arial",l.fillText("GAME OVER !",80,50),l.font="15px Arial",l.fillStyle="yellow",l.fillText("(Your Score = "+m+")",90,70),l.closePath(),n=!0)),o+=u,i+=f,y&&p<t.width-h?p+=4:E&&p>0&&(p-=4),n||(v?(v=!1,setTimeout((function(){requestAnimationFrame(e)}),3e3)):requestAnimationFrame(e))}()}}),[e.gameOn]),a.createElement("div",{className:"text"},e.gameOn?a.createElement("div",{style:{width:"60vw",height:"60vh",margin:"30px auto 0 auto",border:"1px solid black"}},a.createElement("canvas",{id:"game",style:{width:"100%",height:"100%",background:"black"}}),a.createElement("button",{className:"btn btn-danger",onClick:function(){e.stopGame()}},"STOP GAME")):a.createElement("div",null,a.createElement("h1",{style:{marginTop:"100px"}},"THE BRICK GAME"),a.createElement("p",null,'Please click on "start game" to play !'),a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.startGame()}},"START GAME")),a.createElement(o.Z,{displayControls:"brick"}))}))},9211:function(e,t,n){var a=n(7294);t.Z=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{style:{marginTop:"50px",lineHeight:"0.6rem"}},a.createElement("h2",null,"Disclaimer !"),a.createElement("p",null,"Above game has been created for learning purpose only, I have no obligation to maintain / update the above code "),a.createElement("p",null,"and I am not the owner of the said titles, therefore, I hold no responsibilty caused by legal damages due to, but not limited to, any "),a.createElement("p",null,"unauthorized publishing & monetization of this source code and / or any modified source code without the concent of original owners of the respective titles."),a.createElement("h5",null,a.createElement("strong",null,"Controls"),":","brick"===e.displayControls?a.createElement("span",null," Left, Right arrow keys [ ",a.createElement("span",{className:"red"},"MOVEMENT")," ]"):null,"snake"===e.displayControls?a.createElement("span",null," Left, Right, Top, Down arrow keys [ ",a.createElement("span",{className:"red"},"MOVEMENT")," ]"):null,"t90"===e.displayControls?a.createElement("span",null," Left, Right, Top, Down arrow keys [ ",a.createElement("span",{className:"red"},"MOVEMENT")," ],  Space Bar [ ",a.createElement("span",{className:"red"},"FIRE")," ]"):null)))}},271:function(e,t,n){n.d(t,{fQ:function(){return o},th:function(){return l},vV:function(){return a}});var a=function(){document.getElementsByTagName("body")[0].style.overflow="hidden"},l=function(){document.getElementsByTagName("body")[0].style.overflow="auto"},o="/jsGaming/public"}}]);