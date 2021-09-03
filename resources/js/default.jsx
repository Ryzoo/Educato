import { ConfigProvider, message } from 'antd';
import { Provider } from 'react-redux';
import { ServerDataContext } from './context';
import { render } from 'react-dom';
import React, { useContext } from 'react';
import buildStore from './store/index';
import dayjs from 'dayjs';
import enLanguageData from 'antd/es/locale/en_US';
import plLanguageData from 'antd/es/locale/pl_PL';
import relativeTime from 'dayjs/plugin/relativeTime';

export default function buildApp(renderLayout) {
  render(
    <Provider store={buildStore(window.serverData)}>
      <ServerDataContext.Provider value={window.serverData}>
        <PageStatusPropagator>
          <LanguagePropagator>{renderLayout}</LanguagePropagator>
        </PageStatusPropagator>
      </ServerDataContext.Provider>
    </Provider>,
    document.getElementById('app')
  );
}

function LanguagePropagator(props) {
  const { language } = useContext(ServerDataContext);
  dayjs.locale(language);
  dayjs.extend(relativeTime);

  const getLanguageDate = () => {
    switch (language) {
      case 'pl':
        return plLanguageData;
      case 'en':
        return enLanguageData;
      default:
        return enLanguageData;
    }
  };

  return <ConfigProvider locale={getLanguageDate()}>{props.children}</ConfigProvider>;
}

function PageStatusPropagator(props) {
  const { success, error } = useContext(ServerDataContext);

  setTimeout(() => {
    if (success && success.length) message.success(success);
    if (error && error.length) message.error(error);
  }, 100);

  return props.children;
}
