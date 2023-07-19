import { OptionsAdmin } from './types'

export const STEPS = [
  { step: 1, name: 'Menú', url: '/' },
  { step: 2, name: 'Resumen', url: '/orderSummary' },
  { step: 3, name: 'Datos y Total', url: '/total' },
]

export const OPTIONS_ADMIN: OptionsAdmin[] = [
  { id: 1, option: 'Ordenes Pendientes', img: 'pending' },
  { id: 2, option: 'Ordenes Completadas', img: 'complete' },
  { id: 3, option: 'Ventas', img: 'cash-register' },
]