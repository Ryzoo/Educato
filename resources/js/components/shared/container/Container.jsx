import React from 'react';
import StringService from '../../../services/StringService';
import './Container.scss';

export const Container = (props) => (
  <div className={StringService.logicConcat({ container: !props.fluid }, props.className)}>
    {props.children}
  </div>
);
