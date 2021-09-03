import { Button } from 'antd';
import FormItem from '../FormItem';
import React from 'react';

export default function SubmitFormInput(props) {
  return (
    <FormItem rules={props.rules}>
      <div className="text-right mt-3">
        <Button size="large" type={props.type || 'primary'} htmlType="submit">
          {props.label}
        </Button>
        <br />
        {props.children}
      </div>
    </FormItem>
  );
}
