import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import AuthProvider from './providers/AuthProvider'
import MyProfilePage from './pages/MyProfilePage/MyProfilePage'
import UpdateProfilePage from './pages/UpdateProfilePage/UpdateProfilePage'
import CampaignsPage from './pages/CampaignsPage/CampaignsPage'
import CampaignDetailsPage from './pages/CampaignDetailsPage/CampaignDetailsPage';
import MyCampaignPage from './pages/MyCampaignPage/MyCampaignPage';
import AddCampaignPage from './pages/AddCampaignPage/AddCampaignPage';
import MyDonationPage from './pages/MyDonationPage/MyDonationPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <RegisterPage />
      },
      {
        path: '/profile',
        element: <MyProfilePage />
      },
      {
        path: '/update-profile',
        element: <UpdateProfilePage />
      },
      {
        path: '/campaigns',
        element: <CampaignsPage />
      },
      {
        path: '/campaigns/:id',
        element: <CampaignDetailsPage />
      },
      {
        path: '/add-campaign',
        element: <AddCampaignPage />
      },
      {
        path: '/my-campaigns',
        element: <MyCampaignPage />,
      },
      {
        path: '/my-campaigns/:id',
        element: <CampaignDetailsPage />
      },
      {
        path:'/my-donations',
        element: <MyDonationPage />
      }
    ]
  },

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
