import { createRoot } from 'react-dom/client';
import './index.css';
import './external.css';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

import Home from './pages/home/page.tsx';
import Realisations from './pages/realisations/page.tsx';
import About from './pages/about/page.tsx';
import Contact from './pages/contact/page.tsx';
import MainLayout from './layout/MainLayout.tsx';
import DiseasesLayout from './layout/DiseasesLayout.tsx';
import ProgramAssistance from './pages/assistance_program/page.tsx';
import BreastCancer from './pages/maladies/cancer/page.tsx';
import Blog from './pages/blog/page.tsx';
import Partners from './pages/partners/page.tsx';
import Politique from './pages/politique/page.tsx';
import Condition from './pages/conditions/page.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'realisations', element: <Realisations /> },
            { path: 'a-propos', element: <About /> },
            { path: 'contact', element: <Contact /> },
            { path: 'aide-financiere', element: <ProgramAssistance /> },
            { path: 'cancer-seins', element: <BreastCancer /> },
            { path: 'blog', element: <Blog /> },
            { path: 'partenaires', element: <Partners /> },
            { path: 'politique-confidentialite', element: <Politique /> },
            { path: 'conditions-utilisation', element: <Condition /> },
            {
                path: 'diseases',
                element: <DiseasesLayout />,
                children: [
                    // Ajoute ici les routes internes si tu veux (comme /diseases/diabete etc.)
                ],
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);
