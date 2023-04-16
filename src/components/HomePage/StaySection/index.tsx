import {
  JoinButton,
  StayFlexBox,
  StayForm,
  StayInput,
  StayWrapper,
} from './styled'

const StaySection = () => {
  return (
    <div id="stay">
      <StayWrapper>
        <StayForm>
          <h2>Stay up to date</h2>
          <StayFlexBox style={{ gap: 28 }}>
            <StayInput type="text" placeholder="Type your name" />
            <StayFlexBox>
              <StayInput
                withButton
                type="email"
                placeholder="Type your email"
              />
              <JoinButton>Join the Waitlist</JoinButton>
            </StayFlexBox>
          </StayFlexBox>
        </StayForm>
      </StayWrapper>
    </div>
  )
}

export default StaySection
