import styled from '@/styles/styled-components'
import { motion } from 'framer-motion'
import { PrimaryButton } from '../../common/Button'

const TitleWrapper = styled.section`
  width: 100%;
  display: flex;
  gap: 4.6875rem;
  align-items: center;
  margin-top: 3rem;
`

const Heading = styled.h1`
  font-family: 'Chakra Petch';
  font-style: normal;
  font-weight: 700;
  font-size: 5rem;
  line-height: 100%;
  text-transform: uppercase;
`

const ContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2.8125rem;
`

const Paragraph = styled.p`
  font-family: 'Chakra Petch';
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 120%;
  color: #eaeaea;
`

const Button = styled(PrimaryButton)`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 120%;
  padding: 1.0625rem 2.125rem;
  border-radius: 0.625rem;
  max-width: 14rem;
`

const MonitorWrapper = styled.div`
  transform: translateY(50px);
  user-select: none;
  position: relative;
  overflow: hidden;
`

const MonitorVideo = styled.video.attrs(() => ({
  autoplay: true,
  loop: true,
}))`
  width: 896px;
  height: 514px;
  position: absolute;
  left: 10px;
  top: 9px;
`

export {
  TitleWrapper,
  Heading,
  ContentContainer,
  Paragraph,
  Button,
  MonitorWrapper,
  MonitorVideo,
}
