import withBasePath from '@/helpers/withBasePath'
import styled from '@/styles/styled-components'
import { motion } from 'framer-motion'
import { Parallax } from 'react-parallax'

const linesSrc = withBasePath('/assets/images/backgrounds/lines.webp')

const PrizeWrapper = styled(motion.section)`
  width: 100%;
  height: 58.4375rem;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  padding-right: 13.75rem;
  position: relative;
  align-items: center;

  &::after {
    content: '';
    width: 58.625rem;
    height: 58.4375rem;
    position: absolute;
    left: 13.75rem;
    top: -0.625rem;
    background-image: url(${linesSrc});
    background-size: cover;
  }
`

const CustomParalax = styled(Parallax)`
  width: 70%;
  height: 110%;
  position: absolute !important;
  left: 48px;
`

const PrizeCard = styled(motion.div)<{
  scrolly: number
}>`
  z-index: 2;
  width: 32.9375rem;
  height: 19.0625rem;
  position: absolute;
  background-size: cover;
  transform: translateY(${({ scrolly }) => 180 + -scrolly * 200}px);
`

const FirstCard = styled(PrizeCard)`
  left: calc(13.75rem + 0.125rem);
  top: 10.5rem;
  background-image: url('${withBasePath('/assets/images/cards/1.webp')}');
  filter: drop-shadow(
    2px ${({ scrolly }) => 4 * scrolly * 5}px
      ${({ scrolly }) => 6 * scrolly * 5}px black
  );
`

const SecondCard = styled(PrizeCard)`
  left: calc(13.75rem + 25.8681rem);
  top: 16.4019rem;
  background-image: url('${withBasePath('/assets/images/cards/2.webp')}');
  filter: drop-shadow(
    4px ${({ scrolly }) => 8 * scrolly * 5}px
      ${({ scrolly }) => 12 * scrolly * 5}px black
  );
`

const FhirdCard = styled(PrizeCard)`
  left: calc(13.75rem + 6.0613rem);
  top: 28.0125rem;
  background-image: url('${withBasePath('/assets/images/cards/3.webp')}');
  filter: drop-shadow(
    6px ${({ scrolly }) => 14 * scrolly * 5}px
      ${({ scrolly }) => 24 * scrolly * 5}px black
  );
`

const imgVariants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: -700, opacity: 0 },
}

const PrizeContent = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: imgVariants,
  transition: { duration: 1 },
}))`
  width: 100%;
  max-width: 32.125rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
  position: relative;
  gap: 2rem;
  z-index: 3;

  & h2 {
    font-weight: 700;
    font-size: 5rem;
    line-height: 120%;
    text-align: right;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.Main_Blue};
  }

  & span {
    color: ${({ theme }) => theme.colors.primary};
  }

  & p {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 120%;
    text-align: right;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export {
  PrizeWrapper,
  CustomParalax,
  PrizeContent,
  FirstCard,
  SecondCard,
  FhirdCard,
}
