import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import RoutingTask1Page from '@pages/routing-task1.page';
import RoutingTask2Page from '@pages/routing-task2.page';
import './home.page.scss';
import {useHistory} from 'react-router';

const RoutingTaskPage = () => {
    const history = useHistory();
    return (
        <div>
            <div>Start your routing task here</div>
            <div>
                <button onClick={() => history.push('/task3/reduct')} className="routing-button">
                    show Task3
                </button>
            </div>
            <Switch>
                <Route path="/task3/reduct">
                    <RoutingTask1Page />
                </Route>
                <Route path="/task3/text">
                    <RoutingTask2Page />
                </Route>
            </Switch>
        </div>
    );
};

export default RoutingTaskPage;
