import { Container } from '../../../../components/shared/container/Container';
import { ServerDataContext } from '../../../../context';
import { URLMethod } from '../../../../services/URLService';
import Form from '../../../../components/form/Form';
import FormService from '../../../../services/FormService';
import React, { useContext } from 'react';
import SubmitFormInput from '../../../../components/form/form-inputs/SubmitFormInput';
import TextFormInput from '../../../../components/form/form-inputs/TextFormInput';

export default function PasswordChangePage() {
  const { routes, t } = useContext(ServerDataContext);

  return (
    <Container className="my-10">
      <Form
        title={t['Change password']}
        action={routes.action.changePassword}
        method={URLMethod.PUT}
        initialValues={{
          old_password: FormService.getOldValue('old_password'),
          new_password: FormService.getOldValue('new_password'),
          new_password_confirmation: FormService.getOldValue('new_password_confirmation'),
        }}
      >
        <TextFormInput
          name="old_password"
          label={t['Current password']}
          prefix={<i className="fas fa-unlock-alt" />}
          type="password"
        />
        <TextFormInput
          name="new_password"
          label={t['New password']}
          prefix={<i className="fas fa-unlock-alt" />}
          type="password"
        />
        <TextFormInput
          name="new_password_confirmation"
          label={t['Confirm new password']}
          prefix={<i className="fas fa-unlock-alt" />}
          type="password"
        />
        <SubmitFormInput label={t['Change password']}>
          <a href={routes.user.settings.data} className="flex-align-right mt-2">
            {t['Change my profile data']}
          </a>
          <a href={routes.user.settings.gdpr} className="flex-align-right mt-2">
            {t['Go to GDPR options']}
          </a>
        </SubmitFormInput>
      </Form>
    </Container>
  );
}
