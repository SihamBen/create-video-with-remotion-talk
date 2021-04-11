import React from 'react';
import {ColorBar} from './colorBar';
import {Sequence} from 'remotion';
export const ColorBars:React.FC=()=>{
  const colors=['rgb(66,133,244)','rgb(79,195,247)','rgb(28,233,182)','rgb(0,191,165)'];
  return(
	<>
		{colors.map((color,index)=><Sequence key={color} durationInFrames={5} from={index*5} ><ColorBar color={color} index={index}/></Sequence>)}
	</>

  )
}