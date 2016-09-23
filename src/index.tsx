import * as React from 'react';
import * as ReactDom from 'react-dom';

import Hello from './component/Hello';

import "./style.less";

ReactDom.render(<Hello name="看起来不错"/>, document.getElementById('root'));