import { User } from './Homework2'
import { UserItem } from './UserItem'

type UserListProps = {
  users: User[] // 📝 add typing
  filterLosAngelesUsers: () => void // 📝 add typing
}

export const UserList = (props: UserListProps) => {
  return (
    <div id={'hw02-users'}>
      <button
        id={'hw02-filter-button'}
        // 📝 add onClick
        onClick={props.filterLosAngelesUsers}>
        Show me only users from Los Angeles 🌴
      </button>

      <ul>
        {/* 📝 отрендери список пользователей. В этот раз используй компонент UserItem */}

        {props.users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </ul>
    </div>
  )
}
