/*
 * @Author: qiuziz
 * @Date: 2017-08-03 16:37:13
 * @Last Modified by: qiuziz
 * @Last Modified time: 2017-08-07 11:06:20
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Captcha from './components/captcha';

ReactDOM.render(
  <Captcha length={4} onChange={function(code) {console.log(code)}}/>,
  document.getElementById('app')
);