import {
    RETRIEVE_TODOS,
    CREATE_TODO,
    UPDATE_TODO
} from './type'

const initialState = []

const todoReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case RETRIEVE_TODOS:
            return [
                ...payload.data
            ]
        case CREATE_TODO:
            state.push(payload);
            return state;
        case UPDATE_TODO:
            return state.map((todo) => {
                if (todo.id === payload.id) {
                    return payload
                }
                return todo;
            });
        default:
            return state
    }
}

export default todoReducer
