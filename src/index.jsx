import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';

const theme = {};

const Root = () => {
	return <ThemeProvider theme={theme}>React template</ThemeProvider>;
};

// Render App with providers on #root
ReactDOM.render(<Root />, document.getElementById('root'));
