import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createRoutes } from '../common/routes'

const mountDOM = document.createElement('div');
mountDOM.id = 'mount';
document.body.appendChild(mountDOM);

function bootstrap() {
    ReactDOM.render(<div></div>, mountDOM);
}

bootstrap();