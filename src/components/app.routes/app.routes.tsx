import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { List } from '../list/list';

const Details = lazy(() => import('../page/details'));

export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/" element={<List></List>}></Route>
          <Route path="/details/:id" element={<Details></Details>}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
