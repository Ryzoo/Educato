import { Button, Card, Popconfirm } from 'antd';
import { Container } from '../../../../components/shared/container/Container';
import { ServerDataContext } from '../../../../context';
import React, { useContext } from 'react';
import URLService, { URLMethod } from '../../../../services/URLService';

export default function GDPRPage() {
  const { routes, t } = useContext(ServerDataContext);

  const handleConfirmDeleteAccount = () => {
    URLService.goTo(routes.action.deleteUser, URLMethod.DELETE);
  };

  return (
    <Container className="my-10">
      <Card title={t['Rodo options']} className="mx-a w-100 w-max-md">
        <Popconfirm
          onConfirm={handleConfirmDeleteAccount}
          title={t['Are you sure?']}
          okText={'Delete'}
          cancelText={'Cancel'}
        >
          <Button size="large" type="primary">
            {t['Delete my account']}
          </Button>
        </Popconfirm>
      </Card>
    </Container>
  );
}
