import { useState } from 'react'
import Image from 'next/image'
import { formatMoney } from '@/helpers'
import useQuiosco from '@/hooks/useQuiosco'

const ModalProduct: React.FC = () => {
  const { product, handleChangeModal, handleAddOrder, order } = useQuiosco()
  const [edit, setEdit] = useState<boolean>(false)

  const initialStateAmount = () => {
    const editProdut = order?.find(orderState => orderState.id === product.id)
    if( editProdut ) {
      setEdit(true)
      return editProdut.amount
    }
    return 1
  }

  const [amount, setAmount] = useState<number>(initialStateAmount)

  /* useEffect(() => {
    const someOrder = order.some(orderState => orderState.id === product.id)
    const editProdut = order.find( orderState => orderState.id === product.id )
    if( someOrder) {
      setEdit(true)
      setAmount(editProdut?.amount)
    }
  }, [product, order]) */
  
  return (
    <div className='md:flex gap-10'>
      <div className='md:w-1/3'>
       <Image
        width={300}
        height={400}
        alt={`Image product ${product.nameProduct}`}
        src={`/assets/img/${product.image}.jpg`}
       />
      </div>

      <div className='md:w-2/3'>
        <div className='flex justify-end'>
          <button
            onClick={ handleChangeModal }
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
        <h1 className='text-3xl font-bold mt-5'>{ product.nameProduct }</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">{ formatMoney(product.price) }</p>

        <div className='flex gap-4 mt-5'>
          <button
            type='button'
            onClick={ () => {
              if (amount <= 1) return 
              setAmount(amount - 1)
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>

          <p className="text-3xl">{ amount }</p>

          <button
            type='button'
            onClick={ () => {
              if (amount >= 8) return
              setAmount(amount + 1)
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>

        <button
          type='button'
          onClick={() => handleAddOrder({ ...product, amount }) }
          className='bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 rounded-md font-bold text-white'
        >{ edit ? 'Editar Pedido' : 'Añadir al pedido' }</button>
      </div>
    </div>
  )
}

export default ModalProduct