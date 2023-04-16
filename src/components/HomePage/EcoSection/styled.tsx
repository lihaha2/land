import styled from '@/styles/styled-components'
import { motion } from 'framer-motion'
import MotionImage from '@/components/common/MotionImage'

const EcoWrapper = styled.section`
  width: 100%;
  display: flex;
  padding-top: 15.5rem;
  justify-content: space-between;
  gap: 3.125rem;
  padding-right: 12.9375rem;
`

const contentVariants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: -737, opacity: 0 },
}

const EcoContent = styled(motion.div).attrs(() => ({
  variants: contentVariants,
  initial: 'hidden',
  transition: { duration: 1 },
}))`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 4.25rem;
`

const EcoHeading = styled.h2`
  font-weight: 700;
  font-size: 4rem;
  line-height: 100%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.Main_Blue};
`

const EcoText = styled.p`
  font-weight: 500;
  font-size: 1.375rem;
  line-height: 120%;
  letter-spacing: -0.01em;
`

const EcoCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 0.4375rem;
  max-width: 36.0625rem;
`

const cardVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const EcoCard = styled(motion.div).attrs(() => ({
  variants: cardVariants,
  initial: 'hidden',
}))`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  width: 100%;
  max-width: 13.3125rem;

  & h3 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 100%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.Main_Blue};
  }

  & p {
    margin-top: 0.125rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 120%;
  }
`

const EcoCardImage = styled(MotionImage)`
  width: 9.375rem;
  height: 9.375rem;
`

export {
  EcoWrapper,
  EcoContent,
  EcoHeading,
  EcoText,
  EcoCards,
  EcoCard,
  EcoCardImage,
}
