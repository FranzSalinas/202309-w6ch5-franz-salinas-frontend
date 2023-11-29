import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useUsers } from '../../hooks/use.characters';
import { useState } from 'react';

export function UserButtons() {

  const [modalRegister, setModalOpen] = useState(false)
  const [modalLogin, setModalLogin] = useState(false)
  const { loggedUser } = useSelector((state: RootState) => state.userState);
  const { makeLogOut } = useUsers();
  
  const register = () => {
    setModalOpen(true)
    console.log(modalRegister)
  }

  return (
  
      <section>
        {!loggedUser && (
        
  
        <>
        <button onClick={()=> setModalLogin(true)}>Login</button>
            <button onClick={()=> setModalOpen(true)}>Register</button> }
          </>
        )

        {loggedUser && (
          <>
            <button onClick={makeLogOut}>Logout</button>
            <p>Hola {loggedUser.name}</p>
          </>
        )}

        <dialog open = {modalRegister}>
          <h2>Register</h2>
          

        </dialog>

      </section>
    
  );
}

