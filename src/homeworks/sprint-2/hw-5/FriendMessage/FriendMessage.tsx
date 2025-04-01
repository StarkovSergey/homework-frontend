import React from 'react'
import s from './FriendMessage.module.css'
import { Message } from '../Homework5'

// 📝 создать тип вместо any и отобразить приходящие данные
export const FriendMessage = (props: { message: Message }) => {
  return (
    <div id={'hw5-friend-message-' + props.message.id} className={s.friendMessage}>
      <div className={s.friendImageAndText}>
        <img width="200" alt="avatar" id={'hw5-friend-avatar-' + props.message.id} src={props.message.user.avatar} />
        <div className={s.friendText}>
          <div id={'hw5-friend-name-' + props.message.id} className={s.friendName}>
            {props.message.user.name}
          </div>
          <pre id={'hw5-friend-text-' + props.message.id} className={s.friendMessageText}>
            {/*создаёт студент*/}
            {props.message.message.text}
          </pre>
        </div>
      </div>
      <div id={'hw5-friend-time-' + props.message.id} className={s.friendTime}>
        {/*создаёт студент*/}
        {props.message.message.time}
      </div>
    </div>
  )
}
