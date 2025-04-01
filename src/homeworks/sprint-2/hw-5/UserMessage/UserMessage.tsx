import s from './UserMessage.module.css'
import { Message } from '../Homework5'

// 📝 создать правильный тип вместо any
export type UserMessageProps = {
  message: Message
}

// 📝 отобразить приходящие данные
export const UserMessage = (props: UserMessageProps) => {
  return (
    <div id={'hw5-message-' + props.message.id} className={s.message}>
      <div className={s.imageAndText}>
        <img
          width="200"
          id={'hw5-avatar-' + props.message.id}
          src={props.message.user.avatar}
          alt={props.message.user.name}
        />
        <div className={s.text}>
          <div id={'hw5-name-' + props.message.id} className={s.name}>
            {/*создаёт студент*/}
            {props.message.user.name}
          </div>
          <pre id={'hw5-text-' + props.message.id} className={s.messageText}>
            {/*создаёт студент*/}
            {props.message.message.text}
          </pre>
        </div>
      </div>
      <div id={'hw5-time-' + props.message.id} className={s.time}>
        {/*создаёт студент*/}
        {props.message.message.time}
      </div>
    </div>
  )
}
