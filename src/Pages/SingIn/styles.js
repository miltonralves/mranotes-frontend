import styled from "styled-components";
import backgroundImg from "../../assets/background_singin.png";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 1.5rem;
    margin: 48px 0;
  }

  > p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 4rem;
    gap: 1rem;
    h1 {      
      font-size: 2rem;      
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
   display: none;
  }
`;
