import React from 'react';
import ReactDOM from 'react-dom';

import 'ant-design-pro/dist/ant-design-pro.css';
import 'ant-design-icons/dist/anticons.min.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
