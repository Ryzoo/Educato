import { Input } from 'antd';
import FormItem from '../FormItem';
import React from 'react';

export default function TextFormItem(props) {
  return (
    <FormItem hidden={props.hidden} name={props.name} label={props.label} rules={props.rules}>
      <Input
        type={props.type || 'text'}
        size="large"
        prefix={props.prefix}
        placeholder={props.label}
      />
    </FormItem>
  );
}
