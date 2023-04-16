import styled from '@/styles/styled-components'
import { motion } from 'framer-motion'

const RevolutionWrapper = styled.section`
  width: 100%;
  display: flex;
  padding-top: 15.9375rem;
  justify-content: flex-end;
  padding-right: 13.75rem;
  position: relative;
`

const RevolutionContent = styled(motion.div)`
  width: 100%;
  max-width: 68.75rem;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  background: linear-gradient(
    73.66deg,
    rgba(46, 176, 252, 0) 0%,
    rgba(46, 176, 252, 0.0725) 50.33%,
    rgba(46, 176, 252, 0.0725) 100%
  );
  backdrop-filter: blur(0.8438rem);
  border-radius: 1.875rem;
  height: 26.625rem;
  padding: 3.5rem 4.4375rem;
  gap: 1.5rem;
`

const RevolutionHeading = styled.h2`
  font-family: 'Chakra Petch';
  font-style: normal;
  font-weight: 700;
  font-size: 5rem;
  line-height: 100%;
  display: flex;
  align-items: flex-end;
  text-align: right;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.Main_Blue};
`

const RevolutionText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.375rem;
  line-height: 120%;
  text-align: right;
  letter-spacing: -0.01em;

  color: #ffffff;
`

const RevolutionImageWrapper = styled(motion.div)`
  position: absolute;
  bottom: -3.125rem;
  left: 5rem;
  z-index: 2;
`

export {
  RevolutionWrapper,
  RevolutionContent,
  RevolutionHeading,
  RevolutionText,
  RevolutionImageWrapper,
}
