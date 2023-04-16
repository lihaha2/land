import styled from '@/styles/styled-components'

const FooterWrapper = styled.footer`
  margin-top: 5.9375rem;
  display: flex;
  flex-direction: column;
  gap: 3.4331rem;
  width: 100%;
  border-top: 0.125rem solid rgba(255, 255, 255, 0.05);
  padding: 5.125rem 13.75rem 4.75rem 13.75rem;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1.25rem;
    width: 100%;
  }

  & p {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.3333rem;
    line-height: 2rem;
    font-feature-settings: 'salt' on, 'liga' off;
    color: ${(props) => props.theme.colors.textGray};
  }

  .links {
    display: flex;
    gap: 4rem;
  }

  .link {
    font-weight: 400;
    font-size: 22px;
    line-height: 32px;
    font-feature-settings: 'salt' on, 'liga' off;
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }

  .inactive {
    color: ${(props) => props.theme.colors.textGray};
    cursor: default;
    pointer-events: none;
  }

  .socials {
    display: flex;
    gap: 1rem;
  }
`

export { FooterWrapper }
