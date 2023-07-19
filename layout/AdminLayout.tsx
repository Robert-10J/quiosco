import SideBar from '@/components/SideBar'
import { Props } from '@/types'
import Head from "next/head"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const AdminLayout: React.FC<Props> = ({ children, page }) =>{
  return (
    <>
      <Head>
        <title>Café - {page}</title>
        <meta name="description" content="Quosco Cafetería" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5 p-4">
          <SideBar/>
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            {children}
          </div>
        </main>
      </div>
      <ToastContainer />
    </>
  );
}

export default AdminLayout