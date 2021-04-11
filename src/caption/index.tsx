import React from 'react';
import {Img, Sequence,interpolate,useCurrentFrame} from 'remotion';
export  const Caption:React.FC=()=>{
	const frame=useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	const style:React.CSSProperties={
		position:'fixed',
		opacity,
		height:150,
		bottom:200
		};

return(
	<>
		<Sequence durationInFrames={Infinity} from={30} >
			<Img src={require('../assets/courage.png')} style={{left:200,...style}}/>
		</Sequence>
		<Sequence durationInFrames={Infinity} from={35}>
			<Img src={require('../assets/to.png')} style={{left:900,...style}}/>
		</Sequence>
		<Sequence durationInFrames={Infinity} from={40}>
			<Img src={require('../assets/create.png')} style={{right:200,...style}}/>
		</Sequence>
	</>
)
}
