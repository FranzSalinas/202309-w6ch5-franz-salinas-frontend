/* import { SyntheticEvent } from 'react';
import { useUsers } from '../../hooks/use.characters';

type Props = {
  closeModal: () => void;
};

export function Register() {
  const { register } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault;
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);

    register(formData);
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" />
        <input type="text" name="surname" placeholder="Apellidos" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="number" name="age" placeholder="Edad" />
        <label htmlFor="avatar"></label>
        <input type="file" name="avatar" placeholder="Avatar" />
        <button type="submit">Registrar</button>
        <button type="button"> Cancelar</button>
      </form>
    </>
  );
}
 */
