import React from 'react';
import { createGlobalStyle } from 'styled-components';

// CSS Reset + border-box
const GlobalStyle = createGlobalStyle`
    body {
		margin: 0;
        box-sizing: border-box;
	}

	*, *:before, &:after {
		box-sizing: inherit;
	}
`;

// Main component
const Root = () => {
	return (
		<>
			<GlobalStyle />
			<div>React template</div>
		</>
	);
};

export default Root;
