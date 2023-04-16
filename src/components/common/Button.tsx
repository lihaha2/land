import styled from '@/styles/styled-components'

const PrimaryButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.Main_Blue};
  font-family: 'Chakra Petch';

  transition-duration: 0.15s;
  transition-property: background-color, filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgb(145 213 251);
    filter: drop-shadow(0 0 12px #91d5fb);
  }
`

export { PrimaryButton }
