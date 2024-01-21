import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>

    <GoogleOAuthProvider clientId="868284171026-4dclr0g3olr2k7iq109mahbksdm0q9rd.apps.googleusercontent.com">
      <BrowserRouter>
          <App />
          {/* <ReactQueryDevtools/> */}
      </BrowserRouter>    
  </GoogleOAuthProvider>
  </QueryClientProvider>

)