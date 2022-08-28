import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<Home redirectIfLoggedIn />} index />
          <Route element={<Home redirectIfLoggedIn={false} />} path="home" />
          <Route element={<Login />} path="login" />
          <Route element={<SignUp />} path="register" />
          <Route element={<Dashboard />} path="dashboard" />
        </Routes>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
