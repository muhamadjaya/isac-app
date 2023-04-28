export default {
    index: {
        method: 'GET',
        path: '/api/teachers'
    },
    store: {
        method: 'POST',
        path: '/api/teachers'
    },
    update: {
        method: 'PUT',
        path: '/api/teachers/:id'
    },
    delete: {
        method: 'DELETE',
        path: '/api/teachers/:id'
    },
    show: {
        method: 'GET',
        path: '/api/teachers/:id'
    },
}
