import Head from 'next/head'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import SideBar from '@/components/SideBar'
import Steps from '@/components/Steps'
import useQuiosco from '@/hooks/useQuiosco'
import ModalProduct from '@/components/ModalProduct'

import { Props } from '@/types'
import 'react-toastify/dist/ReactToastify.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement('#__next');

const Layout: React.FC<Props> = ({ children, page='' }) => {
  const { modal } = useQuiosco()
  return (
    <>
      <Head>
        <title>Café - {page}</title>  
        <meta name='description' content='Quiosco Coffe Shop'/>
      </Head> 

      <div className='md:flex'>
        <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
          <SideBar/>
        </aside>

        <main className='md:w-8/12  xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
          <div className="p-10">
            <Steps/>
            { children }
          </div>
        </main>
      </div>

      {
        modal && (
          <Modal
            isOpen={modal}
            style={customStyles}
          >
            <ModalProduct/>
          </Modal>
        )
      }

      <ToastContainer/>
    </>
  )
}

export default Layout