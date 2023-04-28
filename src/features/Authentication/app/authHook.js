import { useEffect } from 'react'
import { useRouter } from 'next/router'

import axios from '@/lib/Axios'
import route from '@/features/Authentication/app/authRoute'
import useSWR from 'swr'
import APIClient from '@/lib/APIClient'
import endpoints from '@/features/Authentication/config/endpoints'

export default function useAuth ({ middleware, redirectIfAuthenticated } = {}) {
    const router = useRouter()
    const authApi = new APIClient(endpoints)

    const { data: user, error, mutate } = useSWR(authApi.url('user'), () =>
        authApi.instantCall("user", {
            onError: authApi.pushStateByCode('/verify-email', 409)
        }),
    )

    const csrf = () => authApi.instantCall('sanctum-csrf-cookie')

    const login = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        authApi.instantCall('login', {
            data: {
                ...props
            },
            onSuccess: mutate,
            onError: authApi.setErrorByCode(setErrors, 422)
        })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/reset-password', { token: router.query.token, ...props })
            .then(response =>
                router.push('/login?reset=' + btoa(response.data.status)),
            )
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resendEmailVerification = ({ setStatus }) => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        if (!error) {
            await authApi.instantCall('logout', {
                onSuccess: mutate
            })
        }
        window.location.replace(route.url('login'))
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user) {
            router.push(redirectIfAuthenticated)
        }
        if (window.location.pathname === '/verify-email' && user?.email_verified_at) {
            router.push(redirectIfAuthenticated)
        }
        if (middleware === 'auth' && error) {
            logout()
        }
    }, [user, error])

    return {
        user,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
        authApi,
    }
}
