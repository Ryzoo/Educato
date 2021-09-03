import { ServerDataContext } from '../../../context';
import { URLMethod } from '../../../services/URLService';
import Form from '../../../components/form/Form';
import FormService from '../../../services/FormService';
import React, { useContext } from 'react';
import SubmitFormInput from '../../../components/form/form-inputs/SubmitFormInput';
import TextFormInput from '../../../components/form/form-inputs/TextFormInput';

export const ResetPasswordPage = () => {
  const { routes, t, additional } = useContext(ServerDataContext);

  return (
    <Form
      title={t['Change your password']}
      action={routes.auth.passwordUpdate}
      method={URLMethod.POST}
      initialValues={{
        token: additional.resetToken,
        email: FormService.getOldValue('email'),
        password: FormService.getOldValue('password'),
        password_confirmation: FormService.getOldValue('password_confirmation'),
      }}
    >
      <TextFormInput hidden name="token" label={t['Token']} />
      <TextFormInput
        name="email"
        label={t['Email']}
        prefix={<i className="far fa-envelope-open" />}
      />
      <TextFormInput
        name="password"
        label={t['Password']}
        prefix={<i className="fas fa-unlock-alt" />}
        type="password"
      />
      <TextFormInput
        name="password_confirmation"
        label={t['Confirm password']}
        prefix={<i className="fas fa-unlock-alt" />}
        type="password"
      />
      <SubmitFormInput label={t['Change password']} />
    </Form>
  );
};
