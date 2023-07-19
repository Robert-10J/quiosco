import { useCallback, useEffect } from 'react';
import useQuiosco from '@/hooks/useQuiosco';
import Layout from '@/layout/Layout';
import { formatMoney } from '@/helpers';

export default function Total() {
  const { order, name, total, setName, sendingOrder } = useQuiosco()

  const checkOrder = useCallback(() => { 
    return order.length === 0 || name === '' ||name.length <= 3
  }, [order, name])

  useEffect(() => {
    checkOrder()
  }, [order, checkOrder])

  return (
    <Layout page='Total y Confirmar Pedido'>
      <h1 className='text-4xl font-black'>Total y Confirmar Pedido</h1>
      <p className='text-2xl my-10'>Confirma tu Pedido a Continuación</p>

      <form onSubmit={sendingOrder}>
        <div>
          <label
            htmlFor='name'
            className='block uppercase text-slate-800 font-bold text-xl'
          >Nombre:</label>
          <input
            id='name'
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className='bg-gray-200 w-full lg:h-1/3 mt-3 p-2 rounded-md'
          />
        </div>

        <div className="mt-5">
          <p className='text-xl'>
            Total a pagar: {''} <span className="font-bold text-amber-400">{formatMoney(total)}</span>
          </p>
        </div>

        <div className='mt-5'>
          <input
            disabled={checkOrder()}
            type='submit'
            value='Confirmar Pedido'
            className={`${
              checkOrder() 
              ? 'bg-indigo-200' 
              : 'bg-indigo-600 hover:bg-indigo-800'
            } w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white`}
          />
        </div>
      </form>
    </Layout>
  )
}