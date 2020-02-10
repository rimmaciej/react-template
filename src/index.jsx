import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import { Router, Switch, Route } from 'react-router-dom';
import { createHashHistory } from 'history';

// JSS theme
const theme = {};

// Hash history needed for the router
const hashHistory = createHashHistory();

// Simple loading component
const Loading = () => <div>Loading...</div>;

// Main component
const Root = () => {
	return (
		// ThemeProvider provides theme for all components
		<ThemeProvider theme={theme}>
			{/* Router declaration */}
			<Router history={hashHistory}>
				{/* Suspense needed for route switching */}
				<React.Suspense fallback={<Loading />}>
					{/* Switch ensures only single route is rendered */}
					<Switch>
						{/* Root route declaration */}
						<Route path="/" exact>
							React template
						</Route>
					</Switch>
				</React.Suspense>
			</Router>
		</ThemeProvider>
	);
};

// Render App with providers on #root
ReactDOM.render(<Root />, document.getElementById('root'));
