export const Task3Actions = {
    ADD_NOTE: '[task3] ADD_NOTE',
    DELETE_NOTE: '[task3] DELETE_NOTE',
    REDACTOR_CHANGE: '[task3] REDACTOR_CHANGE',
    NOTES_CHANGE: '[task3] NOTES_CHANGE',
};

export const addNote = (data: Record<string, unknown>) => ({
    type: Task3Actions.ADD_NOTE,
    data: data,
});

export const deleteNote = (data: number) => ({
    type: Task3Actions.DELETE_NOTE,
    data: data,
});

export const redactorChange = (data: boolean) => ({
    type: Task3Actions.REDACTOR_CHANGE,
    data: data,
});

export const notesChange = (data: boolean) => ({
    type: Task3Actions.NOTES_CHANGE,
    data: data,
});
