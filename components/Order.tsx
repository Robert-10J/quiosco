import { formatMoney } from '@/helpers'
import { OrdersAPI } from '@/types'
import axios from 'axios'
import Image from 'next/image'
import { toast } from 'react-toastify'

const Order = ({ orders }: { orders: OrdersAPI }) => {
  const { idOrder, name, total, order,  } = orders

  const completeOrder = async () => {
    try {
      await axios.post(`/api/orders/${idOrder}`)
      toast.success('Orden Lista')
    } catch (error) {
      toast.error('Hubo un error')
    }
  }

  return (
    <div className='border p-10 space-y-5 mb-2 rounded-md shadow-md'>
      <h3 className='text-2xl font-bold'>Orden: {idOrder}</h3>
      <p className="text-lg font-bold">Cliente: {name}</p>

      <div>
        {order.map(dish => (
          <div key={dish.id} className='py-3 flex border-b last-of-type:border-0 items-center'>
            <div className='w-32'>
              <Image
                width={400}
                height={500}
                src={`/assets/img/${dish.image}.jpg`}
                alt={`Imagen platillo ${dish.nameProduct}`}
              />
            </div>

            <div className='p-5 space-y-2'>
              <h4 className='text-xl font-bold text-amber-500'>{dish.nameProduct}</h4>
              <p className="text-lg font-bold">Cantidad: {dish.amount}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-4xl text-amber-500">Total a pagar: {formatMoney(total)}</p>
        <button 
          type='button'
          onClick={completeOrder}
          className='bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 rounded-md uppercase font-bold'
        >
          Completar Orden
        </button>
      </div>
    </div>
  )
}

export default Order