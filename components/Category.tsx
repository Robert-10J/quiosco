import useQuiosco from '@/hooks/useQuiosco'
import { Category as CategoryInterface } from '@/types'
import Image from 'next/image'

interface Props {
  category: CategoryInterface
}

const Category: React.FC<Props> = ({ category }) => {
  const { categorySelected, handleClickCategory } = useQuiosco()
  const { nameCategory, icon, id } = category

  return (
    <div className={`${
      categorySelected?.id === id ? 'bg-amber-300' : ''
    } flex items-center w-full border-b p-5 hover:bg-amber-200`}>
      <Image
        width={75}
        height={75}
        src={`/assets/img/icono_${icon}.svg`}
        alt={`Icon ${nameCategory}`}
        className='m-2'
      />

      <button
        onClick={() => handleClickCategory(id) }
        type='button'
        className='text-2xl font-bold hover:cursor-pointer w-full text-left'
      >
        { nameCategory }
      </button>
    </div>
  )
}

export default Category