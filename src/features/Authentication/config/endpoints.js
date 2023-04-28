export default {
    'login': {
        method: 'POST',
        path: "/login"
    },
    'logout': {
        method: 'POST',
        path: "/logout"
    },
    'user': {
        method: 'GET',
        path: "/api/auth/user"
    },

    'sanctum-csrf-cookie': {
        method: "GET",
        path: "/sanctum/csrf-cookie"
    },
    'verify-email': {
        method: "GET",
        path: "/verify-email"
    },
}
