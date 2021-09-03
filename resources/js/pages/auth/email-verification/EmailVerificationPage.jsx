import { Button, Result } from 'antd';
import { Container } from '../../../components/shared/container/Container';
import { ServerDataContext } from '../../../context';
import React, { useContext } from 'react';
import URLService from '../../../services/URLService';

export default function EmailVerificationPage() {
  const { routes, t } = useContext(ServerDataContext);

  const handleButtonClick = () => {
    URLService.goTo(routes.main);
  };

  return (
    <Container>
      <Result
        status="403"
        title="403"
        subTitle={
          t['Your email are not verified. Please use button in email that was sent to you.']
        }
        extra={
          <Button onClick={handleButtonClick} size="large" type="primary">
            {t['Back to main page.']}
          </Button>
        }
      />
    </Container>
  );
}
