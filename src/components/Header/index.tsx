import Image from 'next/image'

import { HeaderWrapper, LangWrapper, Nav, NavItem } from './styled'
import Logo from '/public/assets/images/logo/logo.svg'
import World from '/public/assets/images/icons/world.svg'
import Down from '/public/assets/images/icons/down.svg'
import goToTagById from '@/helpers/goToTagById'

const Header = () => {
  return (
    <HeaderWrapper
      className="leftPd"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image src={Logo} alt="logo" style={{ marginRight: '6.625rem' }} />
      <Nav>
        <NavItem onClick={goToTagById('main')}>Main</NavItem>
        <NavItem onClick={goToTagById('platform')}>PLATFORM</NavItem>
        <NavItem onClick={goToTagById('eco')}>ECOSYSTEM</NavItem>
        <NavItem onClick={goToTagById('features')}>FEATURES</NavItem>
        <NavItem onClick={goToTagById('road')}>ROADMAP</NavItem>
        <NavItem onClick={goToTagById('partners')}>PARTNERS</NavItem>
      </Nav>
      <LangWrapper>
        <Image src={World} alt="" />
        <p>EN</p>
        <Image src={Down} alt="" />
      </LangWrapper>
    </HeaderWrapper>
  )
}

export default Header
