import { Card, Form as FormAntd, Spin } from 'antd';
import FormService from '../../services/FormService';
import React, { useState } from 'react';

export default function Form(props) {
  const [isLoading, setLoading] = useState(false);

  return (
    <Card title={props.title} className="mx-a w-100" style={{ maxWidth: props.width || 450 }}>
      {isLoading ? (
        <Spin className="d-block" />
      ) : (
        <FormAntd
          initialValues={props.initialValues || {}}
          layout={props.layout || 'vertical'}
          onFinish={(data) => {
            FormService.submit(props.action, props.method, data);
            setLoading(true);
          }}
        >
          {props.children}
        </FormAntd>
      )}
    </Card>
  );
}
