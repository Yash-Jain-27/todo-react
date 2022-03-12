import React from 'react'
import {
    Box,
    TableContainer,
    Table,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
} from '@material-ui/core'
import './styles.css'
import TodoRow from './TodoRow'

const Todo = (props) => {
    const { todoList, onTodoUpdate } = props

    if (!todoList.length) {
        return <Box className='noTodos' component='h2'>No Todos Yet!!!!</Box>
    }

    return <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell align='center'>Name</TableCell>
                    <TableCell align='center'>Status</TableCell>
                    <TableCell align='center'>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {todoList.map((row) => <TodoRow
                    key={row.id}
                    row={row}
                    onTodoUpdate={onTodoUpdate}
                />)}
            </TableBody>
        </Table>
    </TableContainer>
}


export default Todo
