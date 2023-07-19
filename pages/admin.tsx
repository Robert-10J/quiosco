import useSWR from 'swr'
import axios from 'axios'
import { OrdersAPI } from '@/types'
import AdminLayout from '@/layout/AdminLayout'
import Order from '@/components/Order'

export default function Admin () {
  const fetcher = () => axios('/api/orders').then(data => data.data) 
  const { data } = useSWR<OrdersAPI[]>('/api/orders', fetcher, {
    refreshInterval: 1000
  })

  return (
    <AdminLayout page={'Admin'}>
      <h1 className='text-4xl font-black'>Panel de Administración</h1>
      <p className='text-2xl my-10'>Administra tus ordenes</p>
    {data?.length
      ? data.map(order => (
        <Order 
          key={order.idOrder}
          orders={order}
        />
      ))
      : <p className='text-amber-400 text-3xl uppercase font-bold'>No hay ordenes  pendientes</p>
    }

    </AdminLayout>
  )
}