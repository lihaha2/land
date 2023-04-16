import withBasePath from '@/helpers/withBasePath'
import styled from '@/styles/styled-components'
import { motion } from 'framer-motion'

const CarouselPrevButton = styled.button`
  display: flex;
  width: 2rem;
  height: 4rem;
  background-image: url(${withBasePath('/assets/images/icons/right.svg')});
  background-size: 2rem 4rem;
  transform: rotate(180deg);
`

const CarouselNextButton = styled.button`
  display: flex;
  width: 2rem;
  height: 4rem;
  background-image: url(${withBasePath('/assets/images/icons/right.svg')});
  background-size: 2rem 4rem;
`

const CarouselSlideButtons = styled.div`
  display: flex;
  gap: 1.25rem;
`

interface ICarouselBtnProps {
  isActive?: boolean
}

const CarouselSlideButton = styled.button.attrs<ICarouselBtnProps>(
  ({ isActive }) => ({
    disabled: isActive,
  })
)<ICarouselBtnProps>`
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 50%;
  border: 0.125rem solid #50758f;
  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
  position: relative;

  &::after {
    content: '';
    width: calc(100% - 0.1875rem);
    height: calc(100% - 0.1875rem);
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: ${({ isActive, theme }) =>
      isActive ? theme.colors.DX_Gradient : 'transparent'};
  }
`

const CarouselWrapper = styled(motion.section)`
  width: 100%;
  display: flex;
  background: linear-gradient(
    73.66deg,
    rgba(46, 176, 252, 0) 0%,
    rgba(46, 176, 252, 0.0725) 50.33%,
    rgba(46, 176, 252, 0.0725) 100%
  );
  backdrop-filter: blur(13.5px);
  border-radius: 36px;
  position: relative;
`

export {
  CarouselPrevButton,
  CarouselNextButton,
  CarouselSlideButtons,
  CarouselSlideButton,
  CarouselWrapper,
}
