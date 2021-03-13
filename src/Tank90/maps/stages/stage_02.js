const Stages = (canvas,espeed) =>{ return ([
  [{x:0,y:0,dir:'D',destroyed:false,dx:0,dy:espeed,gun_x:0,gun_y:0,gspeed_x:0,gspeed_y:0,canFireAgain:true},{x:Math.round(canvas.width/2)-4,y:0,dir:'D',destroyed:false,dx:0,dy:espeed,gun_x:0,gun_y:0,gspeed_x:0,gspeed_y:0,canFireAgain:true},{x:Math.round(canvas.width)-8,y:0,dir:'D',destroyed:false,dx:0,dy:espeed,gun_x:0,gun_y:0,gspeed_x:0,gspeed_y:0,canFireAgain:true}]
])
};
export default Stages;
