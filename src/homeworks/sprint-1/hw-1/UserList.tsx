import { User } from './Homework1'

type UserListProps = {
  // 📝 add type definition
  users: User[]
}

export const UserList = (props: UserListProps) => {
  return (
    <div id={'hw01-users'}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id} id={`hw01-user-${user.id}`}>
            <strong>{user.name}</strong> (Age: {user.age})<strong> Address: </strong>
            {user.address.street}, {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  )
}
