import styled from 'styled-components'
import { useAuth } from '../../../contexts/auth'

import { AdminMenu } from './menu/menus/AdminMenu'
import { UserMenu } from './menu/menus/UserMenu'
import { VisitantMenu } from './menu/menus/VisitantMenu'

interface Props {
  isOpen?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
}
export const UserOptions = ({ isOpen, onClick }: Props): JSX.Element => {
  const { signed, user } = useAuth()

  const handleRender = (): JSX.Element => {
    if (signed && user?.isAdmin) {
      return <AdminMenu />
    } else if (signed) {
      return <UserMenu />
    } else {
      return <VisitantMenu/>
    }
  }
  return (
    <>
      <UserOptionsWrapper isOpen={isOpen} >
        {handleRender()}
      </UserOptionsWrapper>
      <Overlay onClick={onClick} isOpen={isOpen} />
    </>
  )
}

const UserOptionsWrapper = styled.div<{ isOpen?: boolean }>`
  display: ${(props) => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  gap: 8px;
  min-height: 100px;
  position: absolute;
  bottom: -110px;
  right: 0px;
  width: 200px;
  background-color: ${props => props.theme.colors.spaceCadet};
  border: 1px solid ${props => props.theme.colors.jellyBeanBlue};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 16px;
  z-index: 2;
  @media only screen and (max-width: 480px) {
    width:100%;
  }
    
`

const Overlay = styled.div<{ isOpen?: boolean }>`
  background: transparent;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: ${(props) => props.isOpen ? 'block' : 'none'};
  z-index: 1;
`
