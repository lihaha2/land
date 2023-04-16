import { motion } from 'framer-motion'
import styled from '@/styles/styled-components'

const HeaderWrapper = styled(motion.header)`
  width: 100%;
  max-width: 92.5rem;
  display: flex;
  align-items: center;
  margin: 2rem 0;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-right: 14.5938rem;
`

const LangWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.1875rem;
`

const NavItem = styled.button`
  cursor: pointer;
  padding: 0.5rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4375rem;
  text-transform: uppercase;
  width: 100%;
  padding: 0.5rem 0.625rem 0.375rem 0.625rem;
  background: ${(props) => props.theme.colors.mainBackground};
  position: relative;
  transition: 0.2s color ease-out;
  text-decoration: none;
  color: ${(props) => props.theme.colors.textGray};
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  &::after {
    content: '';
    height: 0.125rem;
    position: absolute;
    bottom: -0.125rem;
    left: 0;
    width: 0%;
    background: ${(props) => props.theme.colors.DX_Gradient};
    transition: 0.2s width ease-out;
  }
  &:hover::after {
    width: 100%;
  }
`

export { HeaderWrapper, Nav, NavItem, LangWrapper }
