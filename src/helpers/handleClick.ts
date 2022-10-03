import React from 'react'

export const handleClick = (e: React.FormEvent, isValid: () => boolean): void => {
  e.preventDefault()
  if (isValid()) {
    console.log('tudo bem')
  } else {
    console.log('nada bem')
  }
}
