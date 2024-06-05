import styled from "styled-components";

export const Container = styled.span`
  font-size: .75rem;
  padding: .3125rem .875rem;
  border-radius: .3125rem;
  margin-right: 0.375rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
`;
