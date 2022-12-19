import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';

import manage from '../../assets/manage.png';
import manage2 from '../../assets/manage2.png';

function ManageYourLife() {
  return (
    <div
      style={{
        background: 'black',
      }}>
      <div
        style={{
          // background: 'white',
          backgroundImage: `url(${manage})`,
        }}>
        <div className='background'>
          {' '}
          {/* <img src={home2} alt='home2' /> */}
        </div>
        <div className='content'>
          <Row>
            <Col span={10} align={'middle'}>
              <img
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                  height: '400px',
                  marginTop: '100px',
                }}
                src={manage2}
                alt='manage2 '
              />
            </Col>
            <Col
              span={14}
              style={{
                marginTop: '100px',
              }}>
              <Typography.Title
                level={1}
                style={{
                  color: 'white',
                }}>
                Manage Your Platform
              </Typography.Title>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ManageYourLife;
