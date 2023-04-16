import styled from '@/styles/styled-components'
import { motion } from 'framer-motion'

const RoadWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 8.625rem;
  margin-top: -10.9375rem;
  position: relative;

  & h2 {
    font-weight: 700;
    font-size: 96px;
    line-height: 120%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.Main_Blue};
  }
`

const RoadContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7.75rem;
  padding-bottom: 1.25rem;
  z-index: 1;

  & > div {
    display: flex;
    align-items: center;
    gap: 19rem;
    position: relative;
  }

  & h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 100%;
    width: 28.75rem;
    text-align: right;
  }

  & p {
    font-weight: 400;
    font-size: 28px;
    line-height: 140%;
  }

  & article {
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    margin-top: 1.125rem;
  }

  & span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    margin-top: 1.125rem;
    display: block;
  }

  & span.active {
    color: #5cb4ea;
  }

  #notActive h3,
  #notActive p,
  #notActive span,
  #notActive article {
    color: #c4d6f0;
    opacity: 0.6;
  }
`

const RoadStroke = styled.div`
  position: absolute;
  background: #0a0f18;
  width: 0.25rem;
  height: calc(100% - 12rem);
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
`

const ActiveRoadStroke = styled(motion.div)`
  width: 100%;
  background: ${({ theme }) => theme.colors.DX_Gradient};
  height: 100%;
  transform-origin: top;
`

const RoadStrokeDot = styled.div<{ active?: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 3rem;
  height: 3rem;
  transform: translate(-50%, -50%);
  z-index: 3;
  border-radius: 50%;
  background: #0d1422;
  backdrop-filter: blur(13.5px);
  border: ${({ active }) => (active ? '1px solid #314162' : 'none')};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: ${({ active, theme }) =>
      active ? theme.colors.DX_Gradient : '#314162'};
    backdrop-filter: blur(13.5px);
    border: ${({ active }) => (active ? '2px solid #314162' : 'none')};
  }
`

export { RoadWrapper, RoadContent, RoadStroke, ActiveRoadStroke, RoadStrokeDot }
