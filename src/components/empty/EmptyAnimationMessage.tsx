import Lottie from 'lottie-react'
import styled from 'styled-components'
import errorAnimation from '../../assets/lottieAnimations/emptyEmoji.json'

interface Props {
  children: React.ReactNode
}
export const EmptyAnimationMessage = ({ children }: Props): JSX.Element => {
  return (
    <AnimationContainer>
      <Lottie animationData={errorAnimation} style={{ width: '80%' }} />
      <Message>{children}</Message>
    </AnimationContainer>
  )
}

const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Message = styled.span`
  color: ${props => props.theme.colors.crystal};
`
