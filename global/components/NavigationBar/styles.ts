import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  position: fixed;
  background-color: ${({ theme }) => theme.backgroundColor};
  justify-content: flex-start;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  align-items: center;
  width: 100%;
  height: 70px;
`;

export const TextLogo = styled.span`
  font-size: 30px;
  font-weight: bolder;
`;
