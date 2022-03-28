export const Task3Actions = {
    ADD_NOTE: '[task3] ADD_NOTE',
    DELETE_NOTE: '[task3] DELETE_NOTE',
};

export const addNote = (data: Record<string, unknown>) => ({
    type: Task3Actions.ADD_NOTE,
    data: data,
});

export const deleteNote = (data: number) => ({
    type: Task3Actions.DELETE_NOTE,
    data: data,
});
