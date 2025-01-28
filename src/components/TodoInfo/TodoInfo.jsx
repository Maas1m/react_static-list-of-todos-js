import { UserInfo } from '../UserInfo/UserInfo';
import usersFromServer from '../../api/users.json';


function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const TodoInfo = ({ todo }) => (
  <article
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo
      key={getUserById(todo.userId).id}
      user={getUserById(todo.userId)}
    />
  </article>
);
