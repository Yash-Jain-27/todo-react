import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, TextField, Button } from '@material-ui/core'
import Todo from './components/Todo'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import { addTodo, retrieveTodo, updateTodoById } from './redux/action';

export const TodoState = {
    completed: 1,
    inComplete: 2
}

const App = () => {
    const [addTodoState, setAddTodoState] = useState(true)
    const [refresh, setRefresh] = useState(false)
    const [todoName, setTodoName] = useState('')
    const reduxState = useSelector((state) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(retrieveTodo())
    }, [refresh])

    const handleAddTodo = async (e) => {
        e.preventDefault()
        const data = {
            id: uuidv4(),
            name: todoName,
            state: TodoState.inComplete
        }

        await dispatch(addTodo(data))

        // dispatch({
        //     type: CREATE_TODO,
        //     payload: {
        //         id: uuidv4(),
        //         name: todoName,
        //         state: TodoState.inComplete
        //     }
        // })

        setRefresh(!refresh)
        setTodoName('')
        setAddTodoState(true)
    }

    const handleUpdateTodo = (row) => {
        const data = {
            id: row.id,
            name: row.name,
            state: row.state
        }

        dispatch(updateTodoById(row.id, data))

        // dispatch({
        //     type: UPDATE_TODO,
        //     payload: {
        //         id: row.id,
        //         name: row.name,
        //         state: row.state
        //     }
        // })
        setRefresh(!refresh)
    }

    const handleTodoChange = (e) => {
        setTodoName(e.target.value)
        setAddTodoState(e.target.value === '')
    }

    const renderAddTodo = () => {
        return <Box mb={6}>
            <form className='addTodoForm' onSubmit={handleAddTodo}>
                <TextField
                    value={todoName}
                    label="Todo"
                    variant="outlined"
                    onChange={handleTodoChange}
                />
                <Button
                    className='addTodoButton'
                    onClick={handleAddTodo}
                    variant="contained"
                    color="primary"
                    disabled={addTodoState}
                >
                    Add Todo
                </Button>
            </form>
        </Box>
    }

    return <>
        {renderAddTodo()}
        <Todo
            todoList={reduxState}
            onTodoUpdate={handleUpdateTodo}
        />
    </>
}

export default App
