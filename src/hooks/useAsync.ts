import { useEffect, useState } from 'react'

export const useAsync = <T>(handler: any, immediate: boolean = true):
{
  data: T | null
  status: 'loading' | 'sucess' | 'error' | null
  errMsg: string | null
  act: (...args: any) => Promise<string | T | null>
} => {
  const [data, setData] = useState<T | null>(null)
  const [errMsg, setErrMsg] = useState<null | string>(null)
  const [status, setStatus] = useState<'loading' | 'sucess' | 'error' | null>(null)

  const act = async (...args: any): Promise<T | string | null> => {
    try {
      setStatus(status => (status = 'loading'))
      const res = await handler(...args)
      setData(data => (data = res.data))
      setStatus(status => (status = 'sucess'))
      return data
    } catch (err: any) {
      setErrMsg(error => (error = err.response.data.error))
      setStatus(status => (status = 'error'))
      return errMsg
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
    act
  }
}
