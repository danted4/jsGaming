(this.webpackJsonpdec_19=this.webpackJsonpdec_19||[]).push([[0],{24:function(e,t,n){e.exports=n(37)},29:function(e,t,n){},34:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(12),o=n.n(r),l=(n(29),n(6)),c=function(){return i.a.createElement("nav",{className:"header"},i.a.createElement("div",null,i.a.createElement(l.b,{exact:!0,activeClassName:"active",to:"/"},"Home"),i.a.createElement("span",null,"\xa0\xa0"),i.a.createElement(l.b,{activeClassName:"active",to:"/brick"},"Brick Game"),i.a.createElement("span",null,"\xa0\xa0"),i.a.createElement(l.b,{activeClassName:"active",to:"/snake"},"Snake Game"),i.a.createElement("span",null,"\xa0\xa0"),i.a.createElement(l.b,{activeClassName:"active",to:"/t90"},"T90 Game"),i.a.createElement("span",null,"\xa0\xa0")))},s=function(){return i.a.createElement("div",null,i.a.createElement("h3",null,"WELCOME TO JAVASCRIPT GAMING"),i.a.createElement("p",null,"Please choose one of the games mentioned below"),i.a.createElement("div",{className:"row no-gutters"},i.a.createElement("div",{className:"col-xl-12"},i.a.createElement(l.b,{exact:!0,activeClassName:"active",to:"/brick"},i.a.createElement("span",{className:"gSelect"},"Brick Game")))),i.a.createElement("div",{className:"row no-gutters"},i.a.createElement("div",{className:"col-xl-12"},i.a.createElement(l.b,{className:"col-xs-6",exact:!0,activeClassName:"active",to:"/snake"},i.a.createElement("span",{className:"gSelect"},"Snake Game")))),i.a.createElement("div",{className:"row no-gutters"},i.a.createElement("div",{className:"col-xl-12"},i.a.createElement(l.b,{className:"col-xs-6",exact:!0,activeClassName:"active",to:"/t90"},i.a.createElement("span",{className:"gSelect"},"T90 Game")))))},d=(n(34),n(10)),u=(n(35),n(9)),m=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{marginTop:"50px",lineHeight:"0.6rem"}},i.a.createElement("h2",null,"Disclaimer !"),i.a.createElement("p",null,"Above game has been created for learning purpose only, I have no obligation to maintain / update the above code "),i.a.createElement("p",null,"and I am not the owner of the said titles, therefore, I hold no responsibilty caused by legal damages due to, but not limited to, any "),i.a.createElement("p",null,"unauthorized publishing & monetization of this source code and / or any modified source code without the concent of original owners of the respective titles."),i.a.createElement("h5",null,i.a.createElement("strong",null,"Controls"),":","brick"===e.displayControls?i.a.createElement("span",null,"\xa0Left, Right arrow keys [movement]"):null,"snake"===e.displayControls?i.a.createElement("span",null,"\xa0Left, Right, Top, Down arrow keys [movement]"):null,"t90"===e.displayControls?i.a.createElement("span",null,"\xa0Left, Right, Top, Down arrow keys [movement],  RCtrl [fire]"):null)))},h=Object(u.b)((function(e){return{gameOn:e.gameStart}}),(function(e){return{startGame:function(){e({type:"START_BRICK_GAME"})},stopGame:function(){e({type:"STOP_BRICK_GAME"})}}}))((function(e){return Object(a.useEffect)((function(){var t,n=!1;if(e.gameOn){var a=function(){i.beginPath(),i.font="20px Arial",i.fillText("CONGRATS YOU WIN!",80,50),i.font="15px Arial",i.fillStyle="yellow",i.fillText("(Your Score = "+l+")",90,70),i.closePath(),n=!0},i=(t=document.getElementById("game")).getContext("2d"),r=t.width/2,o=t.height-30,l=0,c=2.5,s=-2.5,d=11,u=55,m=4,h=(t.width-u)/2,g=!1,f=!1,y=!0,p=3,v=5,x=48,E=10,w=7,b=15,k=13,_=new Image;_.src="jsGaming/images/ball.png";var A=new Image;A.src="jsGaming/images/brick.png";var T=new Image;T.src="jsGaming/images/paddle.png";for(var S=[],M=0;M<v;M++){S[M]=[];for(var P=0;P<p;P++)S[M][P]={x:0,y:0,active:!0}}document.addEventListener("keyup",(function(e){39===e.keyCode?g=!1:37===e.keyCode&&(f=!1)})),document.addEventListener("keydown",(function(e){39===e.keyCode?g=!0:37===e.keyCode&&(f=!0)})),function e(){i.clearRect(0,0,t.width,t.height),function(){for(var e=0;e<v;e++)for(var t=0;t<p;t++)if(S[e][t].active){var n=e*(x+w)+k,r=t*(E+w)+b;S[e][t].x=n,S[e][t].y=r,i.beginPath(),i.drawImage(A,n,r,x,E),i.fillStyle="#0095DD",i.fill(),i.closePath()}else l===10*p*v&&a()}(),i.beginPath(),i.drawImage(_,r,o,d,d),i.fillStyle="red",i.fill(),i.closePath(),i.beginPath(),i.drawImage(T,h,t.height-m,u,m),i.fillStyle="#0095DD",i.fill(),i.closePath(),i.beginPath(),i.font="12px sans-serif",i.fillStyle="yellow",i.fillText("score : "+l,10,15),i.closePath(),function(){for(var e=0;e<v;e++)for(var t=0;t<p;t++){var n=S[e][t];r>n.x&&r<n.x+x&&o>n.y&&o<n.y+E&&n.active&&(s=-s,l+=10,n.active=!1)}}(),y&&(i.beginPath(),i.font="17px Arial",i.fillText("Starting game...",80,t.height/2),i.font="13px Arial",i.fillStyle="yellow",i.fillText("( Please Wait )",90,t.height/2+30),i.closePath()),(r+c-d<0||r+c+d>t.width)&&(c=-c),o+s-d<0&&(s=-s),o+s+d+m>t.height&&(r>h&&r<h+u?s=-s:(i.beginPath(),i.font="20px Arial",i.fillText("GAME OVER !",80,50),i.font="15px Arial",i.fillStyle="yellow",i.fillText("(Your Score = "+l+")",90,70),i.closePath(),n=!0)),r+=c,o+=s,g&&h<t.width-u?h+=4:f&&h>0&&(h-=4),n||(y?(y=!1,setTimeout((function(){requestAnimationFrame(e)}),3e3)):requestAnimationFrame(e))}()}}),[e.gameOn]),i.a.createElement("div",null,e.gameOn?i.a.createElement("div",{style:{width:"60vw",height:"60vh",margin:"30px auto 0 auto",border:"1px solid black"}},i.a.createElement("canvas",{id:"game",style:{width:"100%",height:"100%",background:"black"}}),i.a.createElement("button",{className:"btn btn-danger",onClick:function(){e.stopGame()}},"STOP GAME")):i.a.createElement("div",null,i.a.createElement("h1",{style:{"margin-top":"100px"}},"THE BRICK GAME"),i.a.createElement("p",null,'Please click on "start game" to play !'),i.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.startGame()}},"START GAME")),i.a.createElement(m,{displayControls:"brick"}))})),g=Object(u.b)((function(e){return{gameOn:e.gameStartSnake}}),(function(e){return{startGame:function(){e({type:"START_SNAKE_GAME"})},stopGame:function(){e({type:"STOP_SNAKE_GAME"})}}}))((function(e){return Object(a.useEffect)((function(){var t,n,a,i;if(e.gameOn){var r,o=function(e,t){return 10*Math.round((Math.random()*(t-e)+e)/10)},l=function(){a=o(0,n.width-5),i=o(0,n.height-5)},c=function(){clearInterval(t),u.beginPath(),u.font="20px Arial",u.fillStyle="yellow",u.fillText("G A M E   O V E R!",60,n.height/2),u.closePath()},s=function(e,t){u.beginPath(),u.rect(e.x,e.y,5,5),u.fillStyle=0===t?"red":"yellow",u.strokeStyle="#000000",u.stroke(),u.fill(),u.closePath()},d=function(){r=!1,u.clearRect(0,0,n.width,n.height),x.forEach(s),u.beginPath(),u.font="8px Arial",u.fillStyle="red",u.fillText("S C O R E : "+g.toString().split("").join("  "),10,10),u.closePath(),function(){var e={x:x[0].x+f,y:x[0].y+y};x.unshift(e),p?(g+=10,p=!1):x.pop()}(),u.beginPath(),u.fillStyle="red",u.strokestyle="darkred",u.rect(a,i,5,5),u.fill(),u.stroke(),u.closePath(),x.forEach((function(e){e.x===a&&e.y===i&&(l(),p=!0)})),(x[0].x>n.width||x[0].x<0||x[0].y>n.height||x[0].y<0)&&c(),function(){for(var e=1;e<x.length;e++)x[0].x===x[e].x&&x[0].y===x[e].y&&c()}()},u=(n=document.getElementById("game")).getContext("2d"),m=n.width/2,h=n.height-30,g=0,f=5,y=0,p=!1,v="R",x=[{x:m,y:h},{x:m-5,y:h},{x:m-10,y:h},{x:m-15,y:h},{x:m-20,y:h}];document.addEventListener("keyup",(function(e){r||(37===e.keyCode&&["U","D"].indexOf(v)>-1&&(v="L",f=-5,y=0),38===e.keyCode&&["L","R"].indexOf(v)>-1&&(v="U",y=-5,f=0),39===e.keyCode&&["U","D"].indexOf(v)>-1&&(v="R",f=5,y=0),40===e.keyCode&&["L","R"].indexOf(v)>-1&&(v="D",y=5,f=0),r=!0)})),l(),t=setInterval((function(){return d()}),100)}}),[e.gameOn]),i.a.createElement("div",null,e.gameOn?i.a.createElement("div",{style:{width:"60vw",height:"60vh",margin:"30px auto 0 auto",border:"1px solid black"}},i.a.createElement("canvas",{id:"game",style:{width:"100%",height:"100%",background:"black"}}),i.a.createElement("button",{className:"btn btn-danger",onClick:function(){e.stopGame()}},"STOP GAME")):i.a.createElement("div",null,i.a.createElement("h1",{style:{"margin-top":"100px"}},"THE SNAKE GAME"),i.a.createElement("p",null,'Please click on "start game" to play !'),i.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.startGame()}},"START GAME")),i.a.createElement(m,{displayControls:"snake"}))})),f={getPositions:function(e,t){for(var n=[],a=20;a<t;a+=5)n.push({x:0,y:a,visible:!0});for(var i=20;i<t;i+=5)n.push({x:Math.round(.1*e),y:i,visible:!0});for(var r=20;r<t;r+=5)n.push({x:Math.round(.2*e),y:r,visible:!0});for(var o=20;o<t;o+=5)n.push({x:Math.round(.4*e),y:o,visible:!0});for(var l=20;l<t;l+=5)n.push({x:Math.round(.5*e),y:l,visible:!0});for(var c=20;c<t;c+=5)n.push({x:Math.round(.7*e),y:c,visible:!0});for(var s=20;s<t;s+=5)n.push({x:Math.round(.8*e),y:s,visible:!0});for(var d=20;d<t;d+=5)n.push({x:Math.round(.9*e),y:d,visible:!0});for(var u=20;u<t;u+=5)n.push({x:Math.round(.97*e),y:u,visible:!0});for(var m=20;m<e;m+=13)n.push({x:m,y:Math.round(t/13),visible:!0});for(var h=20;h<e;h+=13)n.push({x:h,y:Math.round(.5*t),visible:!0});for(var g=20;g<e;g+=13)n.push({x:g,y:Math.round(.4*t),visible:!0});for(var f=20;f<e;f+=13)n.push({x:f,y:Math.round(.8*t),visible:!0});for(var y=Math.round(.4*e);y<Math.round(.5*e);y+=13)n.push({x:y,y:Math.round(.83*t),visible:!0});for(var p=20;p<e;p+=13)n.push({x:p,y:Math.round(.6*t),visible:!0});for(var v=20;v<e;v+=13)n.push({x:v,y:Math.round(.7*t),visible:!0});for(var x=20;x<e;x+=13)n.push({x:x,y:Math.round(.3*t),visible:!0});return n}},y=Object(u.b)((function(e){return{gameOn:e.gameStartT90}}),(function(e){return{startGame:function(){e({type:"START_TANK_GAME"})},stopGame:function(){e({type:"STOP_TANK_GAME"})}}}))((function(e){return window._int=[],window._int2=0,Object(a.useEffect)((function(){var t,n=!1,a=new Audio("jsGaming/music/start.mp3"),i=new Audio("jsGaming/music/miss.mp3"),r=new Audio("jsGaming/music/fire.mp3"),o=new Audio("jsGaming/music/blast.mp3"),l=new Image,c=new Image,s=new Image,d=new Image,u=new Image;if(u.src="jsGaming/images/star.gif",d.src="jsGaming/images/t_brick.jpg",s.src="jsGaming/images/etank.png",c.src="jsGaming/images/tank.png",l.src="jsGaming/images/t90_home.png",e.gameOn){var m=function(e){37===e.keyCode&&(P=-G,O=0,j="L"),38===e.keyCode&&(P=0,O=-G,j="T"),39===e.keyCode&&(P=G,O=0,j="R"),40===e.keyCode&&(P=0,O=G,j="D"),17===e.keyCode&&(U=!0,p())},h=function(e){switch(e.keyCode){case 37:P=0;break;case 38:O=0;break;case 39:P=0;break;case 40:O=0;break;case 17:U=!1}},g=function e(t,n,a){var i,r;(r=n,(i=t)<L+8&&i+19>L&&r<F+8&&r+19>F)?I+=1:(N&&(b.beginPath(),b.drawImage(u,t,n,19,19),b.closePath()),requestAnimationFrame((function(){e(t,n,a)})))},y=function(){for(var e=0;e<window._int.length;e++)0==e?clearInterval(window._int[e]):clearTimeout(window._int[e]);a.pause(),document.removeEventListener("keyup",h),document.removeEventListener("keydown",m)},p=function e(){"T"===j?(T=L+3,S=F-3,k=-I,_=0):"L"===j?(T=L,S=F+3,k=0,_=-I):"R"===j?(T=L+8,S=F+3,k=0,_=I):"D"===j&&(T=L+3,S=F+3,k=I,_=0),W&&(r.pause(),r.play(),v(T,S,_,k,{isEnemy:!1}),W=!1,window._int[7]=setTimeout((function(){W=!0}),1e3)),U&&requestAnimationFrame(e)},v=function e(n,a,r,l,c){if(!function(e,t,n,a){var i=!1;return H.forEach((function(r,o){r.visible&&e+n<r.x+10&&e+n+2>r.x&&t+a<r.y+4&&t+a+2>r.y&&(i=!0,r.visible=!1)})),i}(n,a,r,l)){if(!c.isEnemy){if(function(e,n,a,i){var r=!1;return K.forEach((function(l,c){!l.destoyed&&e+a<l.x+8&&e+a+2>l.x&&n+i<l.y+8&&n+i+2>l.y&&(r=!0,l.destoyed=!0,clearInterval(A),A=setInterval((function(){N=!N}),500),M+=10,g(Math.round(Math.random()*(t.width-30)),Math.round(Math.random()*(t.height-30)),Math.floor(4*Math.random()+1)),o.play())})),r}(n,a,r,l))return;if(function(e,n,a,i){var r=!1;return e+a<t.width/2&&e+a+2>t.width/2-20&&n+i<t.height&&n+i+2>t.height-20&&(r=!0),r}(n,a,r,l))return D=!1,q=!1,o.play(),void y()}if(c.isEnemy&&function(e,t,n,a){var i=!1;return e+n<L+8&&e+n+2>L&&t+a<F+8&&t+a+2>F&&(i=!0),i}(n,a,r,l))return D=!1,o.play(),void y();b.beginPath(),b.fillStyle="white",b.rect(n,a,2,2),b.fill(),b.closePath(),n+=r,(a+=l)>0&&a<t.height&&n>0&&n<t.width?requestAnimationFrame((function(){e(n,a,r,l,c)})):c.isEnemy||(i.pause(),i.play())}},x=function e(){K.forEach((function(t,n){if(t.canFireAgain&&!t.destoyed){switch(t.dir){case"T":t.gun_x=t.x+3,t.gun_y=t.y-3,t.gspeed_y=-R,t.gspeed_x=0;break;case"L":t.gun_x=t.x,t.gun_y=t.y+3,t.gspeed_y=0,t.gspeed_x=-R;break;case"R":t.gun_x=t.x+8,t.gun_y=t.y+3,t.gspeed_y=0,t.gspeed_x=R;break;case"D":t.gun_x=t.x+3,t.gun_y=t.y+3,t.gspeed_y=R,t.gspeed_x=0}D&&(t.canFireAgain&&(v(t.gun_x,t.gun_y,t.gspeed_x,t.gspeed_y,{isEnemy:!0}),t.canFireAgain=!1,window._int[5]=setTimeout((function(){t.canFireAgain=!0}),1e3)),window._int[6]=setTimeout((function(){return e()}),1e3))}}))},E=function(e,t){var n=!1;return H.forEach((function(a,i){a.visible&&e<a.x+10&&t<a.y+4&&e+8>a.x&&t+8>a.y&&(n=!0)})),n},w=function(e,t){var n=!1;return K.forEach((function(a,i){!a.destoyed&&e<a.x+a.dx+8&&t<a.y+a.dy+8&&e+8>a.x+a.dx&&t+8>a.y+a.dy&&(a.dx=0,a.dy=0,n=!0)})),n},b=(t=document.getElementById("game")).getContext("2d");a.play();var k,_,A,T,S,M=0,P=0,O=0,G=.6,C=.5,I=2,R=1.5,N=!0,j="T",D=!0,L=Math.round(t.width/2)-40,F=t.height-8,K=[{x:0,y:0,dir:"D",destroyed:!1,dx:0,dy:C,gun_x:0,gun_y:0,gspeed_x:0,gspeed_y:0,canFireAgain:!0},{x:Math.round(t.width/2)-4,y:0,dir:"D",destroyed:!1,dx:0,dy:C,gun_x:0,gun_y:0,gspeed_x:0,gspeed_y:0,canFireAgain:!0},{x:Math.round(t.width)-8,y:0,dir:"D",destroyed:!1,dx:0,dy:C,gun_x:0,gun_y:0,gspeed_x:0,gspeed_y:0,canFireAgain:!0}],B=[{x:0,y:0,dir:"D",destroyed:!1,dx:0,dy:C+.5,gun_x:0,gun_y:0,gspeed_x:0,gspeed_y:0,canFireAgain:!0},{x:Math.round(t.width/2)-4,y:0,dir:"D",destroyed:!1,dx:0,dy:C+.5,gun_x:0,gun_y:0,gspeed_x:0,gspeed_y:0,canFireAgain:!0},{x:Math.round(t.width)-8,y:0,dir:"D",destroyed:!1,dx:0,dy:C+.5,gun_x:0,gun_y:0,gspeed_x:0,gspeed_y:0,canFireAgain:!0}],W=!0,U=!1,q=!0,H=f.getPositions(Math.round(t.width),Math.round(t.height));document.addEventListener("keyup",h),document.addEventListener("keydown",m),function e(){b.clearRect(0,0,t.width,t.height),D&&(b.beginPath(),b.fillStyle="yellow","T"===j&&b.drawImage(c,L,F,8,8),["L","R","D"].indexOf(j)>-1&&(b.save(),b.translate(L+4,F+4),"L"===j&&b.rotate(270*Math.PI/180),"R"===j&&b.rotate(90*Math.PI/180),"D"===j&&b.rotate(180*Math.PI/180),b.translate(-(L+4),-(F+4)),b.drawImage(c,L,F,8,8),b.restore()),b.closePath()),H.forEach((function(e,t){e.visible&&(b.beginPath(),b.fillStyle="red",b.drawImage(d,e.x,e.y,10,4),b.closePath())})),q&&(b.beginPath(),b.drawImage(l,t.width/2-20,t.height-20,20,20),b.closePath()),E(L+P,F+O)?(P=0,O=0):w(L+P,F+O)?(P=0,O=0):(L+P>0&&L+P<t.width-8&&(L+=P),F+O>0&&F+O<t.height-8&&(F+=O)),30==M&&(n||(clearInterval(window._int[6]),function(e){switch(e){case 2:C=.7,R=1.6,K=B,x()}}(2),n=!0)),K.forEach((function(e,t){e.destoyed||(b.beginPath(),b.fillStyle="blue","T"==e.dir&&b.drawImage(s,e.x,e.y,8,8),["D","L","R"].indexOf(e.dir)>-1&&(b.save(),b.translate(e.x+4,e.y+4),"L"===e.dir&&b.rotate(270*Math.PI/180),"R"===e.dir&&b.rotate(90*Math.PI/180),"D"===e.dir&&b.rotate(180*Math.PI/180),b.translate(-(e.x+4),-(e.y+4)),b.drawImage(s,e.x,e.y,8,8),b.restore()),b.closePath())})),function(){for(var e=0;e<K.length;e++){if(E(K[e].x+K[e].dx,K[e].y+K[e].dy)){K[e].dx=0,K[e].dy=0;break}K[e].x+K[e].dx>0&&K[e].x+K[e].dx<t.width-8&&(K[e].x=K[e].x+K[e].dx),K[e].y+K[e].dy>0&&K[e].y+K[e].dy<t.height-8&&(K[e].y=K[e].y+K[e].dy)}}(),D?requestAnimationFrame(e):(b.beginPath(),b.font="15px sans-serif",b.fillStyle="yellow",b.fillText("G A M E   O V E R",t.width/2-60,t.height/2),b.closePath())}(),x(),window._int.push(window.setInterval((function(){K.forEach((function(e,t){var n=Math.floor(4*Math.random())+1,a=1e3*(Math.floor(4*Math.random())+1);switch(n){case 1:window._int[1]=setTimeout((function(){e.dx=0,e.dy=-C,e.dir="T"}),a);break;case 2:window._int[2]=setTimeout((function(){e.dx=0,e.dy=C,e.dir="D"}),a);break;case 3:window._int[3]=setTimeout((function(){e.dx=C,e.dy=0,e.dir="R"}),a);break;case 4:window._int[4]=setTimeout((function(){e.dx=-C,e.dy=0,e.dir="L"}),a)}}))}),1e3))}else{for(var V=0;V<window._int.length;V++)clearInterval(window._int[V]);a.pause()}}),[e.gameOn]),i.a.createElement("div",null,e.gameOn?i.a.createElement("div",{style:{width:"60vw",height:"60vh",margin:"30px auto 0 auto",border:"1px solid black"}},i.a.createElement("canvas",{id:"game",style:{width:"100%",height:"100%",background:"black"}}),i.a.createElement("button",{className:"btn btn-danger",onClick:function(){e.stopGame()}},"STOP GAME")):i.a.createElement("div",null,i.a.createElement("h1",{style:{"margin-top":"100px"}},"THE T90 GAME"),i.a.createElement("p",null,'Please click on "start game" to play !'),i.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.startGame()}},"START GAME")),i.a.createElement(m,{displayControls:"t90"}))}));var p=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"App"},i.a.createElement("section",null,i.a.createElement(l.a,null,i.a.createElement(c,null),i.a.createElement("div",{style:{paddingTop:"30px"}},i.a.createElement(d.d,null,i.a.createElement(d.b,{exact:!0,path:"/home",component:s}),i.a.createElement(d.b,{exact:!0,path:"/brick",component:h}),i.a.createElement(d.b,{exact:!0,path:"/snake",component:g}),i.a.createElement(d.b,{exact:!0,path:"/t90",component:y}),i.a.createElement(d.b,{exact:!0,path:"/*",component:function(){return i.a.createElement(d.a,{to:"/home"})}})))))))},v=n(14),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var w=n(23);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _={gameStart:!1,gameStartSnake:!1,gameStartT90:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;return console.log("action received",t),"STOP_BRICK_GAME"===t.type?k({},e,{gameStart:!1}):"START_BRICK_GAME"===t.type?k({},e,{gameStart:!0}):"STOP_SNAKE_GAME"===t.type?k({},e,{gameStartSnake:!1}):"START_SNAKE_GAME"===t.type?k({},e,{gameStartSnake:!0}):"STOP_TANK_GAME"===t.type?k({},e,{gameStartT90:!1}):"START_TANK_GAME"===t.type?k({},e,{gameStartT90:!0}):e},T=Object(v.b)(A);o.a.render(i.a.createElement(u.a,{store:T},i.a.createElement(p,{name:"Kanav",char:" is awesome"})),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/jsGaming",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/jsGaming","/service-worker.js");x?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(t,e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.bbc2f95b.chunk.js.map