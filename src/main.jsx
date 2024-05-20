import React from 'react'
import ReactDOM from 'react-dom/client'



import './index.css'


//react router setup
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
          <Toaster />
        </div>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
