import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main } from '../components';
import { routes } from './routes';

const Layout = () => (
  <>
    <Main>
      <Suspense fallback={<h1>loading...</h1>}>
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                key={route.component}
                path={route.path}
                exact={route.exact}
                component={lazy(() => import(`../pages/${route.component}`))}
              />
            );
          })}
        </Switch>
      </Suspense>
    </Main>
  </>
);

export default Layout;
