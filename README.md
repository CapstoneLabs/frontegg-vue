
<p align="center">
  <a href="https://www.frontegg.com/" rel="noopener" target="_blank">
    <img style="margin-top:40px" height="50" src="https://frontegg.com/wp-content/uploads/2020/04/logo_frrontegg.svg" alt="Frontegg logo">
  </a>
</p>
<h1 align="center">Frontegg-React</h1>
<div align="center">

[React](https://reactjs.org/) pre-built Component for faster and simpler integration with Frontegg services.
</div>

## Installation
Frontegg-React is available as an [npm package](https://www.npmjs.com/package/@frontegg/react-core).

<font color='red'>**NOTE!**:</font> **For typescript project make sure your are using typescirpt with version > 3.9.0**

using **NPX**:
```
/* Run Frontegg React installer */

npx @frontegg/react-cli init

```

## Manual Installation

using **YARN**:
```
/* install frontegg-core */
yarn add @frontegg/react-core

yarn add @frontegg/react-{plugin-name}

```
using **NPM**:
```
/* install frontegg-core */
npm install --save @frontegg/react-core

npm install --save @frontegg/react-{plugin-name}
```


## Usage

After running `frontegg init` script, you will find a generated `withFrontegg` file
in your src directory.


```jsx
/* index.ts|js file */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* this file generated by frontegg init script */
import { withFrontegg } from './withFrontegg';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';

const FronteggWrapper = withFrontegg(App);

ReactDOM.render(
<React.StrictMode>
  <FronteggWrapper/>
</React.StrictMode>, document.querySelector('#app'));
```
``context`` property is used:

- Communication Settings
- Theme customization
- Component Configurations


## Plugins
**Frontegg-React** provide components per plugins for faster and simpler integration

- [Authentication and Team Management Plugin](packages/auth)
- [Audits Plugin](packages/audits)
- [Connectivity Plugin](packages/connectivity)
- Notifications Plugin (coming-soon)
- Reports Plugin (coming-soon)


## Contributing

The main purpose of this repository is to continue developing Frontegg React to making it faster and easier to use.
Read our [contributing guide](/CONTRIBUTING.md) to learn about our development process.

**Notice** that contributions go far beyond pull requests and commits.

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
