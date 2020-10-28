import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import { Loading } from './components/loading';

const Home = lazy(() => import('./pages/Home'));

const App: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter basename="/">
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
