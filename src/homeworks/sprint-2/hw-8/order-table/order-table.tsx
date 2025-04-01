import React from 'react'

import { Order } from '../model/orders-reducer.ts'
import s from './order-table.module.css'

export const OrderTable = ({
  orders,
  updateOrderStatus,
  handleRemoveOrder,
}: {
  orders: Order[]
  updateOrderStatus: (id: string) => void
  handleRemoveOrder: (id: string) => void
}) => {
  return (
    <table id="hw8-order-table" className={s.ordersTable}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Напиток</th>
          <th>Количество</th>
          <th className={s.statusTh}>Статус</th>
          <th className={s.actionsTh}>Действия</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id} id={`hw8-order-row-${order.id}`}>
            <td>{order.id}</td>
            <td>{order.drink}</td>
            <td>{order.quantity}</td>
            <td>{order.status}</td>
            <td>
              {order.status !== 'completed' && (
                <button
                  id={`hw8-update-order-button-${order.id}`}
                  onClick={() => updateOrderStatus(order.id)}
                  className={s.buttonUpdate}>
                  {order.status === 'pending' ? 'Начать приготовление' : 'Завершить заказ'}
                </button>
              )}
              <button
                id={`hw8-remove-order-button-${order.id}`}
                className={s.buttonRemove}
                onClick={() => handleRemoveOrder(order.id)}>
                Удалить
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
