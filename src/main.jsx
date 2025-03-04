import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import ArtworkPage from './pages/ArtworkPage.jsx';
import MusicPage from './pages/MusicPage.jsx';
import GamesPage from './pages/GamesPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/projects',
    element: <ProjectPage/>
  },
  {
    path: '/artworks',
    element: <ArtworkPage/>
  },
  {
    path: '/music',
    element: <MusicPage/>
  },
  {
    path: '/games',
    element: <GamesPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <RouterProvider router={router}/>

  </StrictMode>
);
