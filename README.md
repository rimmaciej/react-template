# Simple react template

React template project without CRA, uses a simple webpack config you can extend.  
By default it includes [react-router](https://reacttraining.com/react-router/) and [react-jss](https://cssinjs.org/react-jss/)  
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

/src/index.jsx is the root file, you should start there

-   it defines `Root` component that will be the top component.
-   includes JSS `theme` and provides it to all components with `ThemeProvider`
-   declares Hash Router and root route for it
-   renders the `Root` component in html with `ReactDOM.render(<Root />, document.getElementById('root'));`

## Directory structure

-   **/src** stores everything that's dynamic, so mostly react components
    -   **index.jsx** is the main react component that should import everything else
-   **/static** stores everything that isn't bundled
    -   **index.html** is the basic html template, bundle links are injected into it and it's the file you serve from the dist directory after build
    -   **manifest.json** is the [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
    -   **assets** is a directory for images, icons and fonts
        -   **fonts.css** is loaded in the html template and should contain @font-face directives
-   **/webpack** stores webpack configuration files
    -   **config.js** - base configuration others extend
    -   **dev.js** - development mode configuration
    -   **dist.js** - production build configuration
