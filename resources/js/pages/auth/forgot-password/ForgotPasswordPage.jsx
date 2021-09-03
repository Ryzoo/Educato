import { ServerDataContext } from '../../../context';
import { URLMethod } from '../../../services/URLService';
import Form from '../../../components/form/Form';
import FormService from '../../../services/FormService';
import React, { useContext } from 'react';
import SubmitFormInput from '../../../components/form/form-inputs/SubmitFormInput';
import TextFormInput from '../../../components/form/form-inputs/TextFormInput';

export const ForgotPasswordPage = () => {
  const { routes, t } = useContext(ServerDataContext);

  return (
    <Form
      title={t['Reset your password']}
      action={routes.auth.forgotPassword}
      method={URLMethod.POST}
      initialValues={{
        email: FormService.getOldValue('email'),
      }}
    >
      <TextFormInput
        name="email"
        label={t['Email']}
        prefix={<i className="far fa-envelope-open" />}
      />
      <SubmitFormInput label={t['Reset password']}>
        <a href={routes.auth.login} className="flex-align-right mt-2">
          {t['I already have account']}
        </a>
        <a href={routes.auth.register} className="flex-align-right mt-2">
          {t['I dont have account yet.']}
        </a>
      </SubmitFormInput>
    </Form>
  );
};
