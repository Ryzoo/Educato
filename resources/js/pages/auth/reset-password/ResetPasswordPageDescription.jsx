import { ServerDataContext } from '../../../context';
import { Space, Typography } from 'antd';
import React, { useContext } from 'react';

const { Text, Title } = Typography;

export default function ResetPasswordPageDescription() {
  const { t } = useContext(ServerDataContext);

  return (
    <Space direction="vertical">
      <Title>{t['What does having an account in our platform give?']}</Title>
      <Text>
        {t['Very much so, but you will learn about it only after you create your account.']}
      </Text>
    </Space>
  );
}
