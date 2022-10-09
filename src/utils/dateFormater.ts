import dayjs from 'dayjs'

export const convertToDateDDMMYYYY = (dateIso: string): string => {
  return dayjs(dateIso).format('DD/MM/YYYY')
}
