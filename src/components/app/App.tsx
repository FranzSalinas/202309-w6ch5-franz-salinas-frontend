import { Header } from '../header/header';
import '../details/details.scss';
import './app.scss';
import '../header/header.scss';
import { AppRoutes } from '../app.routes/app.routes';

function App() {
  return (
    <>
      <Header></Header>
      <AppRoutes></AppRoutes>
    </>
  );
}

export default App;
