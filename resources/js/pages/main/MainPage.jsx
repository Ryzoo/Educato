import { Button, Carousel, Col, Grid, Image, Row, Typography } from 'antd';
import { Container } from '../../components/shared/container/Container';
import { Icon } from '../../components/shared/icon/Icon';
import { ServerDataContext } from '../../context';
import React, { useContext, useEffect, useRef, useState } from 'react';
import StringService from '../../services/StringService';
import URLService from '../../services/URLService';
import './MainPage.scss';

export const MainPage = () => {
  const refCarousel = useRef(null);
  const { routes, t } = useContext(ServerDataContext);
  const { Title } = Typography;
  const { useBreakpoint } = Grid;

  const screen = useBreakpoint();
  const next = () => refCarousel.current.next();
  const prev = () => refCarousel.current.prev();
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    if (!screen.lg && screen.md) {
      setSlidesToShow(2);
    } else if (!screen.lg && !screen.md && screen.sm) {
      setSlidesToShow(1);
    }
  }, [screen]);

  return (
    <>
      <Container className="start-section b-white">
        <Row>
          <Col md={12} span={24}>
            <Row
              className={StringService.logicConcat('h-100 direction-column px-10 text-row', {
                'text-center': !screen.md,
                'py-4': !screen.md,
              })}
              justify="center"
            >
              <div className="main-text">
                <span>Edu</span>
                <span>Place</span>
                <span>.</span>
                <span>me</span>
              </div>
              <div className="sub-text">
                <span>Miejsce gdzie wiedza się porządkuje</span>
              </div>
              <Row
                className="pt-3"
                justify={StringService.logicConcat({ end: screen.md, center: !screen.md })}
              >
                <Button className="mr-2">Jakaś akcja</Button>
                <Button type="primary" onClick={() => URLService.goTo(routes.auth.register)}>
                  {t['Join us']}
                </Button>
              </Row>
            </Row>
          </Col>
          <Col
            className={StringService.logicConcat('text-center', { 'd-none': !screen.md })}
            span={12}
          >
            <Image
              preview={false}
              src="../../img/1.svg"
              alt="Header image"
              width={!screen.md ? '50%' : '100%'}
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className="partners-section py-6">
        <Container>
          <Row>
            <Col span={24}>
              <Row align="center">
                <Title level={2}>{t['Already with us:']}</Title>
              </Row>
              <div className="carousel-container">
                <Icon className="carousel-arrow arrow-left" name="fa-angle-left" onClick={prev} />
                <Carousel slidesToShow={slidesToShow} ref={refCarousel} dots={false}>
                  <Image width={250} src="https://via.placeholder.com/250x100" />
                  <Image src="https://via.placeholder.com/250x100" />
                  <Image src="https://via.placeholder.com/250x100" />
                  <Image src="https://via.placeholder.com/250x100" />
                  <Image src="https://via.placeholder.com/250x100" />
                  <Image src="https://via.placeholder.com/250x100" />
                </Carousel>
                <Icon className="carousel-arrow arrow-right" name="fa-angle-right" onClick={next} />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="promo-section py-6 b-white">
        <Row align="middle">
          <Col
            className={StringService.logicConcat('px-10', {
              'text-center': !screen.lg,
              'pt-4': !screen.lg,
            })}
            span={24}
            lg={12}
            order={screen.lg ? 0 : 1}
          >
            <Title level={2}>Edu Place pozwoli Ci</Title>
            <p className={StringService.logicConcat({ 'mx-a': !screen.lg })}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec. Enim
              nulla aliquet porttitor lacus luctus. Odio ut sem nulla pharetra diam. Amet mauris
              commodo quis imperdiet. Nullam eget felis eget nunc lobortis mattis aliquam.
            </p>
            <Button type="primary" className="mr-2">
              Stwórz tablice już teraz
            </Button>
          </Col>
          <Col
            className={StringService.logicConcat('px-10', { 'text-center': !screen.lg })}
            span={24}
            lg={12}
            order={screen.lg ? 1 : 0}
          >
            <Image width="100%" src="https://via.placeholder.com/800x500" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="promo-section-columns py-6">
        <Container>
          <Row>
            <Col span={!screen.lg ? 24 : 8} className="center-flex-x text-center px-4">
              <div className="heading">
                <Icon name="fa-crown" />
                <Title level={2}>Zareklamuj się</Title>
              </div>
              <p className="px-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec.
              </p>
            </Col>
            <Col span={!screen.lg ? 24 : 8} className="center-flex-x text-center px-4">
              <div className="heading">
                <Icon name="fa-crown" />
                <Title level={2}>Uczelnia</Title>
              </div>
              <p className="px-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec.
              </p>
            </Col>
            <Col span={!screen.lg ? 24 : 8} className="center-flex-x text-center px-4">
              <div className="heading">
                <Icon name="fa-crown" />
                <Title level={2}>E-nauczanie</Title>
              </div>
              <p className="px-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="promo-section py-6 b-white">
        <Row align="middle">
          <Col
            span={24}
            lg={12}
            className={StringService.logicConcat('px-10', { 'text-center': !screen.lg })}
          >
            <Image width="100%" src="https://via.placeholder.com/800x500" />
          </Col>
          <Col
            className={StringService.logicConcat('px-10', {
              'text-center': !screen.lg,
              'pt-4': !screen.lg,
            })}
            span={24}
            lg={12}
          >
            <Title level={2}>Edu Place pozwoli Ci</Title>
            <p className={StringService.logicConcat({ 'mx-a': !screen.lg })}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec. Enim
              nulla aliquet porttitor lacus luctus. Odio ut sem nulla pharetra diam. Amet mauris
              commodo quis imperdiet. Nullam eget felis eget nunc lobortis mattis aliquam.
            </p>
            <Button type="primary" className="mr-2">
              Stwórz tablice już teraz
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
