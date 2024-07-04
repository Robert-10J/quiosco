import { formatMoney } from '@/helpers'
import useQuiosco from '@/hooks/useQuiosco'
import { Product as ProductInterface } from '@/types'
import Image from 'next/image'

interface Props {
  product: ProductInterface
}

const Product: React.FC<Props> = ({ product }) => {
  const { handleSetProduct, handleChangeModal } = useQuiosco()
  const { nameProduct, image, price } = product

  return (
    <div className='border p-3 rounded-md shadow-md'>
      <Image 
        width={400}
        height={500}
        src={`/assets/img/${image}.jpg`} 
        alt={`Image plate of food ${nameProduct}`}
        priority={true}
      />

      <div className='p-5'>
        <h3 className='text-2xl font-bold'>
          {nameProduct}
        </h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          { formatMoney(price) }
        </p>

        <button
          type='button'
          className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold rounded-md'
          onClick={() => {
            handleChangeModal()
            handleSetProduct(product)
          }}
        >Agregar</button>
      </div>
    </div>
  )
}

export default Product