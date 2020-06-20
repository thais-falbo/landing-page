import styled from "styled-components";

export const StyledFooter = styled.footer`
  & > p {
    color: ${({ theme }) => theme.colors.mediumGray};
  }

  margin-top: 1rem;
  padding: 0rem 0 4rem 0;

  border-top: 1px solid ${({ theme }) => theme.colors.lightGray2};
`;
