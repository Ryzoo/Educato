import React from 'react';
import StringService from '../../../services/StringService';
import './Icon.scss';

export const Icon = (props) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <span
    className={StringService.logicConcat({ interactive: props.onClick }, props.className)}
    onClick={props.onClick}
  >
    <i className={`fas ${props.name}`} />
  </span>
);
