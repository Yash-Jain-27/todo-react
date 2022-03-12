import axios from 'axios'

const api = axios.create({
    baseURL: 'https://user-node-js.herokuapp.com/',
    headers: {
        'Content-type': 'application/json'
    }
})

const getAll = () => {
    return api.get('/getTodo')
}

const createTodo = (data) => {
    return api.post('/addTodo', { todoDetails: data })
}

const updateTodo = (todoId, data) => {
    return api.put(`/updateTodo/${todoId}`, { todoDetails: data })
}

export {
    getAll,
    createTodo,
    updateTodo
}