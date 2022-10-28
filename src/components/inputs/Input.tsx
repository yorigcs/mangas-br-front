import React from 'react'
import styled from 'styled-components'

interface Props {
  placeHolder?: string
  name: string
  type: React.HTMLInputTypeAttribute
  icon?: JSX.Element
  children?: React.ReactNode
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value?: string | number | readonly string[]
  err?: string | null
  loading?: boolean
  multiple?: boolean
}

export const Input = ({ placeHolder, name, type, icon, onChange, value, err, loading, multiple }: Props): JSX.Element => {
  if (icon) {
    return (
      <InputWrapper>
        <Icon>{icon}</Icon>
        <InputIconLeft disabled={loading} isLoading={loading} error={err} placeholder={placeHolder} name={name} type={type} onChange={onChange} value={value} multiple={multiple}/>
        {err ? <InputError>{err}</InputError> : null}
      </InputWrapper>
    )
  }
  return (
    <InputWrapper>
      <InputDefault disabled={loading} isLoading={loading} error={err} placeholder={placeHolder} name={name} type={type} onChange={onChange} value={value} multiple={multiple}/>
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
  top: 50%;
  transform: translateY(-50%);
`
const InputDefault = styled.input<{ error?: string | null, isLoading?: boolean }>`
  cursor: ${props => (props.isLoading ? 'not-allowed' : 'text')};
  line-height: 32px;
  border-radius: 8px;
  border: 2px solid ${props => (props.error ? props.theme.colors.desire : 'none')};
  background-color: ${props => (props.isLoading ? props.theme.colors.crystal : 'white')};
  outline: none;
  padding: 8px;
  width: 100%;
  font-size: 16px;
  
`
const InputIconLeft = styled(InputDefault)`
  padding-left: 32px;
`
