import Image from 'next/image'
import useQuiosco from '@/hooks/useQuiosco'
import Category from './Category'
import OptionsAdmin from './OptionsAdmin'

const SideBar: React.FC = () => {
  const { options, categories, isAdminPanel } = useQuiosco()
  return (
    <>
      <Image
        width="0"
        height="0"
        src="/assets/img/logo.svg"
        alt='Image logo'
        className='m-2 w-11/12'
        priority={true}
      />

      <nav className="mt-10">
        {isAdminPanel
          ? options.map(option => (
            <OptionsAdmin
              key={option.id}
              option={option}
            />
          ))
          : categories.map(category => (
            <Category
              key={category.id}
              category={category}
            />
          ))}
      </nav>
    </>
  )
}

export default SideBar