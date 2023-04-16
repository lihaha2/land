import {
  CarouselNextButton,
  CarouselSlideButtons,
  CarouselWrapper,
} from '@/components/common/Carousel'
import MotionImage from '@/components/common/MotionImage'
import styled from '@/styles/styled-components'
import { motion } from 'framer-motion'

const sdkVariants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: 300, opacity: 0 },
}

const SdkContainer = styled(motion.div).attrs(() => ({
  variants: sdkVariants,
  initial: 'hidden',
  transition: { duration: 1 },
}))`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SdkWrapper = styled(CarouselWrapper)`
  width: 100%;
  max-width: 92.5rem;
  justify-content: center;
  padding-top: 3.125rem;
  padding-right: 2.3125rem;
  height: 27rem;
  margin-top: 4.975rem;
  z-index: 2;

  & h2 {
    font-weight: 700;
    font-size: 5rem;
    line-height: 120%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.Main_Blue};
    transition: 0.3s all;
  }

  & p {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 120%;
    letter-spacing: -0.01em;
  }
`

const SdkCube = styled(MotionImage).attrs(() => ({
  initial: { scale: 0, zIndex: 0 },
  animate: { scale: 1, zIndex: 2 },
  exit: { scale: 0, zIndex: 0 },
}))`
  position: absolute;
  width: 520px;
  height: 520px;
  aspect-ratio: 1/1;
  top: -3.4375rem;
  left: 2.25rem;
`

const SdkContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-left: 15.5rem;
  height: 14.5625rem;
  padding-left: 17rem;
  border-radius: 50% 0 0 50%;
`

const SdkSlideWrapper = styled(motion.div).attrs(() => ({
  initial: { x: -762 },
  animate: { x: 0 },
  exit: { x: 762 },
  transition: { duration: 0.5 },
}))`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 14.5625rem;
  max-width: 47.625rem;
`

const SdkSlideButtons = styled(CarouselSlideButtons)`
  align-self: flex-start;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2.875rem;
`

const SdkNextButton = styled(CarouselNextButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1.55rem;
`

export {
  SdkWrapper,
  SdkContentWrapper,
  SdkSlideWrapper,
  SdkCube,
  SdkSlideButtons,
  SdkNextButton,
  SdkContainer,
}
