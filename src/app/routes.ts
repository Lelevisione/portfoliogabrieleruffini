import { createBrowserRouter } from 'react-router';
import App from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: 'project/:id',
        lazy: async () => {
          const { ProjectDetail } = await import('./pages/ProjectDetail');
          return { Component: ProjectDetail };
        },
      },
      {
        path: 'contact',
        lazy: async () => {
          const { Contact } = await import('./pages/Contact');
          return { Component: Contact };
        },
      },
    ],
  },
]);
