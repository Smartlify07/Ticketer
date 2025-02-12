import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';
import AuthLayout from './layout/(auth)/AuthLayout';
import AuthProvider from './context/AuthContext';
import { Slide, ToastContainer } from 'react-toastify';
import RootLayout from './layout/RootLayout';
import CheckoutProvider from './context/CheckoutContext';
import ProfileProvider from './context/ProfileContext';
import ProtectedRoute from './Routes/ProtectedRoute';
import EventsProvider from './context/EventsContext';
import TicketsProvider from './context/TicketContext';
import { lazy, Suspense } from 'react';

function App() {
  const Home = lazy(() => import('./pages/Home'));
  const SignIn = lazy(() => import('./pages/(auth)/SignIn'));
  const SignUp = lazy(() => import('./pages/(auth)/SignUp'));
  const Profile = lazy(() => import('./pages/(profile)/Profile'));
  const Explore = lazy(() => import('./pages/Explore'));
  const EventDetails = lazy(() => import('./pages/(events)/EventDetails'));
  const Checkout = lazy(() => import('./pages/(checkout)/Checkout'));
  const TicketsPage = lazy(() => import('./pages/(tickets)/TicketsPage'));
  const TicketDetailsPage = lazy(
    () => import('./pages/(tickets)/TicketDetailsPage')
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/:id" element={<EventDetails />} />
          <Route
            path="/explore/:id/checkout"
            element={
              <ProtectedRoute>
                <CheckoutProvider>
                  <Checkout />
                </CheckoutProvider>
              </ProtectedRoute>
            }
          />

          <Route
            path="/mytickets"
            element={
              <ProtectedRoute>
                <TicketsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/mytickets/:ticketId"
            element={
              <ProtectedRoute>
                <TicketDetailsPage />
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
        <EventsProvider>
          <TicketsProvider>
            <ToastContainer
              position="bottom-right"
              autoClose={2000}
              transition={Slide}
            />
            <Suspense>
              <RouterProvider router={router}></RouterProvider>
            </Suspense>
          </TicketsProvider>
        </EventsProvider>
      </ProfileProvider>
    </AuthProvider>
  );
}

export default App;
