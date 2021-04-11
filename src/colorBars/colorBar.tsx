import React from 'react'
import {useVideoConfig, interpolate, useCurrentFrame} from 'remotion';

export const ColorBar:React.FC<{index:number,color:string}>=({index,color})=>{
  const {width}=useVideoConfig();
  const barWidth=width/4;
  const height=100;
  const barLeft=index*barWidth;
  const frame=useCurrentFrame();
  const opacity = interpolate(frame, [0, 8], [0, 1], {extrapolateRight: 'clamp'});

  return (
	<div style={{position:'fixed', height,width:barWidth,left:barLeft,opacity,backgroundColor:color}}/>
  )
}
