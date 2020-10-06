import styled from "styled-components";

export const TitleText = styled.div`
  line-height: 1;
  font-size: 5rem;
  font-weight: bolder;
`;

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColor};
  align-items: center;
  min-height: 100vh;
`;

export const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 600px;
`;
