import React, { Component } from 'react';
import {Row, Col} from 'antd';
import Index from '../layouts/Index';

class Detail extends Component {
  render() {
    return (
      <Index>
        <Row>
          <Col span={4}></Col>
          <Col span={18}>Detail</Col>
          <Col span={4}></Col>
        </Row>
      </Index>
    );
  }
}

export default Detail;
