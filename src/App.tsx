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
import Checkout from './pages/(checkout)/Checkout';
import CheckoutProvider from './context/CheckoutContext';
import Profile from './pages/(profile)/Profile';
import ProfileProvider from './context/ProfileContext';
import ProtectedRoute from './Routes/ProtectedRoute';
import EventsProvider from './context/EventsContext';
import TicketsPage from './pages/(tickets)/TicketsPage';
import TicketsProvider from './context/TicketContext';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/explore"
            element={
              <EventsProvider>
                <Explore />
              </EventsProvider>
            }
          />
          <Route
            path="/explore/:id"
            element={
              <EventsProvider>
                <EventDetails />
              </EventsProvider>
            }
          />
          <Route
            path="/explore/:id/checkout"
            element={
              <ProtectedRoute>
                <EventsProvider>
                  <CheckoutProvider>
                    <Checkout />
                  </CheckoutProvider>
                </EventsProvider>
              </ProtectedRoute>
            }
          />

          <Route
            path="/mytickets"
            element={
              <ProtectedRoute>
                <TicketsProvider>
                  <TicketsPage />
                </TicketsProvider>
              </ProtectedRoute>
            }
          />
        </Route>
      </>
    )
  );
  return (
    <AuthProvider>
      <ProfileProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          transition={Slide}
        />
        <RouterProvider router={router}></RouterProvider>
      </ProfileProvider>
    </AuthProvider>
  );
}

export default App;
