import MessageSender from './MessageSender/MessageSender'
import { FriendMessage } from './FriendMessage/FriendMessage'
import { UserMessage } from './UserMessage/UserMessage'
import avatar from './avatar.webp'
import friendAvatar from './friend-avatar.webp'

/* 📝 Задание:
 * 1 - описать тип Message
 * 2 - описать тип MessageProps в файле UserMessage.tsx
 * 3 - в файле UserMessage.tsx отобразить приходящие данные
 * 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
 * 5 - доработайте стили на ваше усмотрение, чтобы UserMessage и FriendMessage отличались (не проверяется тестами)
 *
 * 🧙‍♂️ Компоненты UserMessage и FriendMessage содержать много дублирующего кода. Возможно, стоило бы сделать один компонент Message,
 * который бы принимал дополнительный пропс isFriend и в зависимости от него отображал сообщение другого стиля.
 * Можете попробовать сделать это самостоятельно, после того как задание пройдёт проверку (но лучше не отправлять на проверку повторно,
 * тесты ориентируются на id).
 * */

// 📝 создать правильный тип вместо any
export type Message = {
  id: number
  user: {
    avatar: string
    name: string
  }
  message: {
    text: string
    time: string
  }
}

// структуру объекта не менять
export const MESSAGE_0: Message = {
  id: 0,
  user: {
    avatar: avatar, // можно менять
    name: 'John Morris', // можно менять
  },
  message: {
    text: 'Hello! How is your studying going?', // можно менять
    time: '22:00', // можно менять
  },
}
export const FRIEND_MESSAGE_0: Message = {
  id: 100,
  user: {
    avatar: friendAvatar, // можно менять
    name: 'Friend Name', // можно менять
  },
  message: {
    text: "Let's fly into space! 🚀", // можно менять
    time: '22:00', // можно менять
  },
}

export const Homework5 = () => {
  return (
    <section id={'hw5'}>
      <h3>Homework 5</h3>
      <div>
        {/*проверка отображения (не менять)*/}
        <div>
          <UserMessage message={MESSAGE_0} />
          <FriendMessage message={FRIEND_MESSAGE_0} />
        </div>

        {/*для автоматической проверки (не менять)*/}
        <MessageSender M={UserMessage} />
      </div>
    </section>
  )
}
