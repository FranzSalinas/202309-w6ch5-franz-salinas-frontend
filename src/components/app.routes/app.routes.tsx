import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { List } from '../list/list';
import { LoginPage } from '../page/login.page';

const Details = lazy(() => import('../page/details'));

export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/" element={<List></List>}></Route>
          <Route path="/details/:id" element={<Details></Details>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/register"></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
