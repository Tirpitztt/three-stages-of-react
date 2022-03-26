import {IAction} from '@shared/interfaces';

enum ActionsType {
    GET_STATE = 'GET_STATE',
}
export interface ITask3State {
    task3: any[];
}

const initialState: ITask3State = {
    task3: [{title: 'testTitle', text: 'some text'}],
};

const Task3Reducer = (state = initialState, action: IAction): ITask3State => {
    switch (action.type) {
        case ActionsType.GET_STATE:
            const newState = {...state};
            newState.task3.push({title: 'second title', text: action.data});
            return newState;
        default:
            return state;
    }
};

export default Task3Reducer;
