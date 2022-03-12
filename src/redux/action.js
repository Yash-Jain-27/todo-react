import { createTodo, getAll, updateTodo } from "./todoService"
import { RETRIEVE_TODOS, CREATE_TODO, UPDATE_TODO } from './type'

export const retrieveTodo = () => async (dispatch) => {
    const result = await getAll()
    dispatch({
        type: RETRIEVE_TODOS,
        payload: result
    })
}

export const addTodo = (data) => async (dispatch) => {
    await createTodo(data)
    dispatch({
        type: CREATE_TODO,
        payload: data
    })
}

export const updateTodoById = (id, data) => async (dispatch) => {
    await updateTodo(id, data)
    dispatch({
        type: UPDATE_TODO,
        payload: data
    })
}
