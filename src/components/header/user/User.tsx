import React from 'react'
import { UserOptions } from './UserOptions'
import { UserProfileImg } from './UserProfileImage'

export const User = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
  <>
    <UserProfileImg onClick={() => setIsOpen(!isOpen)} ChangeColor={isOpen}/>
    <UserOptions onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}/>
  </>
  )
}
