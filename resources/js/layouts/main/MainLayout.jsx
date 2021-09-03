import { Button, Drawer, Layout, Menu } from 'antd';
import { ServerDataContext } from '../../context';
import Logo from '../../components/layouts/logo/Logo';
import React, { useContext, useState } from 'react';
import URLService from '../../services/URLService';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

export default function MainLayout(props) {
  const [drawerVisibility, setDrawerVisibility] = useState(false);
  const { routes, language, t, auth } = useContext(ServerDataContext);

  const getNavigationLink = () => [
    { label: 'Educato', url: routes.main },
    { label: t['For Education'], url: 'edu' },
    { label: t['For Company'], url: 'com' },
    { label: t['Search'], url: routes.search, onlyLogged: true },
  ];
  const getMenuList = (inDrawer) => {
    return (
      <>
        {!auth.isLogged ? (
          <div className={inDrawer ? 'center-flex-a mb-1' : 'float-right mx-5 show-lg'}>
            <Button onClick={() => URLService.goTo(routes.auth.login)}>{t['Login']}</Button>
            <Button type="primary" onClick={() => URLService.goTo(routes.auth.register)}>
              {t['Join us']}
            </Button>
          </div>
        ) : (
          <div className={inDrawer ? 'center-flex-a mb-1' : 'float-right mx-5 show-lg'}>
            <span className={inDrawer ? '' : 'text-light'}>{auth.user.name}</span>
            <Button className="ml-2" onClick={() => URLService.goTo(routes.auth.logout)}>
              {t['Logout']}
            </Button>
          </div>
        )}
        <Menu
          theme={inDrawer ? 'light' : 'dark'}
          mode={inDrawer ? 'inline' : 'horizontal'}
          className={inDrawer ? '' : 'float-right show-lg'}
          defaultSelectedKeys={[routes.current]}
        >
          {getNavigationLink().map((nav) => {
            if (nav.onlyLogged && !auth.isLogged) {
              return null;
            }

            return (
              <Menu.Item
                key={nav.url}
                onClick={() => {
                  URLService.goTo(nav.url);
                }}
              >
                {nav.label}
              </Menu.Item>
            );
          })}
        </Menu>
      </>
    );
  };

  return (
    <Layout className="main-layout">
      <Drawer
        width={300}
        title="Educato.me"
        placement="left"
        visible={drawerVisibility}
        onClose={() => {
          setDrawerVisibility(false);
        }}
      >
        {getMenuList(true)}
      </Drawer>
      <Header>
        <Button
          type="primary"
          className="float-left hide-lg"
          style={{ marginTop: '17px' }}
          onClick={() => {
            setDrawerVisibility(true);
          }}
        >
          <i className="fas fa-bars" />
        </Button>
        <Logo />
        <Menu theme="dark" mode="horizontal" className="float-right">
          <SubMenu key="language" title={language.toUpperCase()}>
            <Menu.Item key="language:pl" onClick={() => URLService.goTo(routes.language.pl)}>
              PL
            </Menu.Item>
            <Menu.Item key="language:en" onClick={() => URLService.goTo(routes.language.en)}>
              EN
            </Menu.Item>
          </SubMenu>
        </Menu>
        {getMenuList(false)}
      </Header>
      <Content>{props.children}</Content>
      <Footer className="text-center">{`Educato ©2020 ${t['Created by Educated team']}`}</Footer>
    </Layout>
  );
}
