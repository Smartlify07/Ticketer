import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';

import GlobalContextProvider from './context/GlobalContext';
import Home from './pages/Home';
import RegisterPage from './pages/Register';
import TicketPage from './pages/TicketPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/ticket" element={<TicketPage />} />
      </>
    )
  );
  return (
    <GlobalContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </GlobalContextProvider>
  );
}

export default App;
