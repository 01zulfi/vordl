import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './components/Auth/Login';
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
          <Route element={<Dashboard />} path="dashboard" />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
