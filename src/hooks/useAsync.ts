import { useEffect, useState } from 'react'
import { Status } from '../models/status'

export const useAsync = <T>(handler: any, immediate: boolean = true):
{
  data: T | null
  status: Status
  errMsg: string | null
  statusCode: number | null
  act: (...args: any) => Promise<Error | T | null>
  resetStates: (time?: number) => void
} => {
  const [data, setData] = useState<T | null>(null)
  const [errMsg, setErrMsg] = useState<null | string>(null)
  const [status, setStatus] = useState<'loading' | 'sucess' | 'error' | null>(null)
  const [statusCode, setStatusCode] = useState<number | null>(null)
  const resetStates = (time: number = 2000): void => {
    setTimeout(() => {
      setStatus(status => (status = null))
      setErrMsg(error => (error = null))
      setData(data => (data = null))
    }, time)
  }
  const act = async (...args: any): Promise<T | Error | null> => {
    try {
      setStatus(status => (status = 'loading'))
      const res = await handler(...args)
      setData(data => (data = res.data))
      setStatusCode(statusCode => (statusCode = res.status))
      setStatus(status => (status = 'sucess'))
      return res.data
    } catch (err: any) {
      setErrMsg(error => (error = err.response.data.error))
      setStatusCode(statusCode => (statusCode = err.response.status))
      setStatus(status => (status = 'error'))
      throw new Error(err.response.data.error)
    }
  }

  useEffect(() => {
    if (immediate) {
      void act()
    }
  }, [])

  return {
    data,
    status,
    errMsg,
    statusCode,
    act,
    resetStates
  }
}
