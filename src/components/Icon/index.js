import React from 'react';
import './icon.less';
import './iconfont.js';

const Icon = ({ type, width = 14, height, className = '' }) => (
  <svg className={'icon ' + className} style={{ width, height: height || width }}>
    <use xlinkHref={`#icon-${type}`} />
  </svg>
);

export default Icon;
