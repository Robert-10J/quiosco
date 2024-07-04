import { useState, useEffect, createContext, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { 
  Category as CategoryInterface, 
  Product,
  Children, 
  Order,
  OptionsAdmin, 
} from '@/types'
import axios from 'axios'
import { getDateTime } from '@/helpers'
import { OPTIONS_ADMIN } from '@/constants'

interface QuioscoContextType {
  categories: CategoryInterface[]
  handleClickCategory: (id: number) => void
  categorySelected: CategoryInterface
  product: Product
  handleSetProduct: (product: Product) => void
  modal: boolean
  handleChangeModal: () => void,
  handleAddOrder: (orderProduct: Order) => void,
  order: Order[],
  handleEditOrderAmount: (idOrder: number) => void,
  handleDeleteProduct: (idProduct: number) => void,
  name: string,
  setName: (value: SetStateAction<string>) => void,
  sendingOrder: (event: React.FormEvent) => void,
  total: number,
  isAdminPanel: boolean,
  handleOptionActive: (id: number) => void,
  activeOption: OptionsAdmin,
  options: OptionsAdmin[]
}

const QuioscoContext = createContext<QuioscoContextType>({} as QuioscoContextType)

const QuioscoProvider: React.FC<Children> = ({ children }) => {
  const [categories, setCategories] = useState<CategoryInterface[]>([])
  const [categorySelected, setCategorySelectec] = useState<CategoryInterface>({} as CategoryInterface)
  const [product, setProduct] = useState<Product>({} as Product)
  const [modal, setModal] = useState<boolean>(false)
  const [order, setOrder] = useState<Order[]>([])
  const [name, setName] = useState('')
  const [total, setTotal] = useState(0)
  const [options, setOptions] = useState<OptionsAdmin[]>([])
  const [activeOption, setActiveOption] = useState<OptionsAdmin>({} as OptionsAdmin)

  const router = useRouter()
  
  const isAdminPanel = router.pathname === '/admin'
  
  const getCategories = async () => {
    const { data } : { data: CategoryInterface[] } = await axios('/api/categories')
    setCategories(data)
  }

  useEffect(() => {
    getCategories()
  }, [])
  
  useEffect(() => {
    setCategorySelectec(categories[0])
  }, [categories])

  useEffect(() => {
    setOptions(OPTIONS_ADMIN)
  }, [])

  useEffect(() => {
    setActiveOption(options[0])
  }, [options])

  useEffect(() => {
    const newTotal = order.reduce((total, product) => (product.price * product.amount) + total, 0)
    setTotal(newTotal)
  }, [order])

  const handleClickCategory = (id: number) => {
    const category = categories.filter( cat => cat.id === id )
    setCategorySelectec(category[0])
    router.push('/')
  }

  const handleOptionActive = (id: number) => {
    const option = options.filter( opt => opt.id === id )
    setActiveOption(option[0])
  }

  const handleSetProduct = (product: Product) => setProduct(product)

  const handleChangeModal = () => setModal(!modal)

  const handleAddOrder = ( orderProduct: Order ) => {
    const { id, amount, nameProduct, price, image } = orderProduct
    const itemsOrder = { id, amount, nameProduct, price, image }
    const someOrder = order.some(orderState => orderState.id === orderProduct.id)

    // Update product quantity if exists produt
    if (someOrder) {
      const updateOrder = order.map( orderState => 
        orderState.id === orderProduct.id ? itemsOrder : orderState
      )
      setOrder(updateOrder)
      return 
    }
    setOrder([...order, itemsOrder])
    toast.success('Agregado al pedido')
    setModal(false)
  }

  const handleEditOrderAmount = (idOrder: number) => {
    const updateProduct = order.filter( product => product.id === idOrder )
    setProduct(updateProduct[0] as Product)
    setModal(!modal)
  }

  const handleDeleteProduct = (idProduct: number) => {
    const updatedProduct = order.filter(product => product.id !== idProduct)
    setOrder(updatedProduct)
  }

  const sendingOrder = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      await axios.post('/api/orders', {
        order,
        name,
        total,
        date: getDateTime()
      })

      // reset states
      setCategorySelectec(categories[0])
      setOrder([])
      setName('')
      setTotal(0)

      toast.success('Pedido Realizado Correctamente')
      setTimeout(() => {
        router.push('/')
      }, 2000)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <QuioscoContext.Provider
      value={{
        categories,
        categorySelected,
        handleClickCategory,
        product,
        handleSetProduct,
        modal,
        handleChangeModal,
        handleAddOrder,
        order,
        handleEditOrderAmount,
        handleDeleteProduct,
        name,
        setName,
        sendingOrder,
        total,
        isAdminPanel,
        handleOptionActive,
        activeOption,
        options
      }}
    >
      { children }
    </QuioscoContext.Provider>
  )
}

export { QuioscoProvider }
export default QuioscoContext