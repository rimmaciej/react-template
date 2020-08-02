import React from 'react';
import ReactDOM from 'react-dom';
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

// Render App with providers on #root
ReactDOM.render(
	<>
		<GlobalStyle />
		<div>React template</div>
	</>,
	document.getElementById('root')
);
