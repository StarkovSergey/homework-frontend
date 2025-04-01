export type OrderStatus = 'pending' | 'in-progress' | 'completed'

export interface Order {
  id: string
  drink: string
  quantity: number
  status: OrderStatus
}

export type State = {
  orders: Order[]
}

export const initialOrdersState: State = {
  orders: [],
}

export const ordersReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'add_order': {
      // 📝 завершите реализацию
      return {
        orders: [...state.orders, action.payload.order],
      }
    }
    case 'update_order_status': {
      const updatedOrders = state.orders.map((order) => {
        if (order.id === action.payload.id) {
          let newStatus: OrderStatus

          if (order.status === 'pending') {
            newStatus = 'in-progress'
          } else if (order.status === 'in-progress') {
            newStatus = 'completed'
          } else {
            newStatus = order.status
          }

          return { ...order, status: newStatus }
        }
        return order
      })
      return { ...state, orders: updatedOrders }
    }
    case 'remove_order': {
      return {
        orders: state.orders.filter((order) => order.id !== action.payload.id),
      }
    }
    case 'reset': {
      return initialOrdersState
    }
    default:
      return state
  }
}

export type Actions =
  | ReturnType<typeof addOrder>
  | ReturnType<typeof updateOrderStatus>
  | ReturnType<typeof resetOrders>
  | ReturnType<typeof removeOrder>

/* ACTION CREATORS */
export const addOrder = (drink: string, quantity: number) => {
  // Для генерации id используем браузерное API (Crypto API)
  const id = crypto.randomUUID()

  // 📝 завершите реализацию
  const order: Order = {
    id,
    drink,
    status: 'pending',
    quantity,
  }

  return {
    type: 'add_order' as const,
    payload: { order },
  }
}

export const removeOrder = (id: string) => ({
  type: 'remove_order' as const,
  payload: { id },
})

export const updateOrderStatus = (id: string) => ({
  type: 'update_order_status' as const,
  payload: { id },
})

export const resetOrders = () => ({
  type: 'reset' as const,
})
