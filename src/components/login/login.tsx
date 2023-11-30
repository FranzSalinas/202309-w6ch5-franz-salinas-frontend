import { SyntheticEvent } from 'react';
import { LoginUser } from '../../model/user';
import { useUsers } from '../../hooks/use.characters';

export function Login() {
  const { login } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    loginData = {
      userName = formData.get('userName')?.toString() as string,
      password = formData.get('password')?.toString() as string,
    };
    console.log(loginData);
    login(loginData);
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={() => handleSubmit}>
        <input type="userName" name="userName" placeholder="userName" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
