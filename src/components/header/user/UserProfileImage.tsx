
import styled from 'styled-components'
import { FaUserCircle } from 'react-icons/fa'
import { useAuth } from '../../../hooks/useAuth'

interface Props {
  ChangeColor?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
}
export const UserProfileImg = ({ ChangeColor, onClick }: Props): JSX.Element => {
  const { user } = useAuth()
  const profilePicture = user?.profilePicture

  const handleProfilePicture = (): JSX.Element => {
    if (!user) {
      return <FaUserCircle size={36} />
    } else if (!profilePicture) {
      const firstName = user.name[0].toUpperCase()
      return <UserImageNull ChangeColor={ChangeColor}>{firstName}</UserImageNull>
    }
    return <>oi</>
  }
  return (
    <UserImageWrapper onClick={onClick} ChangeColor={ChangeColor} >
      {handleProfilePicture()}
    </UserImageWrapper>
  )
}

const UserImageWrapper = styled.div<{ ChangeColor?: boolean }>`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    color: ${props => props.ChangeColor ? props.theme.colors.jellyBeanBlue : props.theme.colors.Honeydew};
    &:hover {
      opacity: 0.8;
    }
`

const UserImageNull = styled.div<{ ChangeColor?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    font-size: 32px;
    border-radius: 50%;
    background-color: ${props => props.ChangeColor ? props.theme.colors.Honeydew : props.theme.colors.jellyBeanBlue};
    &:hover {
      opacity: 0.8;
    }
`
