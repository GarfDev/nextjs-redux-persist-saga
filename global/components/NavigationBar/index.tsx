import React from "react";
import { Row, Col } from "antd";
// Import resources
import { TextLogo, Container } from "./styles";

const NavigationBar: React.FC = () => {
  // Main return
  return (
    <Container>
      <Row style={{ height: "100%" }} justify="center" align="middle">
        <Col span={20}>
          <Row align="middle" gutter={[4, 0]}>
            <Col span={6}>
              <TextLogo>college</TextLogo>
            </Col>
            <Col span={12} />
            <Col span={6} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default NavigationBar;
