import {
  CarouselSlideButtons,
  CarouselWrapper,
} from '@/components/common/Carousel'
import styled from '@/styles/styled-components'
import { motion } from 'framer-motion'
import { Parallax } from 'react-parallax'
import teamBackground from '../../../../public/assets/images/backgrounds/teamBackground.webp'

const TeamBackground = styled(Parallax).attrs(() => ({
  bgImage: teamBackground.src,
  strength: 300,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 16/9;
  background-size: cover;
`

const TeamWrapper = styled(CarouselWrapper)`
  width: 73.75rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 21.625rem;
`

const TeamSlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 14.5625rem;

  & h3 {
    font-weight: 700;
    font-size: 56px;
    line-height: 113.5%;
    text-transform: uppercase;
  }

  & span {
    color: ${({ theme }) => theme.colors.Main_Blue};
  }
`

export const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const TeamSlideComponent = styled(motion.div).attrs(() => ({
  variants: variants,
  initial: 'enter',
  animate: 'center',
  exit: 'exit',
  transition: {
    x: { type: 'spring', stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
  },
  drag: 'x',
  dragConstraints: { left: 0, right: 0 },
  dragElastic: 1,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
`

const TeamSlideButtons = styled(CarouselSlideButtons)`
  margin-top: 0.25rem;
`

export {
  TeamWrapper,
  TeamSlideWrapper,
  TeamSlideButtons,
  TeamBackground,
  TeamSlideComponent,
}
