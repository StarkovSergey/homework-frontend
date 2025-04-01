import { User } from './Homework2'

type UserItemProps = {
  // 📝 add type definition
  user: User
}

// 📝 remove any
export const UserItem = (props: UserItemProps) => {
  return (
    <li key={props.user.id} id={`hw02-user-${props.user.id}`}>
      <strong>{props.user.name}</strong> (Age: {props.user.age})<strong> Address: </strong>
      {props.user.address.street}, {props.user.address.city}
    </li>
  )
}
