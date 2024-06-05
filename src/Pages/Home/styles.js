import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;

    grid-template-areas:
      "header"
      "search"
      "content"
      "content";
  }
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-area: none;
    display: none;
  }
`;
export const Menu = styled.ul`
  grid-area: menu;

  padding-top: 4rem;
  text-align: center;

  > li {
    margin-bottom: 1.5rem;
  }

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-area: none;
    display: none;
  }
`;

export const Search = styled.div`
  grid-area: search;
  padding: 4rem 4rem 0;
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 4rem;
  overflow-y: auto;
  
`;

export const NewNote = styled(Link)`
  grid-area: newnote;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: .5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-area: none;
    display: none;
  }
`;
