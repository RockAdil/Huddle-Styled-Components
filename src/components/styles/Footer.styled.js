import { styled } from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 40px;

  img {
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;

    li {
      margin-bottom: 20px;
      cursor: pointer;

      @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1rem;
      }
    }
  }

  p {
    text-align: right;
    padding-top: 20px;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    padding-bottom: 20px;

    ul {
      padding: 0;
    }

    p {
      text-align: center;
    }
  }
`;
