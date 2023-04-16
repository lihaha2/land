import withBasePath from '@/helpers/withBasePath'
import styled from '@/styles/styled-components'
import { motion } from 'framer-motion'

const linesSrc = withBasePath('/assets/images/backgrounds/lines.webp')

const imgVariants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: -700, opacity: 0 },
}

const StatsWrapper = styled(motion.section)`
  width: calc(100% - 13.125rem);
  height: 58.4375rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
  align-items: center;
  margin-top: -190px;

  &::after {
    content: '';
    width: 58.625rem;
    height: 58.4375rem;
    position: absolute;
    right: -1.875rem;
    top: -0.625rem;
    background-image: url(${linesSrc});
    background-size: cover;
  }

  & .statsParalax {
    width: 70%;
    height: 110%;
    position: absolute !important;
    right: 0;
    z-index: 3;
  }
`

const StatCard = styled(motion.div)<{
  scrolly: number
}>`
  width: 29.8125rem;
  height: 17.3125rem;
  position: absolute;
  background-size: cover;
  transform: translateY(${({ scrolly }) => 180 + -scrolly * 200}px);
`

const FirstCard = styled(StatCard)`
  right: 20.4431rem;
  top: 8.25rem;
  background-image: url('${withBasePath('/assets/images/cards/4.webp')}');
  filter: drop-shadow(
    4px ${({ scrolly }) => 8 * scrolly * 5}px
      ${({ scrolly }) => 12 * scrolly * 5}px black
  );
`
const SecondCard = styled(StatCard)`
  right: 3.9375rem;
  top: 21.0406rem;
  background-image: url('${withBasePath('/assets/images/cards/5.webp')}');
  filter: drop-shadow(
    6px ${({ scrolly }) => 14 * scrolly * 5}px
      ${({ scrolly }) => 24 * scrolly * 5}px black
  );
`
const FhirdCard = styled(StatCard)`
  right: 28.5862rem;
  top: 29.2725rem;
  background-image: url('${withBasePath('/assets/images/cards/6.webp')}');
  filter: drop-shadow(
    2px ${({ scrolly }) => 4 * scrolly * 5}px
      ${({ scrolly }) => 6 * scrolly * 5}px black
  );
`

const StatsContent = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: imgVariants,
  transition: { duration: 1 },
}))`
  width: 38.35rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  gap: 2rem;
  z-index: 3;
  padding-bottom: 6.25rem;
  z-index: 4;

  & h2 {
    font-weight: 700;
    font-size: 5rem;
    line-height: 120%;
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
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export { StatsWrapper, StatsContent, FirstCard, SecondCard, FhirdCard }
