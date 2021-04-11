import { ColorBars } from './colorBars';
import {Caption} from './caption';
import {Logo} from './logo';

export const HelloWorld: React.FC = () => {
	
	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<ColorBars/>
			<Caption/>
			<Logo/>
		</div>
	);
};
