
import React from 'react'
import styled from 'styled-components'
import { Status } from '../../models/status'

import Lottie from 'lottie-react'
import errorAnimation from '../../assets/lottieAnimations/errorLottie.json'
import sucessAnimation from '../../assets/lottieAnimations/sucessLottie.json'
import loadingAnimation from '../../assets/lottieAnimations/loadingLottie.json'

interface Props {
  message: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  status?: Status
  errMsg?: string | null
}

export const ButtonForm = ({ message, onClick, status, errMsg }: Props): JSX.Element => {
  const renderButton = (): JSX.Element => {
    switch (status) {
      case 'loading':
        return (
          <ButtonLoading onClick={onClick}>
            <Lottie animationData={loadingAnimation} style={{ width: '50px' }} />
          </ButtonLoading>
        )
      case 'sucess':
        return (
          <ButtonLoading onClick={onClick}>
            <Lottie animationData={sucessAnimation} style={{ width: '50px' }} loop={false} />
          </ButtonLoading>
        )
      case 'error':
        return (
          <ButtonError onClick={onClick}>
            <Lottie animationData={errorAnimation} style={{ width: '32px' }} loop={false} />
            {errMsg ?? 'Ocorreu um erro!'}
          </ButtonError>
        )
      default:
        return (
          <ButtonDefault onClick={onClick}>
            {message}
          </ButtonDefault>
        )
    }
  }

  return <>{renderButton()}</>
}
const ButtonDefault = styled.button`
    display: flex ;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 48px;
    width: 80%;
    background-color: ${props => props.theme.colors.jellyBeanBlue};
    border: none;
    border-radius: 8px;
    color: ${props => props.theme.colors.Honeydew};
    font-size: 24px;
    &:hover {
      opacity: 0.9;
    }
`

const ButtonLoading = styled(ButtonDefault)`
    cursor: default;
    pointer-events: none;
`
const ButtonError = styled(ButtonLoading)`
    flex-direction: column;
    height: 54px;
    font-size: 16px;
    color: ${props => props.theme.colors.desire};
    font-weight: 700;

`
