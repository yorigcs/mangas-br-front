import dayjs from 'dayjs'

export const convertToDateDDMMYYYY = (dateIso: string): string => {
  return dayjs(dateIso).format('DD/MM/YYYY')
}

export const convertToDateMessage = (dateIso: string): string => {
  const date1 = dayjs(dayjs().toISOString())
  const date2 = dayjs(dateIso)
  const diffWeek = date1.diff(date2, 'week')
  const diffDays = date1.diff(date2, 'day')
  const diffHours = date1.diff(date2, 'hour')
  const diffMinutes = date1.diff(date2, 'minute')
  const diffSeconds = date1.diff(date2, 'second')
  if (diffWeek > 0) {
    return dayjs(dateIso).format('DD/MM/YYYY')
  } else if (diffDays < 7 && diffDays > 0) {
    return `Há ${diffDays} dias atrás`
  } else if (diffHours < 24 && diffHours > 0) {
    return `Há ${diffHours} horas atrás`
  } else if (diffMinutes < 60 && diffMinutes > 0) {
    return `Há ${diffMinutes} minutos atrás`
  } else {
    return `Há ${diffSeconds} segundos atrás`
  }
}
