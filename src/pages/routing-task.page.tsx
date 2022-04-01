import React from 'react';
import './routing-task.page.scss';
import {Switch, Route} from 'react-router-dom';
import RoutingTask1Page from '@pages/routing-task1.page';
import RoutingTask2Page from '@pages/routing-task2.page';
import {useHistory} from 'react-router';
import {useTypedSelector} from '@shared/hooks/typed.hook';
import {useDispatch} from 'react-redux';
import {notesChange, redactorChange} from '@store/actions';

const RoutingTaskPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const state = useTypedSelector((state) => state.task3.tabs);
    const activeClass = 'tabs active';
    const noActive = 'tabs';
    const clickRed = () => {
        history.push('/task3/reduct');
        dispatch(redactorChange(true));
        dispatch(notesChange(false));
        console.log(state.redactor);
    };
    const clickNotes = () => {
        history.push('/task3/text');
        dispatch(notesChange(true));
        dispatch(redactorChange(false));
    };
    return (
        <div className="task3-wrap">
            <div className="navigation-wrap">
                <div className={state.redactor ? activeClass : noActive} onClick={clickRed}>
                    Task3 redactor
                </div>
                <div className={state.notes ? activeClass : noActive} onClick={clickNotes}>
                    Task3 notes
                </div>
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
