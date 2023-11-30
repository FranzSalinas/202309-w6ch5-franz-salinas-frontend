import { Header } from '../header/header';
import '../details/details.scss';
import './app.scss';
import '../header/header.scss';
import { AppRoutes } from '../app.routes/app.routes';
/* import { UserButtons } from '../user.buttons/user.button'; */

import { useEffect } from 'react';
import { useUsers } from '../../hooks/use.characters';
import { UserButtons } from '../user.buttons/user.button';

function App() {
  const { loginWithToken } = useUsers();

  useEffect(() => {
    loginWithToken();
  }, []);

  return (
    <>
      <Header></Header>
      <UserButtons></UserButtons>
      <AppRoutes></AppRoutes>
    </>
  );
}

export default App;
