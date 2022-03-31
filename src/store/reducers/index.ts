import {combineReducers} from 'redux';
import CoreReducer, {ICoreState} from './core.reducer';
import Task3Reducer, {ITask3State} from '@store/reducers/task3.reducer';

export interface IAppState {
    core: ICoreState;
    task3: ITask3State;
}

const reducers = combineReducers({
    core: CoreReducer,
    task3: Task3Reducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
