import Image from 'next/image'
import useQuiosco from '@/hooks/useQuiosco'
import { OptionsAdmin as OptionAdmin } from '@/types'

interface Props {
  option: OptionAdmin
}

const OptionsAdmin: React.FC<Props> = ({ option }) => {
  const { activeOption, handleOptionActive } = useQuiosco()

  return (
    <div className={`${activeOption?.id === option.id ? 'bg-amber-300' : ''
        } flex items-center gap-2 w-full border-b p-5 hover:bg-amber-200`}
    >
      <Image
        width={50}
        height={60}
        src={`/assets/img/${option.img}.svg`}
        alt={`Imagen de opcion ${option.option}`}
      />

      <button
        onClick={() => handleOptionActive(option.id)}
        type='button'
        className='text-2xl font-bold hover:cursor-pointer w-full text-left'
      >{option.option}</button>
    </div>
  )
}

export default OptionsAdmin