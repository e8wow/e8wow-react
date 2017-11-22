import React from 'react';
import ReactDOM from 'react-dom';
import './assets/js/flexible.js'
import './assets/styles/flexible.less'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import FastClick from 'fastclick';
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
