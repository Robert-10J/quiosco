export interface Product {
  id: number
  nameProduct: string
  price: number
  image: string
  categoryId: number
}

interface Category {
  id: number;
  nameCategory: string;
  icon: string;
  products?: Product[]
}

interface Order {
  id: number
  amount: number
  nameProduct: string
  price: number
  image?: string
  categoryId?: number
}

export type OrderCategoryId = Pick<Order, 'categoryId'>
export type OrderImage = Pick<Order, 'image'>

export interface Props {
  children: React.ReactNode
  page?: string 
}

export type Children = Pick<Props, 'children'>

export interface OrdersAPI {
  idOrder: number;
  name: string;
  date: string;
  total: number;
  order: {
    id: number;
    image: string;
    price: number;
    amount: number;
    nameProduct: string;
  }[];
  status: boolean;
}

export type IdOrder = Pick<OrdersAPI, 'idOrder'>

export interface OptionsAdmin {
  id: number
  img: string
  option: string
}