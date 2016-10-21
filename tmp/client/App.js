"use strict";
const React = require('react');
const ReactDOM = require('react-dom');
const mountDOM = document.createElement('div');
mountDOM.id = 'mount';
document.body.appendChild(mountDOM);
function bootstrap() {
    ReactDOM.render(React.createElement("div", null), mountDOM);
}
bootstrap();
