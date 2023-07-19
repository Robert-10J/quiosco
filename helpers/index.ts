export const formatMoney = (amount: number) => {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

export function getDateTime(): Date {
  const fechaHoraActual = new Date();

  const year = fechaHoraActual.getFullYear()
  const month = String(fechaHoraActual.getMonth() + 1).padStart(2, '0')
  const day = String(fechaHoraActual.getDate()).padStart(2, '0')
  const hours = String(fechaHoraActual.getHours()).padStart(2, '0')
  const minutes = String(fechaHoraActual.getMinutes()).padStart(2, '0')
  const seconds = String(fechaHoraActual.getSeconds()).padStart(2, '0')
  
  const fechaHoraMySQL = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`

  return new Date(fechaHoraMySQL)
}