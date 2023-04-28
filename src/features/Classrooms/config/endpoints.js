export default {
    index: {
        method: 'GET',
        path: '/api/classrooms'
    },
    detail: {
        method: 'GET',
        path: '/api/classrooms/:id'
    },
    store: {
        method: 'POST',
        path: '/api/classrooms'
    },
    update: {
        method: 'PUT',
        path: '/api/classrooms/:id'
    },
    delete: {
        'method': 'DELETE',
        path: '/api/classrooms/:id'
    }

}
