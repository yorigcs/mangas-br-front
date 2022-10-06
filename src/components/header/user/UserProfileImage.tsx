
import styled from 'styled-components'
import { FaUserCircle } from 'react-icons/fa'

interface Props {
  ChangeColor?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
}
export const UserProfileImg = ({ ChangeColor, onClick }: Props): JSX.Element => {
  return (
  <UserImageWrapper onClick={onClick} ChangeColor={ChangeColor} >
    <FaUserCircle size={36}/>
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
