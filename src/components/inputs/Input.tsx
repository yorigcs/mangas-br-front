import React from 'react'
import styled from 'styled-components'

interface Props {
  placeHolder: string
  name: string
  type: React.HTMLInputTypeAttribute
  icon?: JSX.Element
  children?: React.ReactNode
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value?: string | number | readonly string[]
  err?: string | null
}

const handleFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
  e.target.readOnly = false
}
export const Input = ({ placeHolder, name, type, icon, onChange, value, err }: Props): JSX.Element => {
  if (icon) {
    return (
      <InputWrapper>
        <Icon>{icon}</Icon>
        <InputIconLeft error={err} placeholder={placeHolder} name={name} type={type} onChange={onChange} value={value} readOnly onFocus={handleFocus}/>
        {err ? <InputError>{err}</InputError> : null}
      </InputWrapper>
    )
  }
  return (
    <InputWrapper>
      <InputDefault error={err} placeholder={placeHolder} name={name} type={type} onChange={onChange} value={value} readOnly onFocus={handleFocus}/>
      {err ? <InputError>{err}</InputError> : null}
    </InputWrapper>

  )
}

const InputWrapper = styled.div`
  position: relative;
  width: 80%;
  
`
const InputError = styled.p`
  color: ${props => props.theme.colors.desire};
  margin-top: 4px;
  font-weight: 700;
  font-size: 14px;
`

const Icon = styled.div`
  position: absolute;
  left: 8px;
  top: 16px;
`
const InputDefault = styled.input<{ error?: string | null }>`
  line-height: 32px;
  border-radius: 8px;
  border: none;
  border: 2px solid ${props => (props.error ? props.theme.colors.desire : 'none')};
  outline: none;
  padding: 8px;
  width: 100%;
  font-size: 16px;
  
`
const InputIconLeft = styled(InputDefault)`
  padding-left: 32px;
`
