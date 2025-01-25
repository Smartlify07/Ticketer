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
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import EventDetails from './pages/(events)/EventDetails';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/:title" element={<EventDetails />} />
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
