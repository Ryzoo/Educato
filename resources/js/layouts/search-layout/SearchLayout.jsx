import { Badge, Button, Drawer, Layout, Menu } from 'antd';
import { EmailNotVerifiedBanner } from '../../components/layouts/EmailNotVerifiedBanner';
import { ServerDataContext } from '../../context';
import { authUser } from '../../store/features/user/user';
import { useSelector } from 'react-redux';
import Logo from '../../components/layouts/logo/Logo';
import React, { useContext, useState } from 'react';
import URLService from '../../services/URLService';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

export default function SearchLayout(props) {
  const [drawerVisibility, setDrawerVisibility] = useState(false);
  const { routes, language, t } = useContext(ServerDataContext);
  const user = useSelector(authUser);

  const getNavigationLink = () => [{ label: t['Search'], url: routes.search }];

  const getUserMenu = () => (
    <SubMenu
      icon={<i className="far fa-user mr-2" />}
      title={
        <Badge count={user.notifications.count}>
          <span className="pr-3">{user.name}</span>
        </Badge>
      }
    >
      <Menu.Item
        key={routes.user.notifications}
        onClick={() => URLService.goTo(routes.user.notifications)}
      >
        <Badge count={user.notifications.count}>
          <span className="pr-3">{t['Notifications']}</span>
        </Badge>
      </Menu.Item>
      <SubMenu title={t['Settings']}>
        <Menu.Item
          key={routes.user.settings.data}
          onClick={() => URLService.goTo(routes.user.settings.data)}
        >
          {t['User data']}
        </Menu.Item>
        <Menu.Item
          key={routes.user.settings.password}
          onClick={() => URLService.goTo(routes.user.settings.password)}
        >
          {t['Change password']}
        </Menu.Item>
        <Menu.Item
          key={routes.user.settings.gdpr}
          onClick={() => URLService.goTo(routes.user.settings.gdpr)}
        >
          {t['RODO']}
        </Menu.Item>
      </SubMenu>
      <Menu.Item onClick={() => URLService.goTo(routes.auth.logout)}>{t['Logout']}</Menu.Item>
    </SubMenu>
  );

  const getMenuList = (inDrawer) => {
    return (
      <>
        <div className={inDrawer ? 'center-flex-a mb-1' : 'float-right mx-5 show-lg'}>
          <span className={inDrawer ? '' : 'text-light'} />
        </div>
        <Menu
          theme={inDrawer ? 'light' : 'dark'}
          mode={inDrawer ? 'inline' : 'horizontal'}
          className={inDrawer ? '' : 'float-right show-lg'}
          defaultSelectedKeys={[routes.current]}
        >
          {getNavigationLink().map((nav) => (
            <Menu.Item
              key={nav.url}
              onClick={() => {
                URLService.goTo(nav.url);
              }}
            >
              {nav.label}
            </Menu.Item>
          ))}
          {getUserMenu()}
        </Menu>
      </>
    );
  };

  return (
    <>
      <EmailNotVerifiedBanner onlyInfo />
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
    </>
  );
}
