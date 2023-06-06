import Layout from '@/pages/Layout';
import Main from '@/pages/Main';
import { createBrowserRouter } from 'react-router-dom';

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
];

const reactRouterObject = createBrowserRouter(
  RouterInfo.map(routerinfo => {
    return routerinfo.withAuthorization
      ? {
          path: routerinfo.path,
          element: <Layout>{routerinfo.element}</Layout>, // layout 컴포넌트에 로그인 정보 넘겨줄 예정
        }
      : {
          path: routerinfo.path,
          element: <Layout>{routerinfo.element}</Layout>,
        };
  }),
);
export default reactRouterObject;
