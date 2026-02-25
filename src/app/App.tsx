import { useState } from 'react';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ProjectRouter } from './pages/ProjectRouter';
import { FilterPanel } from './components/FilterPanel';
import { ScrollToTop } from './components/ScrollToTop';

function Layout({ isMenuOpen, onToggleMenu, activeFilter, onFilterChange, onCloseMenu }: {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
  onCloseMenu: () => void;
}) {
  return (
    <>
      <ScrollToTop />
      <Outlet />
      <FilterPanel
        isOpen={isMenuOpen}
        activeFilter={activeFilter}
        onFilterChange={onFilterChange}
        onClose={onCloseMenu}
      />
    </>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout
          isMenuOpen={isMenuOpen}
          onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          onCloseMenu={() => setIsMenuOpen(false)}
        />
      ),
      children: [
        {
          index: true,
          element: (
            <Home
              isMenuOpen={isMenuOpen}
              onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          ),
        },
        {
          path: 'about',
          element: (
            <About
              isMenuOpen={isMenuOpen}
              onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
            />
          ),
        },
        {
          path: 'contact',
          element: (
            <Contact
              isMenuOpen={isMenuOpen}
              onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
            />
          ),
        },
        {
          path: 'project/:id',
          element: <ProjectRouter 
            isMenuOpen={isMenuOpen}
            onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}