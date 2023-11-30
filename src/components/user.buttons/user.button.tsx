import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Link } from 'react-router-dom';

export function UserButtons() {
  const { loggedUser } = useSelector((state: RootState) => state.userState);

  return (
    <section>
      {!loggedUser && (
        <>
          <Link to={'/login'}>
            <button>Login</button>
          </Link>
          <Link to={'/register'}>
            <button>Register</button>
          </Link>
        </>
      )}

      {loggedUser && (
        <>
          <button>Logout</button>
          <p>Hola {loggedUser.name}</p>
        </>
      )}
    </section>
  );
}
