import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer, Main } from '../components';
import routes from './routes';
import LayoutContent from '../content/LayoutContent.json';

const Layout = () => (
  <>
    <Header navList={routes} />
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
    <Footer content={LayoutContent.footer} />
  </>
);

export default Layout;
