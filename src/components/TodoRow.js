import React, { useState } from 'react'
import {
    Box,
    TableCell,
    TableRow,
    TextField,
    Button
} from '@material-ui/core'
import clsx from "clsx"
import { TodoState } from '../App'
import './styles.css'

export const TodoStateLabel = {
    1: 'completed',
    2: 'incomplete'
}

const TodoRow = ({ row, onTodoUpdate }) => {
    const [saveState, setSaveState] = useState(true)
    const [editing, setEditing] = useState(false)
    const [todoName, setTodoName] = useState(row.name)

    const todoNameCss = clsx({
        'todoCompleted': row.state === TodoState.completed
    })

    const todoStateCss = clsx({
        'todoStateCompleted': row.state === TodoState.completed,
        'todoStateInCompleted': row.state === TodoState.inComplete
    })

    const handleTodoChange = (e) => {
        setTodoName(e.target.value)
        setSaveState(e.target.value === row.name)
    }

    const renderTodoName = () => {
        return editing ? <TextField
            value={todoName}
            variant="outlined"
            onChange={handleTodoChange}
        /> : <Box className={todoNameCss}>{row.name}</Box>
    }

    const handleTodoSave = () => {
        setEditing(false)
        setSaveState(true)
        onTodoUpdate({
            id: row.id,
            name: todoName,
            state: row.state
        })
    }

    const handleTodoComplete = () => {
        setEditing(false)
        onTodoUpdate({
            id: row.id,
            name: todoName,
            state: TodoState.completed
        })
    }

    return <TableRow key={row.id}>
        <TableCell
            align='center'
            onClick={() => setEditing(true)}
        >
            {renderTodoName()}
        </TableCell>
        <TableCell align='center'>
            <Box className={todoStateCss}>
                {TodoStateLabel[row.state]}
            </Box>
        </TableCell>
        <TableCell align="right">
            {(row.state === TodoState.inComplete) && <Box className='todoActions'>
                <Button
                    onClick={handleTodoComplete}
                    variant="outlined"
                    color="secondary"
                >
                    Mark Completed
                </Button>
                <Button
                    className='saveTodoButton'
                    onClick={handleTodoSave}
                    variant="outlined"
                    color="primary"
                    disabled={saveState}
                >
                    Save
                </Button>
            </Box>
            }
        </TableCell>
    </TableRow>
}

export default TodoRow