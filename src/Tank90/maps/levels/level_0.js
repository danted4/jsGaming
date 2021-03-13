const BrickLayout  = {
  getPositions : (w,h) =>{
    let finalPositions = [];
    for(let i=20;i<h;i+=5){
      finalPositions.push({x:0,y:i,visible:true})
    }
    for(let i=20;i<h;i+=5){
      finalPositions.push({x:Math.round(0.1*w),y:i,visible:true})
    }
    for(let i=20;i<h;i+=5){
      finalPositions.push({x:Math.round(0.2*w),y:i,visible:true})
    }
    for(let i=20;i<h;i+=5){
      finalPositions.push({x:Math.round(0.4*w),y:i,visible:true})
    }
    for(let i=20;i<h;i+=5){
      finalPositions.push({x:Math.round(0.5*w),y:i,visible:true})
    }
    for(let i=20;i<h;i+=5){
      finalPositions.push({x:Math.round(0.7*w),y:i,visible:true})
    }
    for(let i=20;i<h;i+=5){
      finalPositions.push({x:Math.round(0.8*w),y:i,visible:true})
    }
    for(let i=20;i<h;i+=5){
      finalPositions.push({x:Math.round(0.9*w),y:i,visible:true})
    }
    for(let i=20;i<h;i+=5){
      finalPositions.push({x:Math.round(0.97*w),y:i,visible:true})
    }
    for(let i=20;i<w;i+=13){
      finalPositions.push({x:i,y:Math.round(h/13),visible:true})
    }
    for(let i=20;i<w;i+=13){
      finalPositions.push({x:i,y:Math.round(0.5*h),visible:true})
    }
    for(let i=20;i<w;i+=13){
      finalPositions.push({x:i,y:Math.round(0.4*h),visible:true})
    }
    for(let i=20;i<w;i+=13){
      finalPositions.push({x:i,y:Math.round(0.8*h),visible:true})
    }
    for(let i=Math.round(0.4*w);i<Math.round(0.5*w);i+=13){
      finalPositions.push({x:i,y:Math.round(0.83*h),visible:true})
    }
    for(let i=20;i<w;i+=13){
      finalPositions.push({x:i,y:Math.round(0.6*h),visible:true})
    }
    for(let i=20;i<w;i+=13){
      finalPositions.push({x:i,y:Math.round(0.7*h),visible:true})
    }
    for(let i=20;i<w;i+=13){
      finalPositions.push({x:i,y:Math.round(0.3*h),visible:true})
    }
    return finalPositions;
  }
}
export default BrickLayout;
