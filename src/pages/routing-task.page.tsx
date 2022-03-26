import React from 'react';
import {Switch, Route} from 'react-router-dom';
import RoutingTask1Page from '@pages/routing-task1.page';
import RoutingTask2Page from '@pages/routing-task2.page';
import './home.page.scss';
import {useTypedSelector} from '@shared/hooks/typed.hook';

const RoutingTaskPage = () => {
    const {title, text} = useTypedSelector((state) => state.task3.task3[0]);
    return (
        <div>
            <div>Start your routing task here</div>
            <div>{title}</div>
            <div>{text}</div>
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
