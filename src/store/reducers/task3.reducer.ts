import {IAction} from '@shared/interfaces';
import {Task3Actions} from '@store/actions';

export interface ITask3State {
    notes: any[];
}

const initialState: ITask3State = {
    notes: [{id: 0, title: 'testTitle', text: 'some text'}],
};

const Task3Reducer = (state = initialState, action: IAction): ITask3State => {
    switch (action.type) {
        case Task3Actions.ADD_NOTE: {
            const newState = {...state};
            newState.notes.push(action.data);
            return newState;
        }
        case Task3Actions.DELETE_NOTE: {
            const newState = {...state};
            newState.notes.forEach((item, i) => {
                if (item.id === action.data) {
                    newState.notes.splice(i, 1);
                }
            });
            return newState;
        }
        default:
            return state;
    }
};

export default Task3Reducer;
