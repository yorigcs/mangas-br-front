import React from 'react'
import styled from 'styled-components'

interface Props {
  placeHolder: string
  name: string
  type: React.HTMLInputTypeAttribute
  icon?: JSX.Element
  children?: React.ReactNode
}
export const Input = ({ placeHolder, name, type, icon }: Props): JSX.Element => {
  if (icon) {
    return (
      <InputWrapper>
        <Icon>{icon}</Icon>
        <InputIconLeft placeholder={placeHolder} name={name} type={type} />
      </InputWrapper>
    )
  }
  return (
    <InputWrapper>
      <InputDefault placeholder={placeHolder} name={name} type={type} />
    </InputWrapper>

  )
}

const InputWrapper = styled.div`
  position: relative;
  width: 80%;
  
`

const Icon = styled.div`
  position: absolute;
  left: 8px;
  top: 16px;
`
const InputDefault = styled.input`
  line-height: 32px;
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 8px;
  width: 100%;
  font-size: 16px;
  
`
const InputIconLeft = styled(InputDefault)`
  padding-left: 32px;
  
`
