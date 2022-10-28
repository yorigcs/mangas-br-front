import React from 'react'
export const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<any>>): void => {
  setState((data: any) => ({ ...data, [e.target.name]: e.target.value }))
}

export const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<any>>): void => {
  setState((data: any) => ({ ...data, [e.target.name]: e.target.files }))
}
