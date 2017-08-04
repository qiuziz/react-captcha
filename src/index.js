/*
 * @Author: qiuziz
 * @Date: 2017-08-03 16:37:13
 * @Last Modified by: qiuziz
 * @Last Modified time: 2017-08-04 11:20:57
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Captcha from './components/captcha';

ReactDOM.render(
  <Captcha length={4}/>,
  document.getElementById('app')
);