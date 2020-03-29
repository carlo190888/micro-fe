import React from 'react';
import { Switch, Route } from 'react-router';
import Homepage from '../page/Homepage';

const Rounting: React.FC = () => (
    <Switch>
        <Switch>
            <Route path="/">
                <Homepage />
            </Route>
        </Switch>
    </Switch>
)

export default React.memo(Rounting);