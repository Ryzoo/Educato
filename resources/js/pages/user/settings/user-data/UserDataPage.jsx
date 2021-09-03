import { Container } from '../../../../components/shared/container/Container';
import { EmailNotVerifiedBanner } from '../../../../components/layouts/EmailNotVerifiedBanner';
import { ServerDataContext } from '../../../../context';
import { URLMethod } from '../../../../services/URLService';
import { authUser } from '../../../../store/features/user/user';
import { useSelector } from 'react-redux';
import Form from '../../../../components/form/Form';
import FormService from '../../../../services/FormService';
import React, { useContext } from 'react';
import SubmitFormInput from '../../../../components/form/form-inputs/SubmitFormInput';
import TextFormInput from '../../../../components/form/form-inputs/TextFormInput';

export default function UserDataPage() {
  const user = useSelector(authUser);
  const { routes, t } = useContext(ServerDataContext);

  return (
    <Container className="my-10">
      <Form
        title={t['Change profile data']}
        action={routes.action.dataChange}
        method={URLMethod.PUT}
        initialValues={{
          name: FormService.getOldValue('name') || user.name,
          email: FormService.getOldValue('email') || user.email,
        }}
      >
        <TextFormInput name="name" label={t['Name']} prefix={<i className="far fa-user" />} />
        <TextFormInput
          name="email"
          label={t['Email']}
          prefix={<i className="far fa-envelope-open" />}
        />
        <EmailNotVerifiedBanner onlyInformation />
        <SubmitFormInput label={t['Save changes']}>
          <a href={routes.user.settings.password} className="flex-align-right mt-2">
            {t['Change my password']}
          </a>
          <a href={routes.user.settings.gdpr} className="flex-align-right mt-2">
            {t['Go to GDPR options']}
          </a>
        </SubmitFormInput>
      </Form>
    </Container>
  );
}
