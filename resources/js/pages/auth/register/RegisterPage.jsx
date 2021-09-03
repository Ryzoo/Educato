import { ServerDataContext } from '../../../context';
import { URLMethod } from '../../../services/URLService';
import CheckboxFormInput from '../../../components/form/form-inputs/CheckboxFormInput';
import Form from '../../../components/form/Form';
import FormService, { OldValueType } from '../../../services/FormService';
import React, { useContext } from 'react';
import SubmitFormInput from '../../../components/form/form-inputs/SubmitFormInput';
import TextFormInput from '../../../components/form/form-inputs/TextFormInput';

export default function RegisterPage() {
  const { routes, t } = useContext(ServerDataContext);

  return (
    <Form
      title={t['Create new account']}
      action={routes.action.register}
      method={URLMethod.POST}
      initialValues={{
        name: FormService.getOldValue('name'),
        email: FormService.getOldValue('email'),
        password: FormService.getOldValue('password'),
        password_confirmation: FormService.getOldValue('password_confirmation'),
        regulation_accept: FormService.getOldValue('regulation_accept', OldValueType.BOOL),
        rodo_accept: FormService.getOldValue('rodo_accept', OldValueType.BOOL),
      }}
    >
      <TextFormInput name="name" label={t['Name']} prefix={<i className="far fa-user" />} />
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
      <CheckboxFormInput name="regulation_accept">
        {t['I accept the']} <a href="">{t['Agreement']}</a>
      </CheckboxFormInput>

      <CheckboxFormInput name="rodo_accept">
        {t['I accept the']} <a href="">{t['RODO']}</a>
      </CheckboxFormInput>
      <SubmitFormInput label={t['Create new account']}>
        <a href={routes.auth.login} className="flex-align-right mt-2">
          {t['I already have account']}
        </a>
      </SubmitFormInput>
    </Form>
  );
}
