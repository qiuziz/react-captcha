/*
 * @Author: qiuziz
 * @Date: 2017-08-03 17:44:46
 * @Last Modified by: qiuziz
 * @Last Modified time: 2017-08-04 13:54:08
 */

import './index.scss';
import React from 'react';
import { propTypes, defaultProps } from 'prop-types';
import { OPTIONS, CODES } from './config';

export default
class Captcha extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       result: [],
       style: {
         height: props.height + 'px', 
         width: props.width + 'px'
        }
      };
  }

  componentDidMount() {
    this.createCodes();
  }
          
  random(n, m) {
    const c = (m - n) + 1;
    const num = (Math.random() * c) + n;
    return Math.floor(num);
  }

  createCodes() {
    const { length, codes } = this.props;
    let result = [];
    for(let i = 0; i < length; i++) {
      result.push({code: codes[this.random(0, codes.length - 1)], style: this.codeStyle(i)});
    }

    this.setState({ result });
  }

  codeStyle(i) {
  
    const uW = this.props.width / this.props.length;        // 每个字符占的宽度

    return {
      'fontSize': `${this.random(OPTIONS.fontSizeMin, OPTIONS.fontSizeMax)}px`,
      'color': `${OPTIONS.colors[this.random(0, OPTIONS.colors.length - 1)]}`,
      'position': 'absolute',
      'left': `${this.random(uW * i, ((uW * i) + uW) - (uW / 2))}px`,
      'top': '50%',
      'transform': `rotate(${this.random(-15, 15)}deg) translateY(-50%)`,
      'OTransform': `rotate(${this.random(-15, 15)}deg) translateY(-50%)`,
      'MsTransform': `rotate(${this.random(-15, 15)}deg) translateY(-50%)`,
      'MozTransform': `rotate(${this.random(-15, 15)}deg) translateY(-50%)`,
      'WebkitTransform': `rotate(${this.random(-15, 15)}deg) translateY(-50%)`,
      'fontFamily': `${OPTIONS.fonts[this.random(0, OPTIONS.fonts.length - 1)]}`,
      'fontWeight': 'bold',
      'zIndex': '2'
    }
  }
  
  createLines() {
    return {
        'position': 'absolute',
        'opacity': `${this.random(3, 8) / 10}`,
        'width': `${this.random(OPTIONS.lineWidthMin, OPTIONS.lineWidthMax)}px`,
        'height': `${this.random(OPTIONS.lineHeightMin, OPTIONS.lineHeightMax)}px`,
        'background': `${OPTIONS.lineColors[this.random(0, OPTIONS.lineColors.length - 1)]}`,
        'left': `${this.random(-OPTIONS.lineWidthMin/2, this.props.width)}px`,
        'top': `${this.random(0, this.props.height)}px`,
        'transform': `rotate(${this.random(-30, 30)}deg)`,
        'OTransform': `rotate(${this.random(-30, 30)}deg)`,
        'MsTransform': `rotate(${this.random(-30, 30)}deg)`,
        'MozTransform': `rotate(${this.random(-30, 30)}deg)`,
        'WebkitTransform': `rotate(${this.random(-30, 30)}deg)`,
        'fontFamily': `${OPTIONS.fonts[this.random(0, OPTIONS.fonts.length - 1)]}`,
        'fontWeight': `${this.random(400, 900)}`
    }
  }


	render() {
    const { result } = this.state;
    const lines = new Array(OPTIONS.lines).join(0).split('');
    const style = Object.assign({}, this.state.style, this.props.style);
		return (
			<div style={style} onClick={() => this.createCodes()}>
        {
          result.map((item, index) => {
            return  <span key={index} style={item.style}>{item.code}</span>
          })
        }
        { 
          lines.map((item, index) => {
            return  <div key={index} style={this.createLines()} />
          })
        }
      </div>
		);
	}
}

	Captcha.propTypes = {
		height: React.PropTypes.string,
		width: React.PropTypes.string,
		style: React.PropTypes.object,
		length: React.PropTypes.number,
    onClick: React.PropTypes.func,
    codes: React.PropTypes.array
	};

	Captcha.defaultProps = {
    height: '40',
		width: '150',
    style: {
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#fff',
      cursor: 'pointer',
      verticalAlign: 'middle',
      userSelect: 'none'
    },
    length: 4,
    onClick: () => {},
    codes: CODES
  };
