import { Link } from "react-router-dom";
import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
  grid: header;
  height: 6.5625rem;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 5rem;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    line-height: 1.5rem;

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-size: 0.75rem;
      }
    }

    strong {
      font-size: 1.125rem;
      color: ${({ theme }) => theme.COLORS.WHITE};

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-size: 0.8rem;
      }
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: scroll;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 2.25rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 2rem;
    }
  }
`;

export const Menu = styled.button`
  background-color: transparent;
  border: none;
  display: none;

  > svg {
    font-size: 2.25rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }
`;
