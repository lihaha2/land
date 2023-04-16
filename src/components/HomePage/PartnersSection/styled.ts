import styled from '@/styles/styled-components'

const PartnersWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;
  padding-top: 14.875rem;
  margin-bottom: 6.0625rem;

  & h2 {
    font-weight: 700;
    font-size: 56px;
    line-height: 113.5%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.Main_Blue};
  }

  & div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    z-index: 4;
  }
`

export { PartnersWrapper }
