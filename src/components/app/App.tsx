import { Header } from '../header/header';
import '../details/details.scss';
import './app.scss';
import '../header/header.scss';
import { AppRoutes } from '../app.routes/app.routes';
import { UserButtons } from '../user.buttons/user.button';

import { useEffect } from 'react';
import { useUsers } from '../../hooks/use.characters';

function App() {
  const { loginWithToken } = useUsers();

  useEffect(() => {
    loginWithToken();
  }, []);

  return (
    <>
      <Header></Header>
      <AppRoutes></AppRoutes>
      <UserButtons></UserButtons>
    </>
  );
}

export default App;
