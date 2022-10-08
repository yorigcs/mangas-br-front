import React from 'react'
import styled from 'styled-components'

interface Props {
  children?: React.ReactNode
  title: string
  style?: React.CSSProperties
  size?: Size
}

interface Size {
  width?: string
  height?: string
}
export const ContentBlock = ({ children, title, size }: Props): JSX.Element => {
  return (
      <ContentWrapper height={size?.height} width={size?.width}>
        <Title>
          {title}
        </Title>
        <Risk />
        <MainContent >
          {children}
        </MainContent>

      </ContentWrapper>
  )
}

const ContentWrapper = styled.div<Size>`
    position: relative;
    padding: 10px 20px;
    width: ${props => props.width ?? '100%'};
    height: ${props => props.height ?? '100%'};
    background-color: ${props => props.theme.colors.spaceCadet};
    border-radius: 8px;
    @media only screen and (max-width: 480px) {
    width:100%;
    border-radius: 0;
  }
  `
const Risk = styled.div`
    position: absolute;
    left: 0;
    top: 26px;
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.colors.jellyBeanBlue};
  `

const Title = styled.h2`
    font-weight: 700;
    font-size: 14px;
    color: ${props => props.theme.colors.crystal};
    width: 100%;
  `

const MainContent = styled.div`
    padding: 10px 0;
  
  `
