import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';
import AuthLayout from './layout/(auth)/AuthLayout';
import SignUp from './pages/(auth)/SignUp';
import SignIn from './pages/(auth)/SignIn';
import AuthProvider from './context/AuthContext';
import { Slide, ToastContainer } from 'react-toastify';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </>
    )
  );
  return (
    <AuthProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        transition={Slide}
      />
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
