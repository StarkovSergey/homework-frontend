import React, { useReducer, useState } from 'react'
import s from './homework8.module.css'
import {
  addOrder,
  initialOrdersState,
  ordersReducer,
  removeOrder,
  resetOrders,
  updateOrderStatus,
} from './model/orders-reducer'
import { OrderTable } from './order-table/order-table.tsx'

/*
 * 📝 В этом задании вам нужно закончить реализацию приложения для кофейни.
 *
 * 1. Добавьте типизацию, избавьтесь от any
 * 2. Закончите реализацию добавление нового заказа - новый заказ должен добавляться в конец списка заказов и иметь статус 'pending'
 * 3. Полностью реализуйте удаление заказа - при клике на кнопку удаления заказа, заказ должен удаляться из списка заказов
 * */

export const Homework8 = () => {
  const [state, dispatch] = useReducer(ordersReducer, initialOrdersState)
  const [drink, setDrink] = useState('')
  const [quantity, setQuantity] = useState(1)

  const isNoOrders = state.orders.length === 0

  const handleAddOrder = () => {
    if (drink.trim() === '' || quantity <= 0) return
    dispatch(addOrder(drink, quantity))
    setDrink('')
    setQuantity(1)
  }

  const handleResetOrders = () => {
    dispatch(resetOrders())
  }

  const handleUpdateOrderStatus = (id: string) => {
    dispatch(updateOrderStatus(id))
  }

  const handleRemoveOrder = (id: string) => {
    dispatch(removeOrder(id))
  }

  return (
    <section id="hw8">
      <h3>Homework 8 - Кофейня ☕</h3>

      <div className={s.box}>
        <div className={s.orderForm}>
          <input
            id="hw8-input-drink"
            type="text"
            placeholder="Название напитка"
            value={drink}
            onChange={(e) => setDrink(e.target.value)}
            className={s.inputDrink}
          />
          <input
            id="hw8-input-quantity"
            type="number"
            placeholder="Количество"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className={s.inputQuantity}
          />
          <button id="hw8-add-order-button" onClick={handleAddOrder} className={s.buttonAdd}>
            Добавить заказ ➕
          </button>
        </div>
        {isNoOrders ? (
          <p className={s.emptyOrders} id="hw8-no-orders">
            Заказов нет
          </p>
        ) : (
          <OrderTable
            orders={state.orders}
            updateOrderStatus={handleUpdateOrderStatus}
            handleRemoveOrder={handleRemoveOrder}
          />
        )}

        {state.orders.length > 0 && (
          <button id="hw8-reset-button" onClick={handleResetOrders} className={s.buttonReset}>
            Сбросить заказы
          </button>
        )}
      </div>
    </section>
  )
}
