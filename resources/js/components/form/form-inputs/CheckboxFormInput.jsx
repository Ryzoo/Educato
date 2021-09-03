import { Checkbox } from 'antd';
import FormItem from '../FormItem';
import React from 'react';

export default function CheckboxFormInput(props) {
  return (
    <FormItem name={props.name} valuePropName="checked" label={props.label} rules={props.rules}>
      <Checkbox size="large">{props.children}</Checkbox>
    </FormItem>
  );
}
