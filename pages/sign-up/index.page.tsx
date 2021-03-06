import React from "react";
import { Row, Col } from "antd";
import {
  TextContainer,
  TitleText,
  Container,
  SignUpFormContainer,
} from "./styles";

interface Props {}

const SignUp = ({}: Props) => {
  // Main return
  return (
    <Container>
      <Row style={{ width: "100%" }} gutter={[30, 30]} justify="center">
        <Col span={10}>
          <SignUpFormContainer></SignUpFormContainer>
        </Col>
        <Col span={13}>
          <TextContainer>
            <TitleText>
              TAKE OPPORTUNITY TO CHOICE YOUR BEST COLLEGE
            </TitleText>
          </TextContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
