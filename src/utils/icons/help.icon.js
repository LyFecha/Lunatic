import React from 'react';
import LunaticIcon from './lunatic-icon';

function Help({ className, width = 32, height = 32 }) {
	return (
		<LunaticIcon className={className}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={width}
				height={height}
				x="0"
				y="0"
				enableBackground="new 0 0 32 32"
				version="1.1"
				viewBox="0 0 32 32"
				xmlSpace="preserve"
			>
				<path d="m 10.628906,5.8808594 c -0.214987,-0.001 -0.42313,0.066105 -0.621094,0.203125 -0.197929,0.13695 -0.3337126,0.3059125 -0.4082026,0.5078125 -0.07434,0.20177 -0.063157,0.3725087 0.033203,0.5117187 L 10.667969,8.5996094 C 7.7654347,10.429719 6.000564,13.619938 6,17.054688 c 0,5.522849 4.477153,10 10,10 5.522847,0 10,-4.477151 10,-10 C 26.000084,13.846958 24.464581,10.867019 21.925781,9 l -2.167969,4.773438 c 0.779895,0.889532 1.238599,2.0462 1.242188,3.28125 0,2.76142 -2.238576,5 -5,5 -2.761424,0 -5,-2.238581 -5,-5 0.0042,-1.793391 0.969178,-3.443679 2.523438,-4.330079 l 1.089843,1.574219 c 0.09638,0.13927 0.25171,0.209318 0.466797,0.210938 0.215229,10e-4 0.421172,-0.06601 0.619141,-0.203125 0.19792,-0.13696 0.333879,-0.305933 0.408203,-0.507813 l 2.626953,-7.1386718 c 0.07422,-0.2019799 0.06311,-0.3725587 -0.0332,-0.5117187 -0.0963,-0.13917 -0.251768,-0.2093975 -0.4668,-0.2109375 z"></path>
			</svg>
		</LunaticIcon>
	);
}

export default Help;
