import { PrimaryButton } from '@/components/common/Button'
import withBasePath from '@/helpers/withBasePath'
import styled from '@/styles/styled-components'
import { Parallax } from 'react-parallax'

const background = withBasePath(
  '/assets/images/backgrounds/stayBackground.webp'
)

const StayWrapper = styled(Parallax).attrs(() => ({
  bgImage: background,
  strength: 500,
  //   disabled: true,
}))`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  aspect-ratio: 1920/1112;
  overflow: initial !important;
  /* background-image: url(${background}); */
  /* background-size: 100% auto; */
  /* background-repeat: no-repeat; */
  .react-parallax-bgimage {
    top: 0;
  }
  .react-parallax-content {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`

const StayForm = styled.div`
  display: flex;
  width: 100%;
  max-width: 57.5rem;
  padding: 4.0625rem 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.0625rem;
  background: linear-gradient(
    73.66deg,
    rgba(46, 176, 252, 0) 0%,
    rgba(46, 176, 252, 0.0725) 50.33%,
    rgba(46, 176, 252, 0.0725) 100%
  );
  backdrop-filter: blur(13.5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 36px;
  /* transform: matrix(-1, 0, 0, 1, 0, 0); */

  & h2 {
    font-weight: 700;
    font-size: 3rem;
    line-height: 113.5%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.Main_Blue};
  }
`

const StayInput = styled.input<{ withButton?: boolean }>`
  background: rgba(255, 255, 255, 0.1);
  border: ${({ withButton }) =>
    withButton ? '1px solid #37A5D5' : '1px solid #7899c8'};
  border-radius: 0.25rem;
  font-family: 'Chakra Petch';
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 113.5%;
  text-transform: uppercase;
  padding: 0.75rem 1.0625rem;
  border-radius: 4px;
  margin-right: ${({ withButton }) => (withButton ? '-5px' : '0')};
  color: ${({ theme }) => theme.colors.primary};
  outline: none;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #7b9fd0;
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #7b9fd0;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #7b9fd0;
  }
`

const StayFlexBox = styled.div`
  display: flex;
`

const JoinButton = styled(PrimaryButton)`
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  padding: 0 2rem;
  border-radius: 4px;
  text-transform: uppercase;
`

export { StayWrapper, StayForm, StayInput, StayFlexBox, JoinButton }
