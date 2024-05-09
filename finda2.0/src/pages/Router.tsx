import Layout from '@/pages/Layout';
import Main from '@/pages/Main';
import Result from '@/pages/Result';
import { createBrowserRouter } from 'react-router-dom';
import Movie from '@/pages/Movie';
import DB from '@pages/DB';
import RouterError from '@components/Error/RouterError/Index';
import SignIn from './SignIn';

type RouterInfoType = {
  path: string;
  element: React.ReactNode;
  withAuthorization: boolean;
};

const RouterInfo: RouterInfoType[] = [
  {
    path: '/',
    element: <Main />,
    withAuthorization: false,
  },
  {
    path: '/result',
    element: <Result />,
    withAuthorization: false,
  },
  {
    path: '/result/:searchParam',
    element: <Result />,
    withAuthorization: false,
  },
  {
    path: '/result/genre/:searchParam',
    element: <Result />,
    withAuthorization: false,
  },
  {
    path: '/movie/:contentTitle',
    element: <Movie />,
    withAuthorization: true,
  },
  {
    path: '/DB',
    element: <DB />,
    withAuthorization: false,
  },
  {
    path: '/signin',
    element: <SignIn />,
    withAuthorization: false,
  },
];

const reactRouterObject = createBrowserRouter(
  RouterInfo.map(routerinfo => {
    return routerinfo.withAuthorization
      ? {
          path: routerinfo.path,
          element: <Layout>{routerinfo.element}</Layout>, // layout 컴포넌트에 로그인 정보 넘겨줄 예정
          errorElement: (
            <Layout>
              <RouterError />
            </Layout>
          ),
        }
      : {
          path: routerinfo.path,
          element: <Layout>{routerinfo.element}</Layout>,
          errorElement: (
            <Layout>
              <RouterError />
            </Layout>
          ),
        };
  }),
);
export default reactRouterObject;
