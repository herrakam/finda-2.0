import reactRouterObject from '@/pages/Router';
import { RouterProvider } from 'react-router-dom';

function Apps() {
  return <RouterProvider router={reactRouterObject} />;
}

export default Apps;
