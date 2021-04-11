import React from 'react';
import {spring,Sequence,Img,useVideoConfig, useCurrentFrame,interpolate} from 'remotion'
export const Logo:React.FC=()=>{
const videoConfig=useVideoConfig();
const frame=useCurrentFrame(); 

const scaleIn = spring({
  fps: videoConfig.fps,
  from: 0,
  to: 1,
  frame
});
const translation = interpolate(
	spring({
		frame:frame-5,
		fps: videoConfig.fps,
		config: {
			damping: 100,
			mass: 1,
		},
	}),
	[0, 1],
	[0, -400]
);
const opacity = interpolate(frame-5, [0, 20], [0, 1], {extrapolateRight: 'clamp'});
return(
	<div style={{position:'fixed',top:700 ,left:500,	transform: `translateY(${translation}px)`,backgroundColor:'blue'}}>
		<Sequence durationInFrames={Infinity} from={0}>
			<Img src={require('../assets/WTM.png')} style={{height:300,transform:`scale(${scaleIn})`}}/>
		</Sequence>
		<Sequence durationInFrames={Infinity} from={40}>
			<span style={{position:'fixed',opacity,fontSize:120,fontFamily:'Roboto',color:'rgb(102,102,102)',left:400}}>Women TechMakers</span>
		</Sequence>
	</div>
)
}