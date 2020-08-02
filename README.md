# Simple react template

React template project without CRA, uses a simple webpack config you can extend.  
What's included:

-   [react-router](https://reacttraining.com/react-router/) for page routing
-   [styled-components](https://styled-components.com/) for styles
-   [polished](https://polished.js.org/) for css functions
-   [date-fns](https://date-fns.org/) for date manipulation
-   [react-icons](https://react-icons.netlify.com/) for all your icon needs

There's also a Dockerfile with 2-stage build for docker deployment

**Development mode** is a basic [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) config with [friendly errors](https://github.com/geowarin/friendly-errors-webpack-plugin).  
**Build** runs [terser](https://terser.org/) for optimization and minimization

## How to start working with the template

```js
yarn install // install dependencies
```

```js
yarn dev // run development server
yarn build // run production bundle
```

**/src/components/Root.jsx** is the main component. It also contains basic global style reset.  
**/src/index.jsx** imports Root and mounts it to #root.

## Directory structure

-   **/src** stores everything that's dynamic, so mostly react components
    -   **index.jsx** create global style and mount a basic component
-   **/static** stores everything that isn't bundled
    -   **index.html** is the basic html template, bundle links are injected into it and it's the file you serve from the dist directory after build
    -   **manifest.json** is the [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
    -   **assets** is a directory for images, icons and fonts
        -   **fonts.css** is loaded in the html template and should contain @font-face directives
-   **/webpack** stores webpack configuration files
    -   **config.js** - base configuration others extend
    -   **dev.js** - development mode configuration
    -   **dist.js** - production build configuration

## Router

This project includes a beta version of react router 6

`React.Suspense` shows `<Loading>` as fallback when new route is loading.  
`Routes` makes the router display only the first matching route.  
`Route` components are the routes.

```JSX
// Imports
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


// Simple loading component
const Loading = () => <div>Loading...</div>;
```

```JSX
<Router>
	{/* Suspense needed for route switching */}
	<React.Suspense fallback={<Loading />}>
		{/* Switch ensures only single route is rendered */}
		<Routes>
			{/* Root route declaration */}
			<Route path="/" element={<Main/>} exact/>
            <Route path="/about" element={<About/>}/>
		</Routes>
	</React.Suspense>
</Router>
```
