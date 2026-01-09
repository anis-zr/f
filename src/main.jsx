import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Aos from 'aos';
import 'aos/dist/aos.css'; // ← تأكد من استيراد CSS الخاص بـ AOS
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from './routes/router.jsx';
import AuthProvider from './utils/provider/AuthProvider.jsx';
 //import './i18n'; // ← استيراد إعدادات i18n

const queryClient = new QueryClient();
Aos.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);